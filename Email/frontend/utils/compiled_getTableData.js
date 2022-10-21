"use strict";

var getTableData = function getTableData(datas) {
  var list = Object.values(datas);
  var tableData = list.map(function (obj, index) {
    return {
      key: index,
      id: obj.id,
      workflowid: obj.workflowid,
      nodeid: obj.nodeid,
      emailField: obj.emailField,
      attachmentField: obj.attachmentField,
      contentFields: obj.contentFields,
      emailTitle: obj.emailTitle,
      includeAttachment: obj.includeAttachment
    };
  });
  return tableData;
};

ecodeSDK.exp(getTableData);