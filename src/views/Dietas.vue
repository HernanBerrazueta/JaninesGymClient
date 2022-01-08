<template>
    <div class="d-flex">
        <LeftMenu />
        <section>
            <div class="container-fluid">
                <div class="row px-4 mt-5">
                    <div class="col-12">
                        <h1>Dietas</h1>
                    </div>
                    <div class="col-6">
                        <select class="form-select" v-model="dieta">
                            <option value="Ganar Masa">Ganar Masa</option>
                            <option value="Bajar Peso">Bajar Peso</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <input type="date" v-model="fecha">
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary mt-5 mb-5" @click="getDietas">BUSCAR</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h2>Resultados</h2>
                        {{dietas}}
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
                dietas: '',
                dieta: 'dieta',
                fecha: 'fecha'
            }
        },
        name: 'Dietas',
        components: {
            LeftMenu
        },
        methods: {
            getDietas(){

                let f = this.fecha.split('-')
                
                let buscar = {
                    fecha: f[1].replace(/^0+/, '') +'/'+ f[2].replace(/^0+/, '') +'/'+ f[0].replace(/^0+/, ''),
                    dieta: this.dieta
                }

                axios.post("http://localhost:3000/find-dieta", buscar).then(res => {

                    if(res.data.length > 0){
                        this.dietas = res.data
                    } else {
                        this.dietas = "No se encontraron resultados"
                    }

                })
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