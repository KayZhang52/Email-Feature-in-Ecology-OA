const { observable, action, toJS } = mobx;
const { message } = antd;
const { WeaForm, WeaTableNew } = comsMobx;
const API = ecodeSDK.imp(API)

class OptionsStore {
  @observable workflowid = null;
  @observable formid = null;
  @observable fields = []
  @observable workflowInfo;
  @observable nodes = [];

  @action
  updateFields = async () => {
    console.log("in(updateFields): ", formid)
    const formid = this.formid;
    res = await API.getFormFields(formid)
    // 在store里作数据处理，我们只需要主表字段一些常用的东西，如字段名(database/系统)、id、数据类型
    const fields_ = res.fields.filter((field) => {
      if (field.tabledesc != "主表") return false;
      return true;
    }).map((field, index) => {
      return field;
    })
    
    this.fields = fields_
    console.log("out(updateFields): ", fields_)
  }

  @action
  callWfInfoAndUpdate = async (workflowid) => {
    // API返回的信息比较繁琐，我们只需要节点信息和流程+表单id
    const res = await WeaTools.callApi("/api/workflow/layout/getWfInfo", "POST", { workflowid: workflowid })
    console.log("getWfInfo res: ", res)
    let nodelist = Object.values(res.nodeDatas)
    const options = nodelist.map((node, index) => {
      let name = Base64.decode(node.name.slice(7))
      return { ...node, name:name }
    })
    this.workflowid = workflowid
    this.nodes = options;
    this.formid = res.workflowDatas.formId
    this.updateFields(); 
    console.log("out(callWfInfoAndUpdate): ", options)
  }

  @action
  clearStore = ()=>{
    this.workflowid = null;
    this.formid = null;
    this.fields = [];
    this.workflowInfo = {};
    this.nodes = [];
  }
  
}

const optionsStore = new OptionsStore()
ecodeSDK.exp(optionsStore)