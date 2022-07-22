<template>
  <div class="contenedor" v-if="loading">
    <h2 class="empresa1">Empresas</h2>
    <div class="empresa-trabajo"> 
        <ul class="empresa" v-for="(empresa, index) in  empresas" :key="index">
          <li><strong>Nombre</strong>: {{empresas[index].nombre}}</li>
          <li><strong>Ciudad</strong>: {{empresas[index].ciudad}}</li>
          <li><strong>Año</strong>: {{empresas[index].duracion}}</li>
          <li><strong>Puesto</strong>: {{empresas[index].puesto}}</li>
          <li><strong>País</strong>: {{empresas[index].pais}}</li>
        </ul>

    </div>
    <!-- <pre>
      {{empresas}}
    </pre> -->
  </div>
</template>

<script setup>
  import { ref } from "vue";
  let data = ref();
  let empresas = ref();
  let loading = ref(false);
 

  const obtenerDatos = async ()=> {
    let response = await fetch('https://raw.githubusercontent.com/Olesyakane/datos-json/main/datos.json')
    data.value = await response.json();
    empresas.value = data.value.empresas;
    
    loading.value = true;
  }
  obtenerDatos()

</script>


<style scoped>
.empresa1{
  margin-top: 50px;
}

.contenedor{
  margin-left: 30px;
  margin-right: 30px;
}

.empresa{
  border: 2px solid lightgray
}



.contenedor .empresa1{
  background-color: rgb(128, 95, 158);
  color: whitesmoke;
  font-size: 1.5rem;
  padding: .25rem;
  text-align: center;
}
.contenedor .empresa-trabajo{
  margin: 1rem auto;
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(3, minmax(250px, 350px));
  gap: 1.5rem
}

.contenedor .empresa-trabajo ul{
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: .25rem;
}

@media screen and (max-width:900px) {
  .contenedor .empresa-trabajo{
    grid-template-columns: repeat(2, minmax(250px, 350px));
  }
}
@media screen and (max-width:600px) {
  .contenedor .empresa-trabajo{
    grid-template-columns: repeat(1, minmax(250px, 350px));
  }
  
}
</style>