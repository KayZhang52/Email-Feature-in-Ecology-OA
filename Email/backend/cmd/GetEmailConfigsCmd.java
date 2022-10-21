package com.api.workflowEmail2.cmd;


import com.alibaba.fastjson.JSONObject;
import com.engine.common.biz.AbstractCommonCommand;
import com.engine.common.entity.BizLogContext;
import com.engine.core.interceptor.CommandContext;
import weaver.conn.RecordSet;
import weaver.general.Util;
import weaver.hrm.User;

import java.util.HashMap;
import java.util.Map;

// this returns list of config object for rendering of table on configuration page
public class GetEmailConfigsCmd extends AbstractCommonCommand<Map<String,Object>>  {
    public GetEmailConfigsCmd(User user, Map<String, Object> params){
        this.user = user;
        this.params = params;
    }

    @Override
    public Map<String, Object> execute(CommandContext commandContext){
        Map<String, Object> apidatas = new HashMap<String, Object>();
        RecordSet rs = new RecordSet();
        String sql = "select id, workflowid, nodeid, emailField, attachmentField, contentFields, emailTitle, includeAttachment from wf_email_config";
        rs.executeQuery(sql);
        HashMap datas = new HashMap();
        int count = 0;
        while(rs.next()){
            Map<String, String> row = new HashMap<String,String>();
            String id = Integer.toString(rs.getInt("id"));
            String workflowid = Integer.toString(rs.getInt("workflowid"));
            String nodeid = Integer.toString(rs.getInt("nodeid"));
            String emailField = Util.null2String(rs.getString("emailField"));
            String attachmentField = Util.null2String(rs.getString("attachmentField"));
            String contentFields = Util.null2String(rs.getString("contentFields"));
            String emailTitle = Util.null2String(rs.getString("emailTitle"));
            String includeAttachment = Integer.toString(rs.getInt("includeAttachment"));

            row.put("id", id);
            row.put("workflowid", workflowid);
            row.put("nodeid", nodeid);
            row.put("emailField", emailField);
            row.put("attachmentField", attachmentField);
            row.put("contentFields", contentFields);
            row.put("emailTitle", emailTitle);
            row.put("includeAttachment", includeAttachment);

            count++;
            datas.put(Integer.toString(count), row);
            System.out.println("email:get:count:" + JSONObject.toJSONString(datas));
        }
        apidatas.put("datas", datas);
        return apidatas;
    }
    @Override
    public BizLogContext getLogContext() {
        return null;
    }
}
