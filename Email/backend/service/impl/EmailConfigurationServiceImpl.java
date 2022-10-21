package com.api.workflowEmail2.service.impl;

import com.api.workflowEmail2.cmd.AddEmailConfigCmd;
import com.api.workflowEmail2.cmd.DeleteEmailConfigCmd;
import com.api.workflowEmail2.cmd.GetEmailConfigsCmd;
import com.api.workflowEmail2.service.EmailConfigurationService;
import com.engine.core.impl.Service;

import java.util.Map;


public class EmailConfigurationServiceImpl extends Service implements EmailConfigurationService {
    @Override
    public Map<String,Object> addConfiguration(Map<String, Object> params){
        return commandExecutor.execute(new AddEmailConfigCmd(user, params));
    }
    @Override
    public Map<String,Object> deleteConfiguration(Map<String, Object> params){
        return commandExecutor.execute(new DeleteEmailConfigCmd(user, params));
    }
    @Override
    public Map<String,Object> getConfigurations(Map<String, Object> params){
        return commandExecutor.execute(new GetEmailConfigsCmd(user, params));
    }
}
