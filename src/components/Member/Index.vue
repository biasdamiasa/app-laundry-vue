<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>
                
                <div class="container-fluid">
                    <!-- Page Heading -->
                    <h1 class="h3 mb-4 text-gray-800">Data Member</h1>

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card shadow mb-4">                                
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <router-link to="/member/tambah" class="btn btn-info btn-icon-split">
                                            <span class="icon text-white-50">
                                                <i class="fas fa-plus"></i>
                                            </span>
                                            <span class="text">Tambah</span>                                        
                                        </router-link>                                        
                                        <table class="table table-bordered mt-3" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Nama</th>
                                                    <th>Alamat</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               <tr v-for="(m, index) in member" :key="index">
                                                   <td>{{ index + 1 }}</td>
                                                   <td>{{ m.nama }}</td>
                                                   <td>{{ m.alamat }}</td>
                                                   <td>
                                                       <router-link class="btn btn-success btn-circle" :to="{ name : 'detailmember' , params : { id : m.id } }"><i class="far fa-eye"></i></router-link>
                                                       <router-link class="btn btn-warning btn-circle" :to="{ name : 'editmember' , params : { id : m.id } }"><i class="fas fa-pen"></i></router-link>
                                                       <button type="button" @click="hapus(m.id)" class="btn btn-danger btn-circle"><i class="fas fa-trash"></i></button>
                                                   </td>
                                               </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <footer-component></footer-component>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            member : {}
        }
    },
    created() {

        var data = JSON.parse(this.$store.state.datauser)
        var role = data.role

        if(role == 'kasir' || role == 'admin')
        {
            this.axios.get('/member', { headers : { 'Authorization' : 'Bearer ' + this.$store.state.token} })
                    .then( res => {
                        this.member = res.data
                    })
        } 
        else
        { this.$router.push('/') }

    },
    methods : {
        hapus(id) {
            this.axios.delete(`/member/${id}`, { headers : { 'Authorization' : 'Bearer ' + this.$store.state.token} })
                      .then( () => {
                          let i = this.member.map(item => item.id).indexOf(id);
                          this.member.splice(i, 1);
                      });
        }
    }
}
</script>