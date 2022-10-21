"use strict";

// const query = "SELECT id FROM view_id_list"
var _ecCom = ecCom,
    WeaTools = _ecCom.WeaTools;

var getList = function getList(q) {
  return WeaTools.callApi("/api/moderight/1", 'GET', {
    qquery: qquery
  });
};

var getList2 = function getList2(params) {
  return WeaTools.callApi("/api/moderight/1", 'GET', params);
};

var API = {
  getList: getList,
  getList2: getList2
};
ecodeSDK.exp(API);