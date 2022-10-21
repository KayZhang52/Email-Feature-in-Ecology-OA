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

var _ecCom = ecCom,
    WeaRichText = _ecCom.WeaRichText,
    WeaSelect = _ecCom.WeaSelect,
    WeaTools = _ecCom.WeaTools,
    WeaCheckbox = _ecCom.WeaCheckbox;
var _antd = antd,
    Button = _antd.Button;
var ls = WeaTools.ls,
    ss = WeaTools.ss;
var API = ecodeSDK.imp(API);
var basicToolBar = {
  toolbar: [{
    name: "markdown",
    items: ["Markdown"]
  }, {
    name: "document",
    items: ["Source", "Docprops", "-", "Save", "NewPage", "Preview", "Print", "-", "Templates"]
  }, {
    name: "clipboard",
    items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"]
  }, {
    name: "editing",
    items: ["Find", "Replace", "-", "SelectAll", "-", "Scayt"]
  }, {
    name: "forms",
    items: ["Form", "Checkbox", "Radio", "TextField", "Textarea", "Select", "Button", "ImageButton", "HiddenField"]
  }, "/", {
    name: "basicstyles",
    items: ["Bold", "Italic", "Underline", "AddBorder", "Strike", "Subscript", "Superscript", "-", "CopyFormatting", "RemoveFormat"]
  }, {
    name: "paragraph",
    items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "textindent", "-", "Blockquote", "CreateDiv", "-", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock", "-", "BidiLtr", "BidiRtl", "Language"]
  }, {
    name: "links",
    items: ["Link", "Unlink", "Anchor"]
  }, {
    name: "insert",
    items: ["Image", "Html5video", "Flash", "Table", "HorizontalRule", "Smiley", "SpecialChar", "PageBreak", "Iframe"]
  }, "/", {
    name: "styles",
    items: ["Styles", "Format", "Font", "FontSize", "lineheight"]
  }, {
    name: "colors",
    items: ["TextColor", "BGColor"]
  }, // { name: "borders", items: ["TextBorder"] },
  {
    name: "tools",
    items: ["Maximize", "ShowBlocks"]
  }],
  uploadUrl: "/api/doc/upload/uploadFile",
  // 上传地址
  extraPlugins: "html5video",
  // 上传视频功能
  height: 200,
  // fontSize_defaultLabel: "24px", // 默认字体大小 -- ck默认属性
  // font_defaultLabel: "SimSun", // 默认字体(英文) -- ck默认属性
  placeholder: "请输入..." // placeholder 属性
  // fontSize_defaultSize: '24/24px', // 默认字体大小 -- 流程约定属性
  // font_defaultFamily: "微软雅黑/Microsoft YaHei", // 默认字体 -- 流程约定属性

};

var WfEmailPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WfEmailPage, _React$Component);

  function WfEmailPage(props) {
    var _this;

    _classCallCheck(this, WfEmailPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WfEmailPage).call(this, props));

    _this.getFieldOptions = function (apidatas) {
      var fieldOptions = apidatas.fields.filter(function (field) {
        if (field.tabledesc != "主表") return false;
        return true;
      }).map(function (field) {
        return {
          showname: field.label,
          key: field.id
        };
      });
      console.log("fieldOptions: ", fieldOptions);
      return fieldOptions;
    };

    _this.handleFieldChange = function (v) {
      console.log("richTextRef: ", _this.richtext);
      var fieldData = WfForm.getFieldValue("field" + v);

      var content = _this.richtext.getData();

      content = content + "\n<p>".concat(fieldData, "<p>\n");
      console.log("content:", content);

      _this.richtext.setData(content);
    };

    _this.state = {
      value: "",
      options_field: [],
      recipientEmail: "",
      isAttachment: false
    };
    return _this;
  }

  _createClass(WfEmailPage, [{
    key: "componentDidMount",
    value: async function componentDidMount() {
      if (!WfForm) console.log("no wfform");
      var baseInfo = WfForm.getBaseInfo();
      console.log("baseInfo:", baseInfo);
      var res = await WeaTools.callApi("/api/workflow/newReport/getFormFields", 'GET', {
        formid: baseInfo.formid,
        isbill: "1"
      });
      console.log("res:", res);
      this.setState({
        options_field: this.getFieldOptions(res)
      });
      var res2 = await API.getConfigs();
      console.log("res2:", res2);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          options_field = _this$state.options_field,
          isAttachment = _this$state.isAttachment,
          recipientEmail = _this$state.recipientEmail;
      return React.createElement("div", null, React.createElement(WeaFormItem, {
        label: "Recipient Email",
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      }, React.createElement(WeaInput, {
        viewAttr: 1,
        value: recipientEmail
      })), React.createElement(WeaFormItem, {
        label: "Include Attachment",
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      }, React.createElement(WeaCheckbox, {
        viewAttr: 1,
        value: isAttachment
      })), React.createElement(WeaSelect, {
        options: options_field,
        onChange: this.handleFieldChange
      }), React.createElement(WeaRichText, {
        placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
        value: this.state.value,
        ckConfig: basicToolBar,
        ref: function ref(richtext) {
          return _this2.richtext = richtext;
        }
      }), React.createElement(Button, null, "Save Configuration"));
    }
  }]);

  return WfEmailPage;
}(React.Component);

ecodeSDK.exp(WfEmailPage);