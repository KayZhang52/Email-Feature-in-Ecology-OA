"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NewRightMenu = ecodeSDK.imp(NewRightMenu);
var NewTable = ecodeSDK.imp(NewTable);
var NewReqTop = ecodeSDK.imp(NewReqTop);

var Root =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, _getPrototypeOf(Root).apply(this, arguments));
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(NewRightMenu, this.props));
    }
  }]);

  return Root;
}(React.Component);

var Root2 =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Root2, _React$Component2);

  function Root2() {
    _classCallCheck(this, Root2);

    return _possibleConstructorReturn(this, _getPrototypeOf(Root2).apply(this, arguments));
  }

  _createClass(Root2, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(NewTable, this.props));
    }
  }]);

  return Root2;
}(React.Component);

var Root3 =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Root3, _React$Component3);

  function Root3() {
    _classCallCheck(this, Root3);

    return _possibleConstructorReturn(this, _getPrototypeOf(Root3).apply(this, arguments));
  }

  _createClass(Root3, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(NewReqTop, this.props));
    }
  }]);

  return Root3;
}(React.Component);

ecodeSDK.setCom("58d1ad00629d4868b98364087816c370", 'NewRightMenu', Root);
ecodeSDK.setCom("58d1ad00629d4868b98364087816c370", 'NewTable', Root2);
ecodeSDK.setCom("58d1ad00629d4868b98364087816c370", 'NewReqTop', Root3);