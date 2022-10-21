const {WeaTop} = ecCom;
const { Provider } = mobxReact;
const EmailConfigPage = ecodeSDK.imp(EmailConfigPage)
const optionsStore = ecodeSDK.imp(optionsStore)

class NewTop extends React.Component{
  render(){
    let children = this.props.children // weatab, and weanewscroll
    const selectedKey = children[0].props.selectedKey
    if(selectedKey == "10"){
      // change the content of WeaNewScroll
      children[1].props.children = [false,false,false,false,<Provider optionsStore={optionsStore}><EmailConfigPage/></Provider>]

    }
    // console.log("newtopprop", this.props)

    return(
      <WeaTop _noOverwrite {...this.props} children={children} />
    )
  }
}

ecodeSDK.setCom("42549917d25e47a9a764894e018c1070", "NewTop", NewTop)