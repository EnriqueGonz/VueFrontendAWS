<template>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Document</title>
</head>
<body>
  <div>
    <div class="contenedor2">
<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table id="tabla"
      :headers="headers"
      :items="desserts"
      :search="search"
      hide-default-footer
    >
    <template v-slot:item.action="{ item }">
      <v-btn color="error" fab x-small dark @click="editar(item)" >
              <v-icon>mdi-pencil</v-icon> 
      </v-btn>
      <v-btn color="success" fab x-small dark @click="eliminar(item)">
              <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
    
    </v-data-table>
  </v-card>
</template>
    <div class="boton2">
      <button type="button" class="btn btn-dark" style="margin-left: 105px; width:180px;" @click="crearAlumno">Añadir nuevo alumno</button>
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
            search: '',
            headers:[
              { text: 'id',align: 'left',sortable: false, filterable: false,value: 'id',},
              { text: 'Nombre',align: 'left',sortable: false,value: 'nombre',},
              { text: 'Apellidos',align: 'left',sortable: false,filterable: false, value: 'apellidos' },
              { text: 'Edad', value: 'edad' },
              { text: 'Sexo',align: 'left',sortable: false,filterable: false, value: 'sexo' },
              { text: 'Direccion',align: 'left',sortable: false,filterable: false, value: 'direccion' },
              { text: 'Carrera', value: 'carrera' },
              { text: 'Opciones', value: 'action', sortable: false },
            ],
            desserts:[

            ]
        }
    },methods:{
      getAlumnos(){
        let config = {
          headers: {
          'Authorization': 'Token ' + localStorage.getItem("token")
          }
        }
           const path='http://enriquegonz.ddns.net/api/alumnos/'
            axios.get(path,config).then((response)=>{
                this.desserts=response.data 
            })
            /* eslint-disable */
        .catch((error)=>{
            console.log(error)
        })
    },
    crearAlumno(){
      this.$router.push({ path: '/registroAlumno' })
    },
    eliminar(item){
        const index = this.desserts.indexOf(item)
        const id = this.desserts[index]["id"]
        console.log(id)

        let config = {
          headers: {
          'Authorization': 'Token ' + localStorage.getItem("token")
          }
        }
           const path='http://enriquegonz.ddns.net/api/alumnos/'+id
            axios.delete(path,config).then((response)=>{
                console.log(response)
                alert('El alumno con la id '+id +' ha sido eliminado correctamente')
                this.getAlumnos()
            })
            /* eslint-disable */
        .catch((error)=>{
            console.log(error)
        })

    },
    editar(item){
          const index = this.desserts.indexOf(item)
          const id = this.desserts[index]["id"]
          console.log(id)
          localStorage.setItem('idAlumno', id)
          localStorage.setItem('nombreAlumno', this.desserts[index]["nombre"])
          localStorage.setItem('apellidosAlumno', this.desserts[index]["apellidos"])
          localStorage.setItem('edadAlumno', this.desserts[index]["edad"])
          localStorage.setItem('sexoAlumno', this.desserts[index]["sexo"])
          localStorage.setItem('direccionAlumno', this.desserts[index]["direccion"])
          localStorage.setItem('carreraAlumno', this.desserts[index]["carrera"])
          this.$router.push("/editar")

    }
    
},
        created(){
            this.getAlumnos()
        }
}
</script>

<style>
.contenedor2{
    position:absolute;
    margin: 0 auto;
    top: 80px;
    left: 0;
    right: 0;
    height: 400px;
    width: 1050px;
    color:white;
    
}
.boton2{
  margin-top: 30px;
  margin-left: 770px;
}
</style>