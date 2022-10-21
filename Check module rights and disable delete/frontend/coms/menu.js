const { WeaRightMenu } = ecCom;
const { componentDidMount } = React;

class NewRightMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = {blacklist:[], toggle:0}
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
    const {datas, billid} = this.props
    const {blacklist} = this.state
    const newDatas = datas.slice()
    for (var i=0; i < newDatas.length; i++){
      if(blacklist.includes(parseInt(billid))){
        if(newDatas[i].name == "删除" || newDatas[i].name == "delete"){
          newDatas.splice(i,1);
        }
      }    
    }
    this.props.datas = newDatas
    
    return (
      <div>
        <WeaRightMenu _noOverwrite {...this.props}/>
      </div>
    )
  }
}

ecodeSDK.exp(NewRightMenu)







