<template>
    <div>
        <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <button class="btn btn-sm btn-warning btn-icon-split" @click="logout">
                                <span class="icon text-white-50">
                                    <i class="fas fa-sign-out-alt"></i>
                                </span>
                                <span class="text">Logout</span>
                            </button>
                        </li>
                    </ul>

                </nav>                
    </div>
</template>

<script>
export default {    
    methods : {
        logout() {
            this.axios.post('/logout', { headers : { 'Authorization' : 'Bearer ' + this.$store.state.token} })
                      .then( () => {
                          this.$store.commit('clearToken');
                          this.$store.commit('clearUser');
                          this.$router.push('/login')
                      })
        }
    }
}
</script>