const {WeaReqTop} = ecCom;
const WfEmailPage = ecodeSDK.imp(WfEmailPage)

class WfNewReqTop extends React.Component{
  getTabDatas = () => {
    const { tabDatas } = this.props;
    if (!tabDatas.find((data) => data.key === 'email')) {
      tabDatas.push({
        title: '邮件',
        key: 'email',
      })
    }
    return tabDatas;
  }
  render(){
    const { tabDatas, selectedKey } = this.props;
    if(selectedKey == 'email'){
      this.props.children.push(<WfEmailPage/>)
    }
    if(tabDatas){
      return (
      <div>
        <WeaReqTop _noOverwrite {...this.props} tabDatas={this.getTabDatas()} />
      </div>
      )
    }
  }
}

ecodeSDK.setCom("42549917d25e47a9a764894e018c1070", "WfNewReqTop", WfNewReqTop)