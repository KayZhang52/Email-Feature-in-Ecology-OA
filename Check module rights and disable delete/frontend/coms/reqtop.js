const { WeaReqTop } = ecCom;

class NewReqTop extends React.Component {
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
    const {dropMenuDatas, billid} = this.props
    const {blacklist} = this.state
    if(dropMenuDatas){
      const newDatas = dropMenuDatas.slice()
      for (var i=0; i < newDatas.length; i++){
        if(blacklist.includes(parseInt(billid))){
          if(newDatas[i].content == "删除" || newDatas[i].content == "delete"){
            newDatas.splice(i,1);
          }
        }    
      }
      this.props.dropMenuDatas = newDatas
    }
    
    return (
      <div>
        <WeaReqTop _noOverwrite {...this.props}/>
      </div>
    )
  }
}


ecodeSDK.exp(NewReqTop)







