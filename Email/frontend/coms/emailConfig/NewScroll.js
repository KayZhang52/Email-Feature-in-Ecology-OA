const {WeaNewScroll} = ecCom

class NewScroll extends React.Component{
  render(){
    let newChildren = this.props.children
    if(newChildren && newChildren.length == 4)
      newChildren.push(<h1>test email page</h1>)
    return(
      <WeaNewScroll _noOverwrite {...this.props} children={newChildren}/>
    )
  }
}

ecodeSDK.setCom("42549917d25e47a9a764894e018c1070", "NewScroll", NewScroll)