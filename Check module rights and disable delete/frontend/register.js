const APPID = "58d1ad00629d4868b98364087816c370"

const NewRightMenu = (props) => {
  const acParams = {
    appId:APPID,
    name:'NewRightMenu', 
    isPage:false, 
    noCss:true,
    props,
  } 
  return ecodeSDK.getAsyncCom(acParams);
}
const NewTable = (props) => {
  const acParams = {
    appId:APPID,
    name:'NewTable', 
    isPage:false, 
    noCss:true, 
    props,
  } 
  return ecodeSDK.getAsyncCom(acParams);
}
const NewReqTop = (props) => {
  const acParams = {
    appId:APPID,
    name:'NewReqTop', 
    isPage:false, 
    noCss:true, 
    props,
  } 
  return ecodeSDK.getAsyncCom(acParams);
}

//去除表单右键菜单的删除选项
ecodeSDK.overwriteClassFnQueueMapSet('WeaRightMenu', {
  fn: (Com, newProps) => {
    if (newProps._noOverwrite) return;
    if (window.location.hash.indexOf('/main/cube/card') >= 0) {
      const hash = window.location.hash
      const urlsearchparams = new URLSearchParams(hash.slice(hash.indexOf('?')+1, -1))
      const billid = urlsearchparams.get('billid');
      const m = urlsearchparams.get('modeId');
      const f = urlsearchparams.get('formId');
      if(parseInt(m) == 1 && parseInt(f) == -4){
        return {
          com: NewRightMenu,
          props: {...newProps,billid:billid, query:"SELECT id FROM view_id_list"},
        }
      }
    }
  }
})

// 去除表单右上点击后弹出的菜单里的删除选项
ecodeSDK.overwriteClassFnQueueMapSet('WeaReqTop', {
  fn: (Com, newProps) => {
    if (newProps._noOverwrite) return;
    if (window.location.hash.indexOf('/main/cube/card') >= 0) {
      const urlsearchparams = new URLSearchParams(window.location.hash.slice(window.location.hash.indexOf('?')+1, -1))
      const billid = urlsearchparams.get('billid');
      const m = urlsearchparams.get('modeId');
      const f = urlsearchparams.get('formId');
      if(parseInt(m) == 1 && parseInt(f) == -4){
        return {
          com: NewReqTop,
          props: {...newProps,billid:billid,query:"SELECT id FROM view_id_list"},
        }
      }
    }
  }
})
// 禁用查询中的checkbox禁用
ecodeSDK.overwriteClassFnQueueMapSet('Table', {
  fn: (Com, newProps) => {
    if (newProps._noOverwrite) return;
    if (window.location.hash.indexOf('/main/cube/search') >= 0) {
      const urlsearchparams = new URLSearchParams(window.location.hash.slice(window.location.hash.indexOf('?')+1, -1))
      const c = urlsearchparams.get('customid');
      if(parseInt(c) == 1 ){
        return {
          com: NewTable,
          props: {...newProps, query:"SELECT id FROM view_id_list"},
        }
      }
      
    }
    if (window.location.hash.indexOf('/main/cube/viewCustomPage') >= 0) {
      const urlsearchparams = new URLSearchParams(window.location.hash.slice(window.location.hash.indexOf('?')+1, -1))
      const c = urlsearchparams.get('id');
      if(parseInt(c) == 1){
        return {
          com: NewTable,
          props: {...newProps, query:"SELECT id FROM view_id_list"}
        }
      }
    }
  }
})