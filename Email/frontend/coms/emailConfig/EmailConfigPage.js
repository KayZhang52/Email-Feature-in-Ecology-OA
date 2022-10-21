const { WeaTable, WeaDialog, WeaFormItem, WeaInput, WeaTools, WeaSelect, WeaBrowser, WeaTop } = ecCom;
const { Button } = antd;
const { WeaForm } = comsMobx
const { inject, observer } = mobxReact;
const { toJS } = mobx;
const API = ecodeSDK.imp(API)
const getTableData = ecodeSDK.imp(getTableData)
const TABLE_COLUMNS = ecodeSDK.imp(TABLE_COLUMNS)


@inject('optionsStore')
@observer
class EmailConfigPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: false, // for display of dialog

            form_formid: "",
            formNode: "",
            formEmailField: "",
            formAttachmentField: "",
            formContentFields: "",
            formIncludeAttachment: "",
            formEmailTitle: "",

            tableData: [], // for table
        }
    }

    // call api to render table data
    componentDidMount() {
        API.getConfigs().then(res => {
            this.setState({ tableData: getTableData(res.datas) })
        }).catch(err => { console.log("API error: ", err) })
    }

    onClick = () => {
        this.setState({ toggle: true })
    }

    onCancel = () => {
        const {optionsStore} = this.props
        this.setState({ toggle: false});
        optionsStore.clearStore();
    }

    onSubmit = () => {
        const { formNode, formEmailField, formAttachmentField, formIncludeAttachment, formEmailTitle, formContentFields } = this.state
        const {optionsStore} = this.props
        const params =
        {
            workflowid: optionsStore.workflowid, 
            nodeid: formNode, 
            emailField: formEmailField, 
            attachmentField: formAttachmentField, 
            contentFields: formContentFields,
            includeAttachment: formIncludeAttachment,
            emailTitle: formEmailTitle
        }
        console.log("submitted:", params)
        // API.addConfig(params).then(res => {
        //     console.log("res: ", res)
        //     this.setState({ toggle: false })
        // }).catch(err => console.log("err: ", err))
    }


    handleWfidChange = (workflowid, workflowname, datas) => {
        if (!workflowid) {
            this.resetForm()
            return;
        }
        const { optionsStore } = this.props
        optionsStore.callWfInfoAndUpdate(workflowid);
    }

    resetForm = () => {
        this.setState({  formNode: "", formEmailField: "", formAttachmentField: "", formContentFields: "", formIncludeAttachment: "", formEmailTitle:""});
    }

    render() {

        const { toggle, tableData} = this.state

        const { optionsStore } = this.props;
        const { formid, fields, nodes, test } = optionsStore

        const options_node = nodes.map((n, idx) => { return { showname: n.name, id: n.id, key: idx.toString() } })
        const options_field = fields.map((f, i) => { return { showname: f.label, key: i.toString(), name: f.name } })

        const actualForm = (
            <div className="wea-search-group">
                <WeaFormItem
                    label="workflow"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <WeaBrowser type={-99991} title="流程" viewAttr={3} onChange={this.handleWfidChange} icon="icon-toolbar-Organization-list" iconBgcolor="#b32e37" inputStyle={{ width: 200 }}></WeaBrowser>
                </WeaFormItem>
                <WeaFormItem
                    label="node"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <WeaSelect viewAttr={3} options={options_node} onChange={(v, showname) => { this.setState({ formNode: options_node[v].id }) }} />
                </WeaFormItem>
                <WeaFormItem
                    label="email field"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <WeaSelect viewAttr={3} options={options_field} onChange={(v, showname) => { this.setState({ formEmailField: options_field[v].name }) }} />
                </WeaFormItem>
                <WeaFormItem
                    label="attachment field"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <WeaSelect viewAttr={3} options={options_field} onChange={(v, showname) => { this.setState({ formAttachmentField: options_field[v].name }) }} />
                </WeaFormItem>

                {/**new items are below here-------------------------------------------------------------------------------------------------- */}

                <WeaFormItem
                    label="fields included in content"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <WeaSelect viewAttr={3} multiple options={options_field} onChange={(v, showname) => {
                        let tmp = ""
                        console.log("xxx", v, showname, typeof v, typeof showname);
                        v.split(",").forEach(function (num) {
                            tmp += ","
                            tmp += options_field[parseInt(num)].name
                        })
                        tmp = tmp.substring(1)
                        this.setState({ formContentFields: tmp })
                    }}
                    />
                </WeaFormItem>
                <WeaFormItem
                    label="include Attachment"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <WeaSelect supportCancel options={[
                        {
                            key: "1",
                            showname: "Yes"
                        },
                        {
                            key: "2",
                            showname: "No"
                        }
                    ]} detailtype={3} onChange={(v, showname) => { this.setState({ formIncludeAttachment: v }) }} />
                </WeaFormItem>
                <WeaFormItem
                    label="email title"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                >
                    <WeaInput onChange={(v, showname) => { this.setState({ formEmailTitle: v }) }} />
                </WeaFormItem>
            </div>
        )
        const footer = (
            <div>
                <Button onClick={this.onSubmit} type="primary">Submit</Button>
                <Button onClick={this.onCancel} >Cancel</Button>
            </div>
        )
        return (
            <div>
                <Button onClick={this.onClick}>新建</Button>
                <WeaTable dataSource={tableData} columns={TABLE_COLUMNS} scroll={{y:240}}/>
                <WeaDialog visible={toggle} onCancel={this.onCancel} title="New Configuration"
                    icon="icon-portal-workflow"
                    iconBgcolor="#55D2D4" style={{ width: 900, height: 500, borderRadiu: "6px" }} footer={footer} browserModalProps={{ footer: footer }}>
                    <div >
                        {actualForm}
                    </div>
                </WeaDialog>
            </div>
        )
    }
}

ecodeSDK.exp(EmailConfigPage)