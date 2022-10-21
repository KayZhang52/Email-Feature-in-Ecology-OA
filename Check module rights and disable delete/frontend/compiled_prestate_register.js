"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var APPID = "58d1ad00629d4868b98364087816c370";

var NewRightMenu = function NewRightMenu(props) {
  var acParams = {
    appId: APPID,
    name: 'NewRightMenu',
    isPage: false,
    noCss: true,
    props: props
  };
  return ecodeSDK.getAsyncCom(acParams);
};

var NewTable = function NewTable(props) {
  var acParams = {
    appId: APPID,
    name: 'NewTable',
    isPage: false,
    noCss: true,
    props: props
  };
  return ecodeSDK.getAsyncCom(acParams);
};

var NewReqTop = function NewReqTop(props) {
  var acParams = {
    appId: APPID,
    name: 'NewReqTop',
    isPage: false,
    noCss: true,
    props: props
  };
  return ecodeSDK.getAsyncCom(acParams);
}; //去除表单右键菜单的删除选项


ecodeSDK.overwriteClassFnQueueMapSet('WeaRightMenu', {
  fn: function fn(Com, newProps) {
    if (newProps._noOverwrite) return;

    if (window.location.hash.indexOf('/main/cube/card') >= 0) {
      var hash = window.location.hash;
      var urlsearchparams = new URLSearchParams(hash.slice(hash.indexOf('?') + 1, -1));
      var billid = urlsearchparams.get('billid');
      var m = urlsearchparams.get('modeId');
      var f = urlsearchparams.get('formId');

      if (parseInt(m) == 1 && parseInt(f) == -4) {
        return {
          com: NewRightMenu,
          props: _objectSpread({}, newProps, {
            billid: billid,
            query: "SELECT id FROM view_id_list"
          })
        };
      }
    }
  }
}); // 去除表单右上点击后弹出的菜单里的删除选项

ecodeSDK.overwriteClassFnQueueMapSet('WeaReqTop', {
  fn: function fn(Com, newProps) {
    if (newProps._noOverwrite) return;

    if (window.location.hash.indexOf('/main/cube/card') >= 0) {
      var urlsearchparams = new URLSearchParams(window.location.hash.slice(window.location.hash.indexOf('?') + 1, -1));
      var billid = urlsearchparams.get('billid');
      var m = urlsearchparams.get('modeId');
      var f = urlsearchparams.get('formId');

      if (parseInt(m) == 1 && parseInt(f) == -4) {
        return {
          com: NewReqTop,
          props: _objectSpread({}, newProps, {
            billid: billid,
            query: "SELECT id FROM view_id_list"
          })
        };
      }
    }
  }
}); // 禁用查询中的checkbox禁用

ecodeSDK.overwriteClassFnQueueMapSet('Table', {
  fn: function fn(Com, newProps) {
    if (newProps._noOverwrite) return;

    if (window.location.hash.indexOf('/main/cube/search') >= 0) {
      var urlsearchparams = new URLSearchParams(window.location.hash.slice(window.location.hash.indexOf('?') + 1, -1));
      var c = urlsearchparams.get('customid');

      if (parseInt(c) == 1) {
        return {
          com: NewTable,
          props: _objectSpread({}, newProps, {
            query: "SELECT id FROM view_id_list"
          })
        };
      }
    }

    if (window.location.hash.indexOf('/main/cube/viewCustomPage') >= 0) {
      var _urlsearchparams = new URLSearchParams(window.location.hash.slice(window.location.hash.indexOf('?') + 1, -1));

      var _c = _urlsearchparams.get('id');

      if (parseInt(_c) == 1) {
        return {
          com: NewTable,
          props: _objectSpread({}, newProps, {
            query: "SELECT id FROM view_id_list"
          })
        };
      }
    }
  }
});