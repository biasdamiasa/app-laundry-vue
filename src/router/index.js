import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index.js'

import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

//OUTLET
import IndexOutlet from '../components/Outlet/Index.vue'
import TambahOutlet from '../components/Outlet/Tambah.vue'
import EditOutlet from '../components/Outlet/Edit.vue'

//PAKET
import IndexPaket from '../components/Paket/Index.vue'
import EditPaket from '../components/Paket/Edit.vue'

//MEMBER
import IndexMember from '../components/Member/Index.vue'
import DetailMember from '../components/Member/Detail.vue'
import TambahMember from '../components/Member/Tambah.vue'
import EditMember from '../components/Member/Edit.vue'

//TRANSAKSI
import IndexTransaksi from '../components/Transaksi/Index.vue'
import TambahTransaksi from '../components/Transaksi/Tambah.vue'
import DetailTransaksi from '../components/Transaksi/Detail.vue'
import TambahDetailTransaksi from '../components/Transaksi/TambahDetail.vue'

//REPORT
import Report from '../components/Report/Index.vue'


Vue.use(VueRouter)

var user = JSON.parse(store.state.datauser)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta : {
      requiresAuth : true,
      hasAccess : true
    }
  },
  {
    path: '/outlet',
    name: 'indexoutlet',
    component: IndexOutlet,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin')
    }
  },
  {
    path: '/outlet/tambah',
    name: 'tambahoutlet',
    component: TambahOutlet,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin')
    }
  },
  {
    path: '/outlet/edit/:id',
    name: 'editoutlet',
    component: EditOutlet,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin')
    }
  },
  {
    path: '/paket',
    name: 'indexpaket',
    component: IndexPaket,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin')
    }
  },
  {
    path: '/paket/edit/:id',
    name: 'editpaket',
    component: EditPaket,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin')
    }
  },
  {
    path: '/member',
    name: 'indexmember',
    component: IndexMember,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin' || user.role == 'kasir')
    }
  },
  {
    path: '/member/detail/:id',
    name: 'detailmember',
    component: DetailMember,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin' || user.role == 'kasir')
    }
  },
  {
    path: '/member/tambah',
    name: 'tambahmember',
    component: TambahMember,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin' || user.role == 'kasir')
    }
  },
  {
    path: '/member/edit/:id',
    name: 'editmember',
    component: EditMember,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin' || user.role == 'kasir')
    }
  },
  {
    path: '/transaksi',
    name: 'indextransaksi',
    component: IndexTransaksi,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin' || user.role == 'kasir')
    }
  },
  {
    path: '/transaksi/tambah',
    name: 'tambahtransaksi',
    component: TambahTransaksi,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin' || user.role == 'kasir')
    }
  },
  {
    path: '/transaksi/detail/:id',
    name: 'detailtransaksi',
    component: DetailTransaksi,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin' || user.role == 'kasir')
    }
  },
  {
    path: '/transaksi/detail/tambah/:id',
    name: 'tambahdetail',
    component: TambahDetailTransaksi,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'admin' || user.role == 'kasir')
    }
  },
  {
    path: '/report',
    name: 'report',
    component: Report,
    meta : {
      requiresAuth: true,
      hasAccess : (user.role == 'owner')
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  
  if (to.meta.requiresAuth) {
      if(localStorage.getItem('auth')) {
        if(to.meta.hasAccess) {
          next()
        } else {
          next('/')
        }      
      } else {
        next('/login')
      }
  }
  next()
})

export default router
