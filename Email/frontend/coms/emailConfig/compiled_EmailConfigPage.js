"use strict";

var _dec, _class, _temp;

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

var _ecCom = ecCom,
    WeaTable = _ecCom.WeaTable,
    WeaDialog = _ecCom.WeaDialog,
    WeaFormItem = _ecCom.WeaFormItem,
    WeaInput = _ecCom.WeaInput,
    WeaTools = _ecCom.WeaTools,
    WeaSelect = _ecCom.WeaSelect,
    WeaBrowser = _ecCom.WeaBrowser,
    WeaTop = _ecCom.WeaTop;
var _antd = antd,
    Button = _antd.Button;
var _comsMobx = comsMobx,
    WeaForm = _comsMobx.WeaForm;
var _mobxReact = mobxReact,
    inject = _mobxReact.inject,
    observer = _mobxReact.observer;
var _mobx = mobx,
    toJS = _mobx.toJS;
var API = ecodeSDK.imp(API);
var getTableData = ecodeSDK.imp(getTableData);
var TABLE_COLUMNS = ecodeSDK.imp(TABLE_COLUMNS);
var EmailConfigPage = (_dec = inject('optionsStore'), _dec(_class = observer(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmailConfigPage, _React$Component);

  function EmailConfigPage(props) {
    var _this;

    _classCallCheck(this, EmailConfigPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmailConfigPage).call(this, props));

    _this.onClick = function () {
      _this.setState({
        toggle: true
      });
    };

    _this.onCancel = function () {
      var optionsStore = _this.props.optionsStore;

      _this.setState({
        toggle: false
      });

      optionsStore.clearStore();
    };

    _this.onSubmit = function () {
      var _this$state = _this.state,
          formNode = _this$state.formNode,
          formEmailField = _this$state.formEmailField,
          formAttachmentField = _this$state.formAttachmentField,
          formIncludeAttachment = _this$state.formIncludeAttachment,
          formEmailTitle = _this$state.formEmailTitle,
          formContentFields = _this$state.formContentFields;
      var optionsStore = _this.props.optionsStore;
      var params = {
        workflowid: optionsStore.workflowid,
        nodeid: formNode,
        emailField: formEmailField,
        attachmentField: formAttachmentField,
        contentFields: formContentFields,
        includeAttachment: formIncludeAttachment,
        emailTitle: formEmailTitle
      };
      console.log("submitted:", params); // API.addConfig(params).then(res => {
      //     console.log("res: ", res)
      //     this.setState({ toggle: false })
      // }).catch(err => console.log("err: ", err))
    };

    _this.handleWfidChange = function (workflowid, workflowname, datas) {
      if (!workflowid) {
        _this.resetForm();

        return;
      }

      var optionsStore = _this.props.optionsStore;
      optionsStore.callWfInfoAndUpdate(workflowid);
    };

    _this.resetForm = function () {
      _this.setState({
        formNode: "",
        formEmailField: "",
        formAttachmentField: "",
        formContentFields: "",
        formIncludeAttachment: "",
        formEmailTitle: ""
      });
    };

    _this.state = {
      toggle: false,
      // for display of dialog
      form_formid: "",
      formNode: "",
      formEmailField: "",
      formAttachmentField: "",
      formContentFields: "",
      formIncludeAttachment: "",
      formEmailTitle: "",
      tableData: [] // for table

    };
    return _this;
  } // call api to render table data


  _createClass(EmailConfigPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      API.getConfigs().then(function (res) {
        _this2.setState({
          tableData: getTableData(res.datas)
        });
      }).catch(function (err) {
        console.log("API error: ", err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          toggle = _this$state2.toggle,
          tableData = _this$state2.tableData;
      var optionsStore = this.props.optionsStore;
      var formid = optionsStore.formid,
          fields = optionsStore.fields,
          nodes = optionsStore.nodes,
          test = optionsStore.test;
      var options_node = nodes.map(function (n, idx) {
        return {
          showname: n.name,
          id: n.id,
          key: idx.toString()
        };
      });
      var options_field = fields.map(function (f, i) {
        return {
          showname: f.label,
          key: i.toString(),
          name: f.name
        };
      });
      var actualForm = React.createElement("div", {
        className: "wea-search-group"
      }, React.createElement(WeaFormItem, {
        label: "workflow",
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      }, React.createElement(WeaBrowser, {
        type: -99991,
        title: "\u6D41\u7A0B",
        viewAttr: 3,
        onChange: this.handleWfidChange,
        icon: "icon-toolbar-Organization-list",
        iconBgcolor: "#b32e37",
        inputStyle: {
          width: 200
        }
      })), React.createElement(WeaFormItem, {
        label: "node",
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      }, React.createElement(WeaSelect, {
        viewAttr: 3,
        options: options_node,
        onChange: function onChange(v, showname) {
          _this3.setState({
            formNode: options_node[v].id
          });
        }
      })), React.createElement(WeaFormItem, {
        label: "email field",
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      }, React.createElement(WeaSelect, {
        viewAttr: 3,
        options: options_field,
        onChange: function onChange(v, showname) {
          _this3.setState({
            formEmailField: options_field[v].name
          });
        }
      })), React.createElement(WeaFormItem, {
        label: "attachment field",
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      }, React.createElement(WeaSelect, {
        viewAttr: 3,
        options: options_field,
        onChange: function onChange(v, showname) {
          _this3.setState({
            formAttachmentField: options_field[v].name
          });
        }
      })), React.createElement(WeaFormItem, {
        label: "fields included in content",
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      }, React.createElement(WeaSelect, {
        viewAttr: 3,
        multiple: true,
        options: options_field,
        onChange: function onChange(v, showname) {
          var tmp = "";
          console.log("xxx", v, showname, _typeof(v), _typeof(showname));
          v.split(",").forEach(function (num) {
            tmp += ",";
            tmp += options_field[parseInt(num)].name;
          });
          tmp = tmp.substring(1);

          _this3.setState({
            formContentFields: tmp
          });
        }
      })), React.createElement(WeaFormItem, {
        label: "include Attachment",
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      }, React.createElement(WeaSelect, {
        supportCancel: true,
        options: [{
          key: "1",
          showname: "Yes"
        }, {
          key: "2",
          showname: "No"
        }],
        detailtype: 3,
        onChange: function onChange(v, showname) {
          _this3.setState({
            formIncludeAttachment: v
          });
        }
      })), React.createElement(WeaFormItem, {
        label: "email title",
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      }, React.createElement(WeaInput, {
        onChange: function onChange(v, showname) {
          _this3.setState({
            formEmailTitle: v
          });
        }
      })));
      var footer = React.createElement("div", null, React.createElement(Button, {
        onClick: this.onSubmit,
        type: "primary"
      }, "Submit"), React.createElement(Button, {
        onClick: this.onCancel
      }, "Cancel"));
      return React.createElement("div", null, React.createElement(Button, {
        onClick: this.onClick
      }, "\u65B0\u5EFA"), React.createElement(WeaTable, {
        dataSource: tableData,
        columns: TABLE_COLUMNS,
        scroll: {
          y: 240
        }
      }), React.createElement(WeaDialog, {
        visible: toggle,
        onCancel: this.onCancel,
        title: "New Configuration",
        icon: "icon-portal-workflow",
        iconBgcolor: "#55D2D4",
        style: {
          width: 900,
          height: 500,
          borderRadiu: "6px"
        },
        footer: footer,
        browserModalProps: {
          footer: footer
        }
      }, React.createElement("div", null, actualForm)));
    }
  }]);

  return EmailConfigPage;
}(React.Component), _temp)) || _class) || _class);
ecodeSDK.exp(EmailConfigPage);