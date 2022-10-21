"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _antd = antd,
    Button = _antd.Button;
var _ecCom = ecCom,
    WeaBrowser = _ecCom.WeaBrowser;

var TestBrowsers =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TestBrowsers, _React$Component);

  function TestBrowsers() {
    _classCallCheck(this, TestBrowsers);

    return _possibleConstructorReturn(this, _getPrototypeOf(TestBrowsers).apply(this, arguments));
  }

  _createClass(TestBrowsers, [{
    key: "render",
    value: function render() {
      var items = [{
        title: "培训种类",
        type: 301
      }, {
        title: "培训规划",
        type: 302
      }, {
        title: "培训资源",
        type: 303
      }, {
        title: "合同模板",
        type: 304
      }, {
        title: "考核项目",
        type: 305
      }, {
        title: "合同种类",
        type: 306
      }, {
        title: "招聘信息",
        type: 307
      }, {
        title: "招聘计划",
        type: 308
      }, {
        title: "用工需求",
        type: 309
      }, {
        title: "门户",
        type: "systempage",
        isSingle: false
      }, {
        title: "浏览类型",
        type: "browserTypeList"
      }, {
        title: "图标",
        type: "icons"
      }, {
        title: "nodeTreeList",
        type: "nodeTreeList"
      }, {
        title: "模块",
        type: "devmodules",
        isSingle: false
      }];
      return React.createElement("div", null, React.createElement("h3", null, "\u4EA7\u54C1\u7C7B\u522B"), React.createElement(WeaBrowser, {
        type: 13,
        title: "产品类别" // isSingle={false}
        ,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u591A\u4F1A\u8BAE\u5BA4"), React.createElement(WeaBrowser, {
        title: "多会议室",
        type: 184,
        isSingle: false,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u52A0\u73ED\u7C7B\u578B"), React.createElement(WeaBrowser, {
        title: "加班类型",
        type: 33,
        inputStyle: {
          width: 200
        },
        extraElement: React.createElement("div", null, "6666")
      }), React.createElement("br", null), React.createElement("h3", null, "\u8BF7\u5047\u7C7B\u578B"), React.createElement(WeaBrowser, {
        title: "请假类型",
        type: 34,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u5BA2\u6237\u8054\u7CFB\u4EBA"), React.createElement(WeaBrowser, {
        title: "客户联系人",
        type: 67,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u8F66\u8F86"), React.createElement(WeaBrowser, {
        title: "车辆",
        type: 137,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u57CE\u5E02"), React.createElement(WeaBrowser, {
        title: "城市",
        type: 58,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u4EBA\u529B\u8D44\u6E90\u6761\u4EF6"), React.createElement(WeaBrowser, {
        title: "人力资源条件",
        isSingle: false,
        type: 141,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u5355\u7F51\u4E0A\u8C03\u67E5"), React.createElement(WeaBrowser, {
        title: "单网上调查",
        type: 182,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u591A\u62A5\u9500\u8D39\u7528\u7C7B\u578B"), React.createElement(WeaBrowser, {
        isSingle: false,
        title: "多报销费用类型",
        type: 222,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u7CFB\u7EDF\u96C6\u6210\u5355\u9009\u6D4F\u89C8\u6309\u94AE"), React.createElement(WeaBrowser, {
        title: "系统集成单选浏览按钮",
        type: 226,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u7CFB\u7EDF\u96C6\u6210\u591A\u9009\u6D4F\u89C8\u6309\u94AE"), React.createElement(WeaBrowser, {
        title: "系统集成多选浏览按钮",
        isSingle: false,
        type: 227,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u8D44\u4EA7\u7C7B\u578B"), React.createElement(WeaBrowser, {
        title: "资产类型",
        type: 242,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u8D44\u4EA7\u72B6\u6001"), React.createElement(WeaBrowser, {
        title: "资产状态",
        type: 243,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u9879\u76EE\u72B6\u6001"), React.createElement(WeaBrowser, {
        title: "项目状态",
        type: 246,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u6240\u5C5E\u7C7B\u522B"), React.createElement(WeaBrowser, {
        title: "所属类别",
        type: 252,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u5BA2\u6237\u72B6\u6001"), React.createElement(WeaBrowser, {
        title: "客户状态",
        type: 264,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u83B7\u5F97\u9014\u5F84"), React.createElement(WeaBrowser, {
        title: "获得途径",
        type: 265,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u89D2\u8272"), React.createElement(WeaBrowser, {
        title: "角色",
        type: 267,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u670D\u52A1\u9879\u76EE"), React.createElement(WeaBrowser, {
        title: "服务项目",
        type: 270,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u73ED\u6B21"), React.createElement(WeaBrowser, {
        title: "班次",
        type: 280,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), React.createElement("h3", null, "\u53D1\u7968"), React.createElement(WeaBrowser, {
        title: "发票",
        type: 292,
        inputStyle: {
          width: 200
        }
      }), React.createElement("br", null), items.map(function (value) {
        return [React.createElement("h3", null, value.title), React.createElement(WeaBrowser, _extends({}, value, {
          inputStyle: {
            width: 200
          }
        })), React.createElement("br", null)];
      }), React.createElement("h3", null, "\u5BFC\u5165\u4E91\u6848\u4F8B"), React.createElement(WeaBrowser, {
        type: "ecode",
        icon: "icon-coms-workflow",
        customized: true,
        onChange: function onChange(ids, names, datas) {
          console.log("云案例", ids, names, datas);
        }
      }, React.createElement(Button, null, "\u4ECE\u4E91\u5546\u5E97\u5BFC\u5165")));
    }
  }]);

  return TestBrowsers;
}(React.Component);

ecodeSDK.exp(TestBrowsers);