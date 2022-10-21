const { Table } = antd;
const API = ecodeSDK.imp(API);

class NewTable extends React.Component {
  constructor(props){
    super(props)
    this.state = {blacklist:[], toggle:0, count:0}
  }

  componentDidMount(){
    const {query} = this.props;
    if(!query){alert("no query passed"); return;}
    API.getList(query).then(res=>{
      const arr = res.split(',').map(function(item) {return parseInt(item,10);});
      this.setState({blacklist:arr})
    })
  }

  render() {
    const {blacklist} = this.state
    const {rowSelection} = this.props
    if(rowSelection){
      if('selectedRowKeys' in rowSelection){
        rowSelection.selectedRowKeys = rowSelection.selectedRowKeys.filter(x=>!blacklist.includes(parseInt(x)))
      }
      getCheckboxProps =  (record) => ({
          disabled: blacklist.includes(parseInt(record.id)),
          key: record.id,
          name:record.name
      })
      rowSelection.getCheckboxProps = getCheckboxProps
    }
    
    this.props.rowSelection = rowSelection
    // this.setState = {rowSelection:{...rowSelection, disabled:record=>(blacklist.includes(parseInt(record.id)))}}

    if(blacklist.length <= 0)return null;
    return (
      <div>
        <Table _noOverwrite {...this.props}/>
      </div>
    )
  }
}

ecodeSDK.exp(NewTable)
