// 引入mockjs
import Mock from "mockjs";
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据

const chartsApi = () => {
  let data = [];

  for (let i = 0; i < 10; i++) {
    let obj = {
      date: Random.date(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
      accessuser: Random.natural(3000, 5000),
      dailyactiveuser: Random.natural(2000, 3000)
    };
    data.push(obj);
  }

  return {
    data: data
  };
};

const navListApi = () => {
  let data = [
    {
      path: "/admin",
      iconfontname: "home",
      name: "首页",
      child: []
    },
    {
      path: "/charts/index",
      iconfontname: "charts",
      name: "图表",
      child: []
    },
    {
      path: "/list/index",
      iconfontname: "list",
      name: "列表",
      child: []
    },
    {
      path: "/excel/index",
      iconfontname: "list",
      name: "Excel",
      child: []
    },
    {
      path: "/editor/index",
      iconfontname: "editor",
      name: "富文本",
      child: []
    },
    {
      path: "/steps/index",
      iconfontname: "steps",
      name: "步骤条",
      child: []
    },
    {
      path: "/setting",
      iconfontname: "setting",
      name: "设置",
      child: [
        {
          path: "/setting/index",
          iconfontname: "set",
          name: "设置1"
        },
        {
          path: "/setting/secondmenu",
          iconfontname: "set",
          name: "设置2"
        }
      ]
    }
  ];

  return {
    data: data
  };
};

export default {
  chartsApi,
  navListApi
};
