import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/* 
  path: string, // 路径
  component?: Component,  // 组件
  name?: string, // 命名路由
  components?: { [name: string]: Component }, // 命名视图组件
  redirect?: string | Location | Function, // 重定向
  props?: boolean | Object | Function, // 
  alias?: string | Array<string>,// 别名
  children?: Array<RouteConfig>, // 嵌套路由
  beforeEnter?: (to: Route, from: Route, next: Function) => void,
  meta?: any,
  {
    title:string, // 页面标题
    keepAlive:boolean // 保留组件状态或避免重新渲染 true保存 false不保存 
  }

  // 2.6.0+
  caseSensitive?: boolean, // 匹配规则是否大小写敏感？(默认值：false)
  pathToRegexpOptions?: Object // 编译正则的选项
*/

const routes = [
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error/Error.vue"),
    meta: {
      title: "页面不存在",
      keepAlive: false
    }
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login/Login.vue"),
    meta: {
      title: "登录",
      keepAlive: false
    }
  },
  {
    path: "/admin",
    component: () => import("../views/Admin/Admin.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/Home/Home.vue"),
        meta: {
          title: "首页",
          keepAlive: false
        }
      }
    ]
  },
  {
    path: "/admin",
    component: () => import("../views/Admin/Admin.vue"),
    children: [
      {
        path: "/charts/index",
        name: "Charts",
        component: () => import("../views/Charts/Charts.vue"),
        meta: {
          title: "图表",
          keepAlive: false
        }
      }
    ]
  },
  {
    path: "/admin",
    component: () => import("../views/Admin/Admin.vue"),
    children: [
      {
        path: "/list/index",
        name: "List",
        component: () => import("../views/List/List.vue"),
        meta: {
          title: "列表",
          keepAlive: false
        }
      }
    ]
  },
  {
    path: "/admin",
    component: () => import("../views/Admin/Admin.vue"),
    children: [
      {
        path: "/excel/index",
        name: "Excel",
        component: () => import("../views/Excel/Excel.vue"),
        meta: {
          title: "Excel",
          keepAlive: false
        }
      }
    ]
  },
  {
    path: "/admin",
    component: () => import("../views/Admin/Admin.vue"),
    children: [
      {
        path: "/setting/index",
        name: "Setting",
        component: () => import("../views/Setting/Setting.vue"),
        meta: {
          title: "设置",
          keepAlive: false
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;