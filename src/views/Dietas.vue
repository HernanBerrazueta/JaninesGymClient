<template>
    <div class="d-flex">
        <LeftMenu />
        <section>
            <div class="container-fluid">
                <div class="row px-4 mt-5">
                    <div class="col-12">
                        <h1>Dietas</h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import LeftMenu from '@/components/LeftMenu.vue'
    export default {
        data(){
            return{
                dietas: []
            }
        },
        name: 'Dietas',
        components: {
            LeftMenu
        },
        methods: {
            getDietas(){
                axios.post("http://localhost:3000/cliente-registro", this.user).then(res => {
                    alert("Cliente Agregado")
                })
            }
        },
        mounted(){
            this.getClientes()
        },
        created(){
            if(localStorage.clientType == undefined){
                this.$router.push("/login")
            }
        }
    }
</script>

<style scoped>
    section {
        width: calc(100% - 285px);
    }

    label{
        margin-top: 15px;
    }

    li{
        list-style: none;
    }

    .users{
        display: flex;
        justify-content: space-between;
        text-align: left;
        margin-bottom: 5px;
    }

</style>