<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Login</title>
</head>
<body>
    <div class="contenedor">
        
        <div class="imagen">
        </div>
        <br>
        <h3>Usuario</h3>
        <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Username" v-model="usuario" aria-describedby="basic-addon1">
        <h3>Contraseña</h3>
        <input type="password" class="form-control" placeholder="Contraseña" aria-label="Username" v-model="password" aria-describedby="basic-addon1">
        
        <div class="boton">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-dark" style="margin-left: 200px; width:90px;" @click="entrar">Entrar</button>
            </div>
        </div>
    </div>
    
</body>
</html>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            usuario:'',
            password:'',

        }
    },methods:{
        entrar(){
           const path='http://127.0.0.1:8000/api/login/'
            axios.post(path,{
                username:this.usuario,
                password:this.password
            }).then((response)=>{
                // eslint-disable-next-line no-console
                localStorage.setItem('token', response.data.token)
                this.$router.push("/lista")
            })
            /* eslint-disable */
        .catch((error)=>{
            console.log('Error'+error)
        })


        }

    }
}

</script>

<style>
body{
    height: 100%;
    background-image: url("fondo.jpg");
    text-align: center;
}
.contenedor{
    position:absolute;
    margin: 0 auto;
    top: 50px;
    left: 0;
    right: 0;
    height: 400px;
    width: 450px;
    color:white;
    
}
.imagen{
    margin-left: 155px;
    background-image: url("user.png");
    height: 100px;
}
.boton{
    margin-top: 30px;
    margin-left: 75px;
}
</style>