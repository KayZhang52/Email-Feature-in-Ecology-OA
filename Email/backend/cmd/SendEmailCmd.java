package com.api.workflowEmail2.cmd;

import com.alibaba.fastjson.JSON;
import com.engine.common.biz.AbstractCommonCommand;
import com.engine.common.entity.BizLogContext;
import com.engine.core.interceptor.CommandContext;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import weaver.conn.RecordSet;
import weaver.email.EmailWorkRunnable;
import weaver.hrm.User;

import java.util.HashMap;
import java.util.Map;

public class SendEmailCmd extends AbstractCommonCommand<Map<String,Object>> {
    public SendEmailCmd(User user, Map<String, Object> params){
        this.user = user;
        this.params = params;
    }
    @Override
    public Map<String, Object> execute(CommandContext commandContext){
        System.out.println("v2");
        Map<String, Object> apidatas = new HashMap<String, Object>();
        if (user == null){
            apidatas.put("hasRight", false);
            return apidatas;
        }
        apidatas.put("hasRight", true);

        String nodeid = params.get("nodeid").toString();
        String workflowid = params.get("workflowid").toString();
        String requestid = params.get("requestid").toString();

        RecordSet rs = new RecordSet();
        String sql1 = "select * from wf_email_config where workflowid = ? and nodeid = ?";
        rs.executeQuery(sql1, workflowid, nodeid);
        if(!rs.next()){
            apidatas.put("error", "no configuration found");
            return apidatas;
        }
        String emailField = rs.getString("emailField");
        String attachmentField = rs.getString("attachmentField");
        String[] contentFields = rs.getString("contentFields").split(",");
        String subject = rs.getString("emailTitle");
        rs.afterLast();

        // get emailField, contentFields values from
        String sql10 = "select formid from workflow_base where id = ?";
        rs.executeQuery(sql10, workflowid);
        if(!rs.next()){
            apidatas.put("error", "could not find form id");
            return apidatas;
        }
        String formid = String.valueOf(rs.getInt("formid"));

        String sql2 = "select tablename from workflow_bill where id=?";
        rs.executeQuery(sql2, formid);
        if(!rs.next()){
            apidatas.put("error", "could not find workflow form");
            return apidatas;
        }
        String tablename = rs.getString("tablename");
        System.out.println("tablename: " + tablename);
        System.out.println("requestid: " + requestid);
        rs.afterLast();
        String sql3 = "select * from " + tablename + " where requestid = " + requestid;
        System.out.println("sql3: " + sql3);
        rs.executeQuery(sql3);
        if(!rs.next()){
            apidatas.put("error", "no form data found");
            return apidatas;
        }
        StringBuffer c = new StringBuffer();
        for(int i = 0; i < contentFields.length; i++){
            c.append(rs.getString(contentFields[i]));
            c.append("\n\n");
        }
        String sendTo = rs.getString(emailField);
        EmailWorkRunnable ewr = new EmailWorkRunnable(sendTo, subject, c.toString());
        String docids = rs.getString(attachmentField);
        if(true){
            ewr.setDocIds(docids);
        }
        (new Thread((Runnable) ewr)).start();
        apidatas.put("to", sendTo);
        apidatas.put("subject", subject);
        apidatas.put("sent", true);
        return apidatas;
    }

    @Override
    public BizLogContext getLogContext() {
        return null;
    }
}