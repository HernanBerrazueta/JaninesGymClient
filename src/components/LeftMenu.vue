<template>
    <nav>
        <header>
            <h3 class="py-5">
                <img src="@/assets/logo.png" alt="">
            </h3>
        </header>
        <ul v-if="menu == 'true'">
            <li @click="this.$router.push('/clientes')">Clientes</li>
            <li @click="this.$router.push('/dietas')">Dietas</li>
            <li @click="logOut()">Salir</li>
        </ul>
        <ul v-else>
            <!-- <li v-bind:class="[acti    ve == '/' ? 'active' : '']" @click="this.$router.push('/')">Inicio</li>
            <li v-bind:class="[active == '/perfil' ? 'active' : '']" @click="this.$router.push('/perfil')">Perfil</li> -->
            <li  v-bind:class="[active == '/plan-alimenticio' ? 'active' : '']" @click="this.$router.push('/plan-alimenticio')">Plan Alimenticio</li>
            <li @click="logOut()">Salir</li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data(){
            return{
                menu: false,
                active: "/"
            }
        },
        watch: {
            menu: function (val){
                this.menu = val
            }
        },
        methods:{
            logOut(){
                localStorage.clear();
                this.$router.push('/login')
            }
        },
        created(){
            this.menu = localStorage.clientType
            this.active = this.$route.path
        }
    }
</script>

<style scoped>

    nav{
        width: 285px;
        height: 100vh;
        background-color: #333333;
        color: #FFF;
        /* box-shadow: 4px 4px 10px #333; */
        /* border-top-right-radius: 40px; */
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
        color : #FFF;
    }

    .active{
        color: #c64583;
    }
</style>