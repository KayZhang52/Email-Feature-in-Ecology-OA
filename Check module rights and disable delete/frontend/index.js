const NewRightMenu = ecodeSDK.imp(NewRightMenu);
const NewTable = ecodeSDK.imp(NewTable);
const NewReqTop = ecodeSDK.imp(NewReqTop);

class Root extends React.Component {
  render() {
    return (
      <div>
          <NewRightMenu {...this.props} />
      </div>
    )
  }
}

class Root2 extends React.Component{
  render() {
    return (
      <div>
          <NewTable {...this.props} />
      </div>
    )
  }
}

class Root3 extends React.Component{
  render() {
    return (
      <div>
          <NewReqTop {...this.props} />
      </div>
    )
  }
}

ecodeSDK.setCom("58d1ad00629d4868b98364087816c370",'NewRightMenu',Root);
ecodeSDK.setCom("58d1ad00629d4868b98364087816c370",'NewTable',Root2);
ecodeSDK.setCom("58d1ad00629d4868b98364087816c370",'NewReqTop',Root3);