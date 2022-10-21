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
    WeaRightMenu = _ecCom.WeaRightMenu;
var _React = React,
    componentDidMount = _React.componentDidMount;

var NewRightMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NewRightMenu, _React$Component);

  function NewRightMenu(props) {
    var _this;

    _classCallCheck(this, NewRightMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewRightMenu).call(this, props));
    _this.state = {
      blacklist: [],
      toggle: 0
    };
    return _this;
  }

  _createClass(NewRightMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var query = this.props.query;

      if (!query) {
        alert("no query passed");
        return;
      }

      API.getList(query).then(function (res) {
        var arr = res.split(',').map(function (item) {
          return parseInt(item, 10);
        });

        _this2.setState({
          blacklist: arr
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          datas = _this$props.datas,
          billid = _this$props.billid;
      var blacklist = this.state.blacklist;
      var newDatas = datas.slice();

      for (var i = 0; i < newDatas.length; i++) {
        if (blacklist.includes(parseInt(billid))) {
          if (newDatas[i].name == "删除" || newDatas[i].name == "delete") {
            newDatas.splice(i, 1);
          }
        }
      }

      this.props.datas = newDatas;
      return React.createElement("div", null, React.createElement(WeaRightMenu, _extends({
        _noOverwrite: true
      }, this.props)));
    }
  }]);

  return NewRightMenu;
}(React.Component);

ecodeSDK.exp(NewRightMenu);