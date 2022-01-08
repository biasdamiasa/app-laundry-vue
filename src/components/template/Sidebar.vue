<template>
    <div>
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-text mx-3">Laundry Online</div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item">
                <router-link to="/" class="nav-link">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>                
            </li>
            <li v-if="isAdmin || isKasir" class="nav-item">
                <router-link class="nav-link" to="/member">
                    <i class="fas fa-users"></i>
                    <span>Member</span>
                </router-link>                
            </li>
            <li v-if="isAdmin" class="nav-item">
                <router-link to="/outlet" class="nav-link">
                    <i class="fas fa-store"></i>
                    <span>Outlet</span>
                </router-link>             
            </li>
            <li v-if="isAdmin" class="nav-item">
                <router-link class="nav-link" to="/paket">
                    <i class="fas fa-archive"></i>
                    <span>Paket Laundry</span>
                </router-link>                
            </li>
            <li v-if="isAdmin || isKasir" class="nav-item">
                <router-link class="nav-link" to="/transaksi">
                    <i class="fas fa-file-invoice-dollar"></i>
                    <span>Transaksi</span>
                </router-link>                
            </li>
            <li v-if="isOwner" class="nav-item">
                <router-link class="nav-link" to="/report">
                    <i class="far fa-file-alt"></i>
                    <span>Report</span>
                </router-link>
            </li>
            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isAdmin : false,
            isKasir : false,
            isOwner : false
        }
    },
    created() {
        var data = JSON.parse(this.$store.state.datauser)
        var role = data.role

        if(role == 'admin') {
            this.isAdmin = true
        } else if (role == 'kasir') {
            this.isKasir = true
        } else {
            this.isOwner = true
        }
    },
    methods : {
        
    }
}
</script>