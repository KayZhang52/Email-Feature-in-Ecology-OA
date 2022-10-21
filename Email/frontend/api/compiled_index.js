"use strict";

var _ecCom = ecCom,
    WeaTools = _ecCom.WeaTools;

var addConfig = function addConfig(params) {
  return WeaTools.callApi('/api/workflow/externalEmail/config/add', 'POST', params);
};

var getConfigs = function getConfigs(params) {
  return WeaTools.callApi('/api/workflow/externalEmail/config/get', 'GET', params);
};

var deleteConfig = function deleteConfig(params) {
  return WeaTools.callApi('/api/workflow/externalEmail/config/delete', 'GET', params);
};

var sendEmail = function sendEmail(params) {
  return WeaTools.callApi('/api/workflow/externalEmail/send', 'POST', params);
};

var getFormFields = function getFormFields(formid) {
  return WeaTools.callApi('/api/workflow/newReport/getFormFields', 'GET', {
    formid: formid,
    isbill: "1"
  });
};

var API = {
  addConfig: addConfig,
  getConfigs: getConfigs,
  deleteConfig: deleteConfig,
  sendEmail: sendEmail,
  getFormFields: getFormFields
};
ecodeSDK.exp(API);