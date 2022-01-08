import Vue from 'vue'
import VueRouter from 'vue-router'

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
      requiresAuth : true
    }
  },
  {
    path: '/outlet',
    name: 'indexoutlet',
    component: IndexOutlet,
    meta : {
      requiresAuth: true,
    }
  },
  {
    path: '/outlet/tambah',
    name: 'tambahoutlet',
    component: TambahOutlet,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/outlet/edit/:id',
    name: 'editoutlet',
    component: EditOutlet,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/paket',
    name: 'indexpaket',
    component: IndexPaket,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/paket/edit/:id',
    name: 'editpaket',
    component: EditPaket,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/member',
    name: 'indexmember',
    component: IndexMember,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/member/detail/:id',
    name: 'detailmember',
    component: DetailMember,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/member/tambah',
    name: 'tambahmember',
    component: TambahMember,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/member/edit/:id',
    name: 'editmember',
    component: EditMember,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/transaksi',
    name: 'indextransaksi',
    component: IndexTransaksi,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/transaksi/tambah',
    name: 'tambahtransaksi',
    component: TambahTransaksi,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/transaksi/detail/:id',
    name: 'detailtransaksi',
    component: DetailTransaksi,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/transaksi/detail/tambah/:id',
    name: 'tambahdetail',
    component: TambahDetailTransaksi,
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/report',
    name: 'report',
    component: Report,
    meta : {
      requiresAuth: true
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
      if(localStorage.getItem('auth')) {
        next()      
      } else {
        next('/login')
      }
  }
  next()
})

export default router
