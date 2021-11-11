<template>
    <nav>
        <header>
            <h3 class="py-5">
                <img src="@/assets/logo.png" alt="">
            </h3>
        </header>
        <ul>
            <li v-if="menuType == true" @click="this.$router.push('/clientes')">Clientes</li>
            <div v-else>                
                <li @click="this.$router.push('/')">Inicio</li>
                <li @click="this.$router.push('/perfil')">Perfil</li>
                <li>Entrenamiento</li>
                <li>Plan Alimenticio</li>
                <li>Configuración </li>
            </div>
            <li @click="this.$router.push('/login')">Salir</li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data(){
            return{
                menuType: Boolean
            }
        },
        created(){
            this.menuType = localStorage.clientType
        }
    }
</script>

<style scoped>

    nav{
        width: 285px;
        height: 100vh;
        background-color: #333333;
        color: #FFF;
        box-shadow: 4px 4px 10px #333;
        border-top-right-radius: 40px;
        overflow: hidden;
    }

    img{
        width: 80%;
    }

    ul{
        padding-left: 0;
        margin-top: -8px;
    }

    li{
        font-weight: bold;
        list-style: none;
        text-align: left;
        padding: 20px 40px;
        cursor: pointer;
        transition: all .8s;
    }

    li:hover, h3{
        background: #c64583;
    }
</style>