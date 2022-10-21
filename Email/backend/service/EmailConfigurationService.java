package com.api.workflowEmail2.service;

import java.util.Map;

public interface EmailConfigurationService {
    public Map<String, Object> addConfiguration(Map<String, Object> params);
    public Map<String, Object> deleteConfiguration(Map<String, Object>params);
    public Map<String, Object> getConfigurations(Map<String, Object>params);
}
