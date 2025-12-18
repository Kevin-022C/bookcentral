<template>
  <div>
    <ListaLibros @nuevo-persona="handleNuevo" />
    <TablaDatos :personas="personas" />
  </div>
</template>

<script>
import ListaLibros from '@/components/ListaLibros.vue';
import TablaDatos from '@/components/tablaDatos.vue';
export default {
    components: {
        ListaLibros,
        TablaDatos
    },
    data() {
      return {
        personas: []
      }
    },
    methods: {
      handleNuevo(persona) {
        // agrega al arreglo para mostrar en la tabla
        this.personas.push(persona);
      }
    }
}
</script>

<style>

</style>