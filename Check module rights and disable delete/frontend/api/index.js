// const query = "SELECT id FROM view_id_list"
const { WeaTools } = ecCom;

const getList = (q) => {
  return WeaTools.callApi("/api/moderight/1", 'GET',{qquery});
}

const getList2 = params => {
  return WeaTools.callApi("/api/moderight/1", 'GET',params);
}

const API = {getList, getList2}
ecodeSDK.exp(API)
