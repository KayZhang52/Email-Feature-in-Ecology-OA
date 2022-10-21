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

public class CheckNeedEmailCmd extends AbstractCommonCommand<Map<String,Object>> {
    public CheckNeedEmailCmd(User user, Map<String, Object> params){
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

        RecordSet rs = new RecordSet();
        String sql1 = "select * from wf_email_config where workflowid = ? and nodeid = ?";
        rs.executeQuery(sql1, params.get("workflowid"), params.get("nodeid"));
        if(!rs.next()){
            apidatas.put("ifSend", "false");
            return apidatas;
        }

        apidatas.put("ifSend", "true");
        return apidatas;
    }

    @Override
    public BizLogContext getLogContext() {
        return null;
    }
}