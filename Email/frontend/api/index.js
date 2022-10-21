const { WeaTools } = ecCom;


const addConfig = params => {
  return WeaTools.callApi('/api/workflow/externalEmail/config/add', 'POST', params);
};

const getConfigs = params => {
  return WeaTools.callApi('/api/workflow/externalEmail/config/get', 'GET', params);
};

const deleteConfig = params => {
  return WeaTools.callApi('/api/workflow/externalEmail/config/delete', 'GET', params);
};

const sendEmail = params => {
  return WeaTools.callApi('/api/workflow/externalEmail/send', 'POST', params);
};

const getFormFields = formid => {
  return WeaTools.callApi('/api/workflow/newReport/getFormFields', 'GET', { formid, isbill: "1"})
}

const API = {
  addConfig,
  getConfigs,
  deleteConfig,
  sendEmail,
  getFormFields
}

ecodeSDK.exp(API);





