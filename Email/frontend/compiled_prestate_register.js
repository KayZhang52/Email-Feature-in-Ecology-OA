"use strict";

var enableScroll = false;
var enableTop = true;
var enableTab = true;
var enablewf = false; ////////////////////////////////////////PARAMS//////////////////////////////

var NewTop = function NewTop(props) {
  var acParams = {
    appId: '42549917d25e47a9a764894e018c1070',
    name: 'NewTop',
    isPage: false,
    noCss: true,
    props: props
  };
  return ecodeSDK.getAsyncCom(acParams);
};

var NewTab = function NewTab(props) {
  var acParams = {
    appId: '42549917d25e47a9a764894e018c1070',
    name: 'NewTab',
    isPage: false,
    noCss: true,
    props: props
  };
  return ecodeSDK.getAsyncCom(acParams);
};

var NewScroll = function NewScroll(props) {
  var acParams = {
    appId: '42549917d25e47a9a764894e018c1070',
    name: 'NewScroll',
    isPage: false,
    noCss: true,
    props: props
  };
  return ecodeSDK.getAsyncCom(acParams);
};

var WfNewReqTop = function WfNewReqTop(props) {
  var acParams = {
    appId: '42549917d25e47a9a764894e018c1070',
    name: 'WfNewReqTop',
    isPage: false,
    noCss: true,
    props: props
  };
  return window.comsMobx ? ecodeSDK.getAsyncCom(acParams) : null;
}; ///////////////////////////////////////// ECODESDK //////////////////////////////////////////


ecodeSDK.overwriteClassFnQueueMapSet('WeaTop', {
  fn: function fn(Com, newProps) {
    if (!enableTop) return;
    if (newProps._noOverwrite) return;
    if (!comsMobx) return;
    var ecId = newProps.ecId;
    if (!ecId || !ecId.includes("WeaTop@il0rbp")) return;

    if (window.location.hash.indexOf('/workflowengine/path/wfSetting') >= 0) {
      // console.log("top overwrite: ", newProps)
      return {
        com: NewTop,
        props: newProps
      };
    }
  }
});
ecodeSDK.overwriteClassFnQueueMapSet('WeaTab', {
  fn: function fn(Com, newProps) {
    if (!enableTab) return;
    if (newProps._noOverwrite) return;
    if (!comsMobx) return;
    var ecId = newProps.ecId;
    if (ecId && !ecId.includes("_WeaTab@pecz1k")) return;

    if (window.location.hash.indexOf('/workflowengine/path/wfSetting') >= 0) {
      // console.log("WeaTab Overwrite")
      return {
        com: NewTab,
        props: newProps
      };
    }
  }
});
ecodeSDK.overwriteClassFnQueueMapSet('WeaNewScroll', {
  fn: function fn(Com, newProps) {
    if (!enableScroll) return;
    if (newProps._noOverwrite) return;
    if (!comsMobx) return;
    var ecId = newProps.ecId;
    if (ecId && !ecId.includes("_WeaNewScroll@qlo8z3")) return;

    if (window.location.hash.indexOf('/workflowengine/path/wfSetting') >= 0) {
      // console.log("WeaScroll Overwrite", newProps)
      return {
        com: NewScroll,
        props: newProps
      };
    }
  }
}); ///////////////////////////////////////// ECODESDK(wf)//////////////////////////////////////////

ecodeSDK.overwriteClassFnQueueMapSet('WeaReqTop', {
  fn: function fn(Com, newProps) {
    if (!enablewf) return;
    if (newProps._noOverwrite) return;
    var _window = window,
        comsMobx = _window.comsMobx,
        WfForm = _window.WfForm;
    if (!comsMobx) return;
    if (!WfForm) return;

    if (window.location.href.indexOf('/spa/workflow/static4form') >= 0) {
      console.log;
      return {
        com: WfNewReqTop,
        props: newProps
      };
    }
  }
}); // register钩子函数中调用'/checkNeedSend'接口判断是否有邮件配置，有的话调用'/send'接口

window.addEventListener('load', function () {
  if (!(window.location.href.indexOf('/spa/workflow/static4form') >= 0)) return;
  var _window2 = window,
      ecCom = _window2.ecCom,
      WfForm = _window2.WfForm;

  if (!ecCom || !WfForm) {
    return;
  }

  var urlsearchparams = new URLSearchParams(window.location.hash.slice(window.location.hash.indexOf('?') + 1, -1));
  var wfid = urlsearchparams.get('workflowid');
  WfForm.registerCheckEvent(WfForm.OPER_SUBMIT, async function (callback) {
    var wfInfo = WfForm.getBaseInfo();
    console.log(wfInfo);
    var res1 = await ecCom.WeaTools.callApi('/api/workflow/externalEmail/checkNeedSend', 'GET', wfInfo);
    console.log("response0: ", res1);

    if (res1.ifSend == "true") {
      res2 = await ecCom.WeaTools.callApi('/api/workflow/externalEmail/send', 'POST', wfInfo);
      console.log("response: ", res2);
    }

    alert("Email Sent");
    callback();
  });
});