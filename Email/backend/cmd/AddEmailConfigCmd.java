package com.api.workflowEmail2.cmd;

import com.engine.common.biz.AbstractCommonCommand;
import com.engine.common.entity.BizLogContext;
import com.engine.core.interceptor.CommandContext;
import weaver.conn.RecordSet;
import weaver.general.Util;
import weaver.hrm.User;

import java.util.HashMap;
import java.util.Map;

public class AddEmailConfigCmd  extends AbstractCommonCommand<Map<String,Object>> {
    public AddEmailConfigCmd(User user, Map<String, Object> params){
        this.user = user;
        this.params = params;
    }

    @Override
    public Map<String, Object> execute(CommandContext commandContext){
        Map<String, Object> apidatas = new HashMap<String, Object>();
        if (null == user){
            apidatas.put("hasRight", false);
            return apidatas;
        }
        apidatas.put("hasRight", true);

        String workflowid = Util.null2String(params.get("workflowid"));
        String nodeid = Util.null2String(params.get("nodeid"));
        String emailField = Util.null2String(params.get("emailField"));
        String attachmentField = Util.null2String(params.get("attachmentField"));
        String contentFields = Util.null2String(params.get("contentFields"));
        String emailTitle = Util.null2String(params.get("emailTitle"));
        String includeAttachment = Util.null2String(params.get("includeAttachment"));

        RecordSet recordSet = new RecordSet();
        String sql = "insert into wf_email_config (workflowid, nodeid, emailField, attachmentField, contentFields," +
                "emailTitle, includeAttachment) values (?,?,?,?,?,?,?)";
        String sql2 = "insert into wf_email_config (workflowid, nodeid, emailField, attachmentField, contentFields," +
                "emailTitle, includeAttachment) values (%s,%s,%s,%s,%s,%s,%s)";
        System.out.println(String.format(sql2,workflowid, nodeid, emailField, attachmentField, contentFields, emailTitle, includeAttachment));
        boolean result = recordSet.executeUpdate(sql,workflowid, nodeid, emailField, attachmentField, contentFields, emailTitle, includeAttachment);
        if(result)apidatas.put("status", "1");
        else apidatas.put("status", "0");

        return apidatas;
    }
    @Override
    public BizLogContext getLogContext() {
        return null;
    }
}

