<template>
    <div class="report">
        <VueHtml2pdf
            :show-layout="true"
            :float-layout="false"
            :enable-download="true"
            :preview-modal="true"
            :paginate-elements-by-height="1400"
            filename="report_transaksi"
            :pdf-quality="2"
            :manual-pagination="false"
            pdf-format="a4"
            pdf-orientation="portrait"
            pdf-content-width="800px"
            ref="html2Pdf"
        >
            <section slot="pdf-content">
                <h1>Report Transaksi</h1>
                <h3>Laundry Online</h3>
                <h5>Jalan Danau Ranau No. 1, Malang</h5>
                <table>
                    <thead>
                        <tr>
                            <th>No. </th>
                            <th>Member</th>
                            <th>Tanggal Transaksi</th>
                            <th>Tanggal Pembayaran</th>
                            <th>Nominal Pembayaran</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(t, index) in transaksi" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ t.nama }}</td>
                            <td>{{ t.tgl_order | moment("DD/MM/YYYY") }}</td>
                            <td>{{ t.tgl_bayar | moment("DD/MM/YYYY") }}</td>
                            <td>Rp {{ t.total_bayar }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </VueHtml2pdf>
        <button type="button" @click="generateReport">Buat Report</button>
    </div>
</template>

<style scoped>
h1,h3,h5 { text-align : center; }
.report {
    width: 800px;
    margin : 20px auto 0 auto;
}
table {
    margin: 25px 20px;
    border-collapse: collapse;
    width: 760px;
}
thead tr {
    background-color: #5465FF;
    color: white;
    text-align: left;
}

th, td {
    padding: 5px;
}

tbody tr {
    border-bottom: 1px solid #eee;
}

tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

tbody tr:last-of-type {
    border-bottom: 2px solid #0010A3;
}

button {
    width: 120px;
    height: 35px;
    margin-top: 20px;
    margin-left: 20px;
    border: none;
    background-color: #788BFF;
    color: white;
    border-radius: 3px;
}

button:hover {
    background-color: #335FFF;
}

button:active {
    background-color: #0028B8;
}
</style>

<script>
export default {
    data() {
        return {
            transaksi : {}
        }
    },
    created() {
        this.axios.get('/report', { headers : { 'Authorization' : 'Bearer ' + this.$store.state.token} })
                  .then( res => {
                      this.transaksi = res.data
                  })
    },
    methods : {
        generateReport() {
            this.$refs.html2Pdf.generatePdf()
        }
    },
}
</script>