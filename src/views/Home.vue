<template>
    <div class="d-flex home">
        <LeftMenu />
        <section>
            <div class="container-fluid">
                <div class="row px-4">
                    <div class="col-12 my-5">
                        <h3>Bienvenid@ usuario, es bueno verte de nuevo.</h3>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <h4>MEMBRESIA</h4>
                            <div>
                                Platino
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <h4>VIGENCIA</h4>
                            <div>
                                Activa
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <h4>PROXIMA RENOVACIÓN</h4>
                            <div>
                                11/11/2021
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card">
                            <h4>PUNTOS ACUMULADOS</h4>
                            <div>
                                4200
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card">
                            <h4>TIPO DE ENTRENAMIENTO</h4>
                            <div>
                                Tigre III
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card">
                            <h4>DIETA ACTIVA</h4>
                            <div>
                                Aumento de masa muscular
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue'
    export default {
        name: 'Home',
        components: {
            LeftMenu
        }
    }
</script>

<style scoped>

    .home{
        background-image: url("~@/assets/gym1.jpg");
        background-size: cover;
    }
    section{
        width: calc(100% - 285px);
    }

    h3{
        text-transform: uppercase;
        text-align: left;
        padding: 20px;
        color: #FFF;
        background-color: rgba(0,0,0,0.65);
        border-radius: 8px;
    }

    .card{
        padding: 20px;
        margin-bottom: 40px;
    }

    .card h4{
        padding-bottom: 10px;
        border-bottom: 1px solid #aaa;
        font-weight: bold;
    }
    
</style>