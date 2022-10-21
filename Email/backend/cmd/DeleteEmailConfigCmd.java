package com.api.workflowEmail2.cmd;

import com.engine.common.biz.AbstractCommonCommand;
import com.engine.common.entity.BizLogContext;
import com.engine.core.interceptor.CommandContext;
import weaver.conn.RecordSet;
import weaver.general.Util;
import weaver.hrm.User;

import java.util.HashMap;
import java.util.Map;

public class DeleteEmailConfigCmd  extends AbstractCommonCommand<Map<String,Object>> {
    public DeleteEmailConfigCmd(User user, Map<String, Object> params){
        this.user = user;
        this.params = params;
    }

    @Override
    public Map<String, Object> execute(CommandContext commandContext){
        Map<String, Object> apidatas = new HashMap<String, Object>();
        String configid = Util.null2String(params.get("configid"));
        RecordSet rs= new RecordSet();
        String sql = "delete from wf_email_config where id = ?";
        boolean result = rs.executeQuery(sql, configid);

        if(result)apidatas.put("status", "1");
        else apidatas.put("status", "0");

        return apidatas;
    }
    @Override
    public BizLogContext getLogContext() {
        return null;
    }
}