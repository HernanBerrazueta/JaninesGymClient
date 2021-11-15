<template>
    <div class="d-flex">
        <LeftMenu />
        <section>
            <div class="container-fluid">
                <div class="row px-4 mt-5">
                    <div class="col-6">
                        <h4>Agregar Cliente</h4>
                        <form class="row">
                            <div class="col-6">
                            <label for="username" class="form-label">Username</label>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                v-model="user.username"
                            />
                            </div>
                            <div class="col-6">
                            <label for="password" class="form-label">Contraseña</label>
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                v-model="user.password"
                            />
                            </div>
                            <div class="col-4">
                            <label for="password" class="form-label">Nombre</label>
                            <input
                                type="text"
                                class="form-control"
                                id="password"
                                v-model="user.firstname"
                            />
                            </div>
                            <div class="col-4">
                            <label for="password" class="form-label">Apellido Paterno</label>
                            <input
                                type="text"
                                class="form-control"
                                id="password"
                                v-model="user.lastname"
                            />
                            </div>
                            <div class="col-4">
                            <label for="password" class="form-label">Apellido Materno</label>
                            <input
                                type="text"
                                class="form-control"
                                id="password"
                                v-model="user.secondlastname"
                            />
                            </div>
                            <div class="col-4">
                            <label for="password" class="form-label">Email</label>
                            <input
                                type="text"
                                class="form-control"
                                id="password"
                                v-model="user.email"
                            />
                            </div>
                            <div class="col-4">
                            <label for="password" class="form-label">Teléfono</label>
                            <input
                                type="number"
                                class="form-control"
                                id="password"
                                v-model="user.tel"
                            />
                            </div>
                            <div class="col-4">
                            <label for="password" class="form-label">Edad</label>
                            <input
                                type="number"
                                class="form-control"
                                id="password"
                                v-model="user.edad"
                            />
                            </div>
                            <div class="col-4">
                            <label for="password" class="form-label">Membresia</label>
                            <input
                                type="text"
                                class="form-control"
                                id="password"
                                v-model="user.membresia"
                            />
                            </div>
                            <div class="col-4">
                            <label for="password" class="form-label">Meses Pagados</label>
                            <input
                                type="text"
                                class="form-control"
                                id="password"
                                v-model="user.meses"
                            />
                            </div>

                            <div class="col-12 mt-3">
                                <button v-if="status" type="button" class="btn btn-success px-4 mx-2" @click="addCliente">Crear Usuario</button>
                                <button v-else type="button" class="btn btn-warning px-4 mx-2" @click="actualizarCliente">Actualizar Usuario</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-6">
                        <h4>Lista de Clientes</h4>
                        <div>
                            <ul>
                                <li v-for="cliente in clientes" :key="cliente.value" >
                                    <div v-if="cliente.firstname != 'Admin'" class="users">
                                        <span>{{cliente.firstname}} {{cliente.lastname}} {{cliente.secondlastname}}</span>
                                        <div>
                                            <button class="btn btn-primary btn-sm mx-2" @click="editCliente(cliente)">Editar</button>
                                            <button class="btn btn-danger btn-sm" @click="borrarCliente(cliente)">Eliminar</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
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
                user: {
                    username : "",
                    password : "",
                    firstname: "",
                    lastname: "",
                    secondlastname: "",
                    email: "",
                    tel: "",
                    edad: "",
                    membresia: "",
                    meses: "",
                    clientType: false;
                },
                clientes: [],
                status: true
            }
        },
        name: 'Cliente',
        components: {
            LeftMenu
        },
        methods: {
            addCliente(){
                axios.post("http://localhost:3000/cliente-registro", this.user).then(res => {
                    alert("Cliente Agregado")
                    this.getClientes();
                })
            },
            getClientes(){
                axios.get("http://localhost:3000/clientes").then(res =>{
                    console.log(res.data)
                    this.clientes = res.data;
                })
            },
            editCliente(cliente){
                this.status = false;
                this.user = {
                    _id : cliente._id,
                    username : cliente.username,
                    password : cliente.password,
                    firstname: cliente.firstname,
                    lastname: cliente.lastname,
                    secondlastname: cliente.secondlastname,
                    email: cliente.email,
                    tel: cliente.tel,
                    edad: cliente.edad,
                    membresia: cliente.membresia,
                    meses: cliente.meses,
                    clientType : cliente.clientType
                }
            },
            actualizarCliente(){
                axios.post("http://localhost:3000/cliente-update", this.user).then(res => {
                    alert("Cliente Actualizado")
                    this.getClientes();
                })
                this.status = true
            },
            borrarCliente(cliente){
                axios.post("http://localhost:3000/cliente-delete", cliente).then(res => {
                    alert("Cliente Eliminado")
                    this.getClientes();
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