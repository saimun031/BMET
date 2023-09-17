import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '../views/dashboard.vue';
import login from '../views/login.vue';
import verification from '../views/verification.vue';

// import applications  from "../views/dashboard/applications.vue";

const applications = () => import("../views/dashboard/applications.vue");
const applicationsGroup = () => import("../views/dashboard/applicationsGroup.vue");
const pendingapproval = () => import("../views/dashboard/pendingapproval.vue");
const pendinglist = () => import("../views/dashboard/pendinglist.vue");
const approvedlist = () => import("../views/dashboard/approvedlist.vue");
const rejectedlist = () => import("../views/dashboard/rejectedlist.vue");
const employees = () => import("../views/dashboard/employees.vue");
const agencies = () => import("../views/dashboard/agencies.vue");
const settings = () => import("../views/dashboard/settings.vue");
const nothiform = () => import("../views/dashboard/pendinglists/nothiform.vue");
const notice = () => import("../views/dashboard/pendinglists/notice.vue");
const ongikarnama = () => import("../views/dashboard/pendinglists/ongikarnama.vue");
const putupshit = () => import("../views/dashboard/pendinglists/putupshit.vue");
const registration = () => import("../views/dashboard/pendinglists/registration.vue");
const employelist = () => import("../views/dashboard/employelist.vue");

// putupshit

const routes = [
  {
    path: "/",
    component: login,
  },
  {
    path: "/verification",
    component: verification,
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
    redirect: "/dashboard/applications",
    children: [
      { path: "applications", component: applications },
      { path: "applicationsGroup", component: applicationsGroup },
      { path: "pendingapproval", component: pendingapproval },
      { path: "pendinglist", component: pendinglist },
      { path: "approvedlist", component: approvedlist },
      { path: "rejectedlist", component: rejectedlist },
      { path: "employees", component: employees },
      { path: "agencies", component: agencies },
      { path: "settings", component: settings },
      { path: "nothiform", component: nothiform },
      { path: "notice", component: notice },
      { path: "ongikarnama", component: ongikarnama },
      { path: "putupshit", component: putupshit },
      { path: "registration", component: registration },
      { path: "employelist", component: employelist },
    ],
  },

  // {
  //   path: "/pendinglist",
  //   component: pendinglist,
  //   redirect: "/dashboard/pendinglist",
  //   children: [
  //     { path: "nothiform", component: nothiform },
  //     { path: "ongikarnama", component: ongikarnama },

  //   ],
  // },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
});

export default router;
