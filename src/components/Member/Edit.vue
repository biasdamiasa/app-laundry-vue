<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>
                
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Edit Data Member</h6>
                                </div>
                                <div class="card-body">
                                    <form @submit.prevent="edit">
                                        <div class="form-group">
                                            <label>Nama</label>
                                            <input type="text" class="form-control" v-model="member.nama">
                                        </div>
                                        <div class="form-group">
                                            <label>Alamat</label>
                                            <textarea rows="4" class="form-control" v-model="member.alamat"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <div>
                                                <label>Jenis Kelamin</label>
                                            </div>
                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">                                                
                                                <label v-if="member.jk =='Laki-laki'" class="btn btn-secondary active">
                                                    <input type="radio" value="Laki-laki" v-model="member.jk" checked> Laki-laki
                                                </label>
                                                <label v-else class="btn btn-secondary">
                                                    <input type="radio" value="Laki-laki" v-model="member.jk"> Laki-laki
                                                </label>
                                                <label v-if="member.jk == 'Perempuan'" class="btn btn-secondary active">
                                                    <input type="radio" value="Perempuan" v-model="member.jk" checked> Perempuan
                                                </label>
                                                <label v-else class="btn btn-secondary">
                                                    <input type="radio" value="Perempuan" v-model="member.jk"> Perempuan
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Nomor Telepon</label>
                                            <input type="text" class="form-control" v-model="member.telp">                                            
                                        </div>
                                        <button type="submit" class="btn btn-success btn-block">Simpan</button>
                                    </form>
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
        this.axios.get(`/member/${this.$route.params.id}`, { headers : { 'Authorization' : `Bearer ` + this.$store.state.token} })
             .then((res) => {
                 this.member = res.data
             })
    },
    methods : {
        edit() {
            this.axios.put(`/member/${this.$route.params.id}`, this.member, { headers : { 'Authorization' : `Bearer ` + this.$store.state.token} })
                  .then( () => {
                    this.$router.push('/member');
                  })
                  .catch( err => console.log(err))
        }
    } 
}
</script>