<template>
    <div id="wrapper">
        <sidebar-component></sidebar-component>
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <navbar-component></navbar-component>
                
                <div class="container-fluid">
                    <h1 class="h4 mb-4 text-gray-800">Detail Member</h1>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Data Member</h6>
                                </div>
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-md-4 text-center">
                                            <i class="far fa-user fa-7x text-gray-300"></i>
                                        </div>
                                        <div class="col-auto">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Nama</div>
                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{ member.nama }}</div>
                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Jenis Kelamin</div>
                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{ member.jk }}</div>
                                            <div class="text-xs font-weight-bold text-primary text-uppercase">Alamat</div>
                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{ member.alamat }}</div>
                                            <div class="text-xs font-weight-bold text-primary text-uppercase">No. Telepon</div>
                                            <div class="h6 mb-0 font-weight-bold text-gray-800 mb-2">{{ member.telp }}</div>
                                        </div>
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
            id : this.$route.params.id,
            member : {}        
        }
    },
    created() {
        var data = JSON.parse(this.$store.state.datauser)
        var role = data.role

        if(role == 'owner')
        {
            this.$swal("Error","Anda tidak dapat mengakses halaman ini","error")
            this.$router.push('/') 
        }

        this.axios.get(`/member/${this.id}`, { headers : { 'Authorization' : 'Bearer ' + this.$store.state.token} })
             .then(res => {
                 this.member = res.data
             })
    }
}
</script>