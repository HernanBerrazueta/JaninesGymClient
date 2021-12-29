<template>
  <router-view/>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";

export default {

}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img{
  width: 100%;
}

    section{
        width: calc(100% - 285px);
    }

    .btn-primary{
      background-color: #c64583;
      border-color: #c64583;
    }

    .btn-primary:hover{
      background-color: #aa336d;
      border-color: #aa336d;
    }
</style>
