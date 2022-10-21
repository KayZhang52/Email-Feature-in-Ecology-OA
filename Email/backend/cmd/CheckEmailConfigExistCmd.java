package com.api.workflowEmail2.cmd;

import com.engine.common.biz.AbstractCommonCommand;
import com.engine.common.entity.BizLogContext;
import com.engine.core.interceptor.CommandContext;
import weaver.conn.RecordSet;
import weaver.general.Util;
import weaver.hrm.User;

import java.util.HashMap;
import java.util.Map;

public class CheckEmailConfigExistCmd extends AbstractCommonCommand<Map<String,Object>> {
    public CheckEmailConfigExistCmd(User user, Map<String, Object> params){
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
        RecordSet rs = new RecordSet();
        String sql = "select * from wf_email_config where workflowid = ? and nodeid = ?";
        rs.executeQuery(sql, workflowid, nodeid);
        if(rs.next()){
            apidatas.put("email", "1");
        }else{
            apidatas.put("email", "0");
        }

        return apidatas;
    }
    @Override
    public BizLogContext getLogContext() {
        return null;
    }
}
