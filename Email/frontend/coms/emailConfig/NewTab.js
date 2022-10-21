const {WeaTab} = ecCom

class NewTab extends React.Component{
  render(){
    const newDatas = this.props.datas
    let noEmail = true
    for(var i=0; i<newDatas.length; i++){
      if(newDatas[i].key == '10'){noEmail = false;break;}
    }
    if(noEmail){
      newDatas.push({
      title:"邮件配置",
      key:"10"
    })
    }
    
    return(
      <WeaTab _noOverwrite {...this.props} datas={newDatas}/>
    )
  }
}

ecodeSDK.setCom("42549917d25e47a9a764894e018c1070", "NewTab", NewTab)

