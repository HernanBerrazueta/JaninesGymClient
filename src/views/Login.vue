<template>
  <div class="container-fluid">
    <div class="row">
        <div class="login col-3 mx-auto p-4">
            <h1 class="mb-4">JANINE'S GYM</h1>
            <form>
                <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                    type="text"
                    class="form-control"
                    id="username"
                    v-model="user"
                />
                </div>
                <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                />
                </div>
                <button type="button" class="btn btn-primary px-4" @click="login">ENTRAR</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            user: "",
            password: ""
        }
    },
    methods: {
        login(){
            if(this.user != "" && this.password != ""){
                axios.post("http://localhost:3000/login", {"username": this.user}).then(res =>{
                    console.log(res.data)
                    if(this.user == res.data.username && this.password == res.data.password){
                        if(res.data.clientType){
                            localStorage.clientType = true
                            localStorage.username = this.user
                            this.$router.push("/clientes")
                        } else {
                            localStorage.clientType = false
                            localStorage.username = this.user
                            this.$router.push("/home")
                        }
                    } else {
                        alert("Algun Campo Esta Incorrecto")
                    }
                })
            } else {
                alert("Hay Campos Vacios")
            }
        }
    },
    created(){
        if(localStorage.clientType == "true"){
            this.$router.push("/clientes")
        } else if (localStorage.clientType == "false") {
            this.$router.push("/")
        }
    }
};
</script>

<style scoped>
.row{
    background-image: url('../assets/back.jpg');
    background-size: 20%;
    height: 100vh;
    align-items: center;
}

.login{
    background: #FFF;
    border-radius: 12px;
    box-shadow: 2px 2px 10px #333;
}
</style>