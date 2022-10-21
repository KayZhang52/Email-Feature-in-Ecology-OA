const { Button } = antd;
const { WeaBrowser } = ecCom;

class TestBrowsers extends React.Component {
  render() {
    const items = [
      {
        title: "培训种类",
        type: 301
      },
      {
        title: "培训规划",
        type: 302
      },
      {
        title: "培训资源",
        type: 303
      },
      {
        title: "合同模板",
        type: 304
      },
      {
        title: "考核项目",
        type: 305
      },
      {
        title: "合同种类",
        type: 306
      },
      {
        title: "招聘信息",
        type: 307
      },
      {
        title: "招聘计划",
        type: 308
      },
      {
        title: "用工需求",
        type: 309
      },
      {
        title: "门户",
        type: "systempage",
        isSingle: false
      },
      {
        title: "浏览类型",
        type: "browserTypeList"
      },
      {
        title: "图标",
        type: "icons"
      },
      {
        title: "nodeTreeList",
        type: "nodeTreeList"
      },
      {
        title: "模块",
        type: "devmodules",
        isSingle: false
      }
    ];
    return (
      <div>
        <h3>产品类别</h3>
        <WeaBrowser
          type={13}
          title={"产品类别"}
          // isSingle={false}
          inputStyle={{ width: 200 }}
        />
        <br />
        <h3>多会议室</h3>
        <WeaBrowser
          title={"多会议室"}
          type={184}
          isSingle={false}
          inputStyle={{ width: 200 }}
        />
        <br />
        <h3>加班类型</h3>
        <WeaBrowser
          title={"加班类型"}
          type={33}
          inputStyle={{ width: 200 }}
          extraElement={<div>6666</div>}
        />
        <br />
        <h3>请假类型</h3>
        <WeaBrowser title={"请假类型"} type={34} inputStyle={{ width: 200 }} />
        <br />
        <h3>客户联系人</h3>
        <WeaBrowser
          title={"客户联系人"}
          type={67}
          inputStyle={{ width: 200 }}
        />
        <br />
        <h3>车辆</h3>
        <WeaBrowser title={"车辆"} type={137} inputStyle={{ width: 200 }} />
        <br />
        <h3>城市</h3>
        <WeaBrowser title={"城市"} type={58} inputStyle={{ width: 200 }} />
        <br />
        <h3>人力资源条件</h3>
        <WeaBrowser
          title={"人力资源条件"}
          isSingle={false}
          type={141}
          inputStyle={{ width: 200 }}
        />
        <br />
        <h3>单网上调查</h3>
        <WeaBrowser
          title={"单网上调查"}
          type={182}
          inputStyle={{ width: 200 }}
        />
        <br />
        <h3>多报销费用类型</h3>
        <WeaBrowser
          isSingle={false}
          title={"多报销费用类型"}
          type={222}
          inputStyle={{ width: 200 }}
        />
        <br />
        <h3>系统集成单选浏览按钮</h3>
        <WeaBrowser
          title={"系统集成单选浏览按钮"}
          type={226}
          inputStyle={{ width: 200 }}
        />
        <br />
        <h3>系统集成多选浏览按钮</h3>
        <WeaBrowser
          title={"系统集成多选浏览按钮"}
          isSingle={false}
          type={227}
          inputStyle={{ width: 200 }}
        />
        <br />
        <h3>资产类型</h3>
        <WeaBrowser title={"资产类型"} type={242} inputStyle={{ width: 200 }} />
        <br />
        <h3>资产状态</h3>
        <WeaBrowser title={"资产状态"} type={243} inputStyle={{ width: 200 }} />
        <br />
        <h3>项目状态</h3>
        <WeaBrowser title={"项目状态"} type={246} inputStyle={{ width: 200 }} />
        <br />
        <h3>所属类别</h3>
        <WeaBrowser title={"所属类别"} type={252} inputStyle={{ width: 200 }} />
        <br />
        <h3>客户状态</h3>
        <WeaBrowser title={"客户状态"} type={264} inputStyle={{ width: 200 }} />
        <br />
        <h3>获得途径</h3>
        <WeaBrowser title={"获得途径"} type={265} inputStyle={{ width: 200 }} />
        <br />
        <h3>角色</h3>
        <WeaBrowser title={"角色"} type={267} inputStyle={{ width: 200 }} />
        <br />
        <h3>服务项目</h3>
        <WeaBrowser title={"服务项目"} type={270} inputStyle={{ width: 200 }} />
        <br />
        <h3>班次</h3>
        <WeaBrowser title={"班次"} type={280} inputStyle={{ width: 200 }} />
        <br />
        <h3>发票</h3>
        <WeaBrowser title={"发票"} type={292} inputStyle={{ width: 200 }} />
        <br />
        {items.map(value => {
          return [
            <h3>{value.title}</h3>,
            <WeaBrowser {...value} inputStyle={{ width: 200 }} />,
            <br />
          ];
        })}
        <h3>导入云案例</h3>
        <WeaBrowser
          type="ecode"
          icon="icon-coms-workflow"
          customized={true}
          onChange={(ids, names, datas) => {
            console.log("云案例", ids, names, datas);
          }}
        >
          <Button>从云商店导入</Button>
        </WeaBrowser>
      </div>
    );
  }
}

ecodeSDK.exp(TestBrowsers)