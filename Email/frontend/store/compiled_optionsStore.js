"use strict";

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

var _mobx = mobx,
    observable = _mobx.observable,
    action = _mobx.action,
    toJS = _mobx.toJS;
var _antd = antd,
    message = _antd.message;
var _comsMobx = comsMobx,
    WeaForm = _comsMobx.WeaForm,
    WeaTableNew = _comsMobx.WeaTableNew;
var API = ecodeSDK.imp(API);
var OptionsStore = (_class = (_temp = function OptionsStore() {
  _classCallCheck(this, OptionsStore);

  _initializerDefineProperty(this, "workflowid", _descriptor, this);

  _initializerDefineProperty(this, "formid", _descriptor2, this);

  _initializerDefineProperty(this, "fields", _descriptor3, this);

  _initializerDefineProperty(this, "workflowInfo", _descriptor4, this);

  _initializerDefineProperty(this, "nodes", _descriptor5, this);

  _initializerDefineProperty(this, "updateFields", _descriptor6, this);

  _initializerDefineProperty(this, "callWfInfoAndUpdate", _descriptor7, this);

  _initializerDefineProperty(this, "clearStore", _descriptor8, this);
}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "workflowid", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "formid", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "fields", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "workflowInfo", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "nodes", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "updateFields", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this = this;

    return async function () {
      console.log("in(updateFields): ", formid);
      var formid = _this.formid;
      res = await API.getFormFields(formid); // 在store里作数据处理，我们只需要主表字段一些常用的东西，如字段名(database/系统)、id、数据类型

      var fields_ = res.fields.filter(function (field) {
        if (field.tabledesc != "主表") return false;
        return true;
      }).map(function (field, index) {
        return field;
      });
      _this.fields = fields_;
      console.log("out(updateFields): ", fields_);
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "callWfInfoAndUpdate", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this2 = this;

    return async function (workflowid) {
      // API返回的信息比较繁琐，我们只需要节点信息和流程+表单id
      var res = await WeaTools.callApi("/api/workflow/layout/getWfInfo", "POST", {
        workflowid: workflowid
      });
      console.log("getWfInfo res: ", res);
      var nodelist = Object.values(res.nodeDatas);
      var options = nodelist.map(function (node, index) {
        var name = Base64.decode(node.name.slice(7));
        return _objectSpread({}, node, {
          name: name
        });
      });
      _this2.workflowid = workflowid;
      _this2.nodes = options;
      _this2.formid = res.workflowDatas.formId;

      _this2.updateFields();

      console.log("out(callWfInfoAndUpdate): ", options);
    };
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "clearStore", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function () {
      _this3.workflowid = null;
      _this3.formid = null;
      _this3.fields = [];
      _this3.workflowInfo = {};
      _this3.nodes = [];
    };
  }
})), _class);
var optionsStore = new OptionsStore();
ecodeSDK.exp(optionsStore);