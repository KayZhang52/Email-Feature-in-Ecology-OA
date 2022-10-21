package com.api.workflowEmail2.service.impl;

import com.api.workflowEmail2.cmd.AddEmailConfigCmd;
import com.api.workflowEmail2.cmd.CheckNeedEmailCmd;
import com.api.workflowEmail2.cmd.SendEmailCmd;
import com.api.workflowEmail2.service.SendEmailService;
import com.engine.core.impl.Service;

import java.util.Map;

public class SendEmailServiceImpl extends Service implements SendEmailService {
    @Override
    public Map<String,Object> sendEmail(Map<String, Object> params){
        return commandExecutor.execute(new SendEmailCmd(user, params));
    }
    public Map<String, Object> checkNeedSend(Map<String, Object> params){
        return commandExecutor.execute(new CheckNeedEmailCmd(user, params));
    }
}
