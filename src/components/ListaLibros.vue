<template>
  <div class="formulario">

      <div class ="imagen">
        <label for="">Fotografía</label>
        <img :src="foto" alt="Foto aleatoria" width="150" />
      </div>
      <div class="datos">
        <label for="id_titulo">Título</label>
        <input id="id_titulo" type="text" v-model="tituloData">

        <label for="id_nombre">Nombre</label>
        <input id="id_nombre" type="text" v-model="nombreData">

        <label for="id_apellido">Apellido</label>
        <input id="id_apellido" type="text" v-model="apellidoData">

        <label for="id_atributoUno">Edad</label>
        <input id="id_atributoUno" type="number" v-model="edad">

        <label for="id_telefono">Teléfono</label>
        <input id="id_telefono" type="tel" v-model="telefono">

        <label for="id_email">Email</label>
        <input id="id_email" type="email" v-model="email">
      </div>
      <div>
         <button v-on:click="buscarPersona()">Buscar</button>
      </div>
      <button v-on:click="presionarBoton()">presionar boton</button>
     
  </div>
</template>

<script>
import { preguntar } from '@/Clients/preguntar.js';
export default {
  emits: ['nuevo-persona'],
  data(){
    return{
      foto: '',
      tituloData:null,
      nombreData:null,
      apellidoData:null,
      edad:null,
      telefono:null,
      email: null,
      DatosPersona: []
    }
  },
  methods: {
    async buscarPersona() {
      try{
        const re = await preguntar();
        const persona = re && re.results && re.results[0];
        if(!persona) return;
        this.foto = persona.picture && persona.picture.large || '';
        this.tituloData = persona.name && persona.name.title || '';
        this.nombreData = persona.name && persona.name.first || '';
        this.apellidoData = persona.name && persona.name.last || '';
        this.edad = persona.dob && persona.dob.age || null;
        this.telefono = persona.phone || '';
        this.email = persona.email || '';

        const nuevo = {
          foto: this.foto,
          titulo: this.tituloData,
          nombre: this.nombreData,
          apellido: this.apellidoData,
          edad: this.edad,
          telefono: this.telefono,
          email: this.email
        };
        this.$emit('nuevo-persona', nuevo);
      } catch(err) {
        console.error('Error consultando la API:', err);
      }
         
        },
    async presionarBoton() {
      const re = await preguntar();
      console.log(re);
    },
    
  }
}
</script>

<style>

</style>