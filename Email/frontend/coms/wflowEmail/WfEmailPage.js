const { WeaRichText, WeaSelect, WeaTools, WeaCheckbox} = ecCom
const {Button} = antd;
const { ls, ss } = WeaTools;
const API = ecodeSDK.imp(API);
const basicToolBar = {
  toolbar: [
    { name: "markdown", items: ["Markdown"] },
    {
      name: "document",
      items: [
        "Source",
        "Docprops",
        "-",
        "Save",
        "NewPage",
        "Preview",
        "Print",
        "-",
        "Templates"
      ]
    },
    {
      name: "clipboard",
      items: [
        "Cut",
        "Copy",
        "Paste",
        "PasteText",
        "PasteFromWord",
        "-",
        "Undo",
        "Redo"
      ]
    },
    {
      name: "editing",
      items: ["Find", "Replace", "-", "SelectAll", "-", "Scayt"]
    },
    {
      name: "forms",
      items: [
        "Form",
        "Checkbox",
        "Radio",
        "TextField",
        "Textarea",
        "Select",
        "Button",
        "ImageButton",
        "HiddenField"
      ]
    },
    "/",
    {
      name: "basicstyles",
      items: [
        "Bold",
        "Italic",
        "Underline",
        "AddBorder",
        "Strike",
        "Subscript",
        "Superscript",
        "-",
        "CopyFormatting",
        "RemoveFormat"
      ]
    },
    {
      name: "paragraph",
      items: [
        "NumberedList",
        "BulletedList",
        "-",
        "Outdent",
        "Indent",
        "textindent",
        "-",
        "Blockquote",
        "CreateDiv",
        "-",
        "JustifyLeft",
        "JustifyCenter",
        "JustifyRight",
        "JustifyBlock",
        "-",
        "BidiLtr",
        "BidiRtl",
        "Language"
      ]
    },
    { name: "links", items: ["Link", "Unlink", "Anchor"] },
    {
      name: "insert",
      items: [
        "Image",
        "Html5video",
        "Flash",
        "Table",
        "HorizontalRule",
        "Smiley",
        "SpecialChar",
        "PageBreak",
        "Iframe"
      ]
    },
    "/",
    {
      name: "styles",
      items: ["Styles", "Format", "Font", "FontSize", "lineheight"]
    },
    { name: "colors", items: ["TextColor", "BGColor"] },
    // { name: "borders", items: ["TextBorder"] },
    { name: "tools", items: ["Maximize", "ShowBlocks"] }
  ],
  uploadUrl: "/api/doc/upload/uploadFile", // 上传地址
  extraPlugins: "html5video", // 上传视频功能
  height: 200,

  // fontSize_defaultLabel: "24px", // 默认字体大小 -- ck默认属性
  // font_defaultLabel: "SimSun", // 默认字体(英文) -- ck默认属性
  placeholder: "请输入..." // placeholder 属性

  // fontSize_defaultSize: '24/24px', // 默认字体大小 -- 流程约定属性
  // font_defaultFamily: "微软雅黑/Microsoft YaHei", // 默认字体 -- 流程约定属性
};

class WfEmailPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      value:"", 
      options_field:[],
      recipientEmail:"",
      isAttachment:false
    }
  }

  getFieldOptions = (apidatas)=>{
    const fieldOptions = apidatas.fields.filter((field)=>{
      if(field.tabledesc != "主表")return false;
      return true;
    }).map(field=>{
      return {showname:field.label, key:field.id}
    })
    console.log("fieldOptions: ", fieldOptions)
    return fieldOptions;
  }

  async componentDidMount(){
    if(!WfForm)console.log("no wfform")
    const baseInfo = WfForm.getBaseInfo()
    console.log("baseInfo:",baseInfo)
    const res = await WeaTools.callApi("/api/workflow/newReport/getFormFields", 'GET', {formid:baseInfo.formid, isbill:"1"})
    console.log("res:",res)
    this.setState({options_field:this.getFieldOptions(res)})
    const res2 = await API.getConfigs()
    console.log("res2:",res2)
  

  }

  handleFieldChange = (v)=>{
    console.log("richTextRef: ",this.richtext)
    const fieldData = WfForm.getFieldValue("field" + v)
    let content = this.richtext.getData()
    content = content + `\n<p>${fieldData}<p>\n`
    console.log("content:",content)
    this.richtext.setData(content)
  }

  render(){
    const {options_field, isAttachment,recipientEmail} = this.state
    return(
      <div>
        <WeaFormItem
          label = "Recipient Email"
          labelCol = {{span:6}}
          wrapperCol={{span:18}}
        >
          <WeaInput viewAttr={1} value={recipientEmail}/>
        </WeaFormItem>
        <WeaFormItem
          label = "Include Attachment"
          labelCol = {{span:6}}
          wrapperCol={{span:18}}
        >
          <WeaCheckbox viewAttr={1} value={isAttachment} />
        </WeaFormItem>
        <WeaSelect options={options_field} onChange={this.handleFieldChange}></WeaSelect>
        <WeaRichText 
          placeholder="请输入内容"
          value={this.state.value}
          ckConfig={basicToolBar}
          ref={richtext => (this.richtext = richtext)}
        />
        <Button >Save Configuration</Button>
      </div>
    )
  }
}

ecodeSDK.exp(WfEmailPage)