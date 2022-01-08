<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>
                
                <div class="container-fluid">
                    <!-- Page Heading -->
                    <h1 class="h3 mb-4 text-gray-800">Data Transaksi</h1>

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card shadow mb-4">                                
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <router-link to="/transaksi/tambah" class="btn btn-info btn-icon-split">
                                            <span class="icon text-white-50">
                                                <i class="fas fa-plus"></i>
                                            </span>
                                            <span class="text">Tambah</span>                                        
                                        </router-link>                                        
                                        <table class="table table-bordered mt-3" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Nama Member</th>
                                                    <th>Tgl Order</th>
                                                    <th>Status</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               <tr v-for="(t, index) in transaksi" :key="index">
                                                   <td>{{ index + 1 }}</td>
                                                   <td>{{ t.nama }}</td>
                                                   <td>{{ t.tgl_order }}</td>
                                                   <td>
                                                       <span v-if="t.status == 'Baru'" class="badge bg-info text-light">{{ t.status }}</span>
                                                       <span v-if="t.status == 'Proses'" class="badge bg-warning text-dark">{{ t.status }}</span>                                                       
                                                       <span v-if="t.status == 'Selesai'" class="badge bg-success text-light">{{ t.status }}</span>                                                       
                                                       <span v-if="t.status == 'Diambil'" class="badge bg-secondary text-light">{{ t.status }}</span>
                                                   </td>
                                                   <td>
                                                       <router-link class="btn btn-success btn-circle mr-1" :to="{ name : 'detailtransaksi' , params : { id : t.id } }"><i class="far fa-eye"></i></router-link>
                                                       <router-link class="btn btn-warning btn-circle" :to="{ name : 'edittransaksi' , params : { id : t.id } }"><i class="fas fa-pen"></i></router-link>
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
            transaksi : {}
        }
    },
    created() {
        this.axios.get('/transaksi', { headers : { 'Authorization' : 'Bearer ' + this.$store.state.token} })
                  .then( res => {
                      this.transaksi = res.data.data
                  })
    },
}
</script>