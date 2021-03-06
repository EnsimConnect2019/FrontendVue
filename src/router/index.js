import Vue from 'vue'
import Router from 'vue-router'
import FrontendHome from '@/components/user/FrontendHome'
import UserLogin from '@/components/user/UserLogin'
import Dashboard from '@/components/user/Dashboard'
import ScheduleClass from '@/components/user/ScheduleClass'
import Childrenlist from '@/components/user/Childrenlist'
import EdituserDetails from '@/components/user/EdituserDetails'
import ChangeUserPassword from '@/components/user/ChangeUserPassword'
import adminLogin from '@/components/adminLogin'
import adminDashboard from '@/components/adminDashboard'
import addUser from '@/components/addUser'
import studentList from '@/components/studentList'
import parentList from '@/components/parentList'
import teacherList from '@/components/teacherList'
import classList from '@/components/classList'
import addSubject from '@/components/addSubject'
import subjectList from '@/components/subjectList'
import addSchedule from '@/components/addSchedule'
import scheduleList from '@/components/scheduleList'
import changePassword from '@/components/changePassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'FrontendHome',
      component: FrontendHome
    },
    {
      path: '/userlogin',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/schedule',
      name: 'ScheduleClass',
      component: ScheduleClass
    },
    {
      path: '/childrenlist',
      name: 'Childrenlist',
      component: Childrenlist
    },
    {
      path: '/edituser',
      name: 'EdituserDetails',
      component: EdituserDetails
    },
    {
      path: '/changeupassword',
      name: 'ChangeUserPassword',
      component: ChangeUserPassword
    },
    {
      path: '/admin',
      name: 'adminLogin',
      component: adminLogin
    },
    {
      path: '/adminDashboard',
      name: 'adminDashboard',
      component: adminDashboard
    },
    {
      path: '/addUser',
      name: 'addUser',
      component: addUser
    },
    {
      path: '/studentList',
      name: 'studentList',
      component: studentList
    },
    {
      path: '/teacherList',
      name: 'teacherList',
      component: teacherList
    },
    {
      path: '/parentList',
      name: 'parentList',
      component: parentList
    },
    {
      path: '/classList',
      name: 'classList',
      component: classList
    },
    {
      path: '/addSubject',
      name: 'addSubject',
      component: addSubject
    },
    {
      path: '/subjectList',
      name: 'subjectList',
      component: subjectList
    },
    {
      path: '/addSchedule',
      name: 'addSchedule',
      component: addSchedule
    },
    {
      path: '/scheduleList',
      name: 'scheduleList',
      component: scheduleList
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: changePassword
    }
  ]
})
