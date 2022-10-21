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

var _ecCom = ecCom,
    WeaReqTop = _ecCom.WeaReqTop;
var WfEmailPage = ecodeSDK.imp(WfEmailPage);

var WfNewReqTop =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WfNewReqTop, _React$Component);

  function WfNewReqTop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WfNewReqTop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WfNewReqTop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.getTabDatas = function () {
      var tabDatas = _this.props.tabDatas;

      if (!tabDatas.find(function (data) {
        return data.key === 'email';
      })) {
        tabDatas.push({
          title: '邮件',
          key: 'email'
        });
      }

      return tabDatas;
    };

    return _this;
  }

  _createClass(WfNewReqTop, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tabDatas = _this$props.tabDatas,
          selectedKey = _this$props.selectedKey;

      if (selectedKey == 'email') {
        this.props.children.push(React.createElement(WfEmailPage, null));
      }

      if (tabDatas) {
        return React.createElement("div", null, React.createElement(WeaReqTop, _extends({
          _noOverwrite: true
        }, this.props, {
          tabDatas: this.getTabDatas()
        })));
      }
    }
  }]);

  return WfNewReqTop;
}(React.Component);

ecodeSDK.setCom("42549917d25e47a9a764894e018c1070", "WfNewReqTop", WfNewReqTop);