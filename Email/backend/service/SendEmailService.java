package com.api.workflowEmail2.service;

import java.util.Map;

public interface SendEmailService {
    public Map<String, Object> sendEmail(Map<String, Object> params);
    public Map<String, Object> checkNeedSend(Map<String, Object> params);
}
