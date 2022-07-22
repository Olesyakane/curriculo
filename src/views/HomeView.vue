<template>
  <div class="container" v-if="loading">
    <div class="bloque1">
      <div class="foto">
        <img src="../assets/Yo.jpg" alt="Yo" />
      </div>
      <div class="estudios">
        <h2 class="academica">Formación Académica</h2>
        <!-- <p>-Máster en Dirección de Arte</p>
        <p>-Grado en Comunicación Audiovisual</p> -->
        <p
          v-for="valor in data.instituciones.inst1"
          :key="valor"
          value="institucion"
        >
          {{ valor }}
        </p>
      </div>
    </div>
    <div class="bloque2">
      <div class="datos-personales">
        <h2 class="misdatos">Datos personales</h2>
        <router-link class="enlace" to="/about">Sobre mi</router-link>
      </div>
      <div class="formacion-complementaria">
        <h2 class="complementaria">Formación Complementaria</h2>
        <!-- <p>-Desarrollo web</p>
        <p>-Multimedia</p> -->
        <p
          v-for="valor in data.instituciones.inst2"
          :key="valor"
          value="institucion"
        >
          {{ valor }}
        </p>
      </div>
    </div>
    
    <div class="gallery-images">
    
      <img src="@/assets/DjS0YLVW0AAnbLw.jpg" alt="algo">
    
    
      <img src="@/assets/homer-centrarl.jpg" alt="homer3">
    
    
      <img src="@/assets/madrugar-dormido.gif" alt="homer6">
    
    
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let data = ref();
let loading = ref(false);

const obtenerDatos = async () => {
  let response = await fetch(
    "https://raw.githubusercontent.com/Olesyakane/datos-json/main/datos.json"
  );

  data.value = await response.json();
  loading.value = true;
};
obtenerDatos();
</script>

<style>

.bloque1 {
  display: grid;
  gap: 3rem;
  grid-template-columns: auto 1fr;
  width: 95%;
  margin: 3rem auto;
}

.bloque2 {
  display: grid;
  gap: 3rem;
  grid-template-columns: auto 1fr;
  width: 95%;
  margin: 3rem auto;
}

.datos-personales {
  width: 300px;
}

img {
  width: 300px;
}

.bloque1 .estudios h2 {
  background-color: rgb(128, 95, 158);
  color: whitesmoke;
  font-size: 1.5rem;
  padding: .25rem;
  text-align: center;
}
.bloque1 .estudios p {
 
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: .25rem;
  /* border: 1px solid rgb(119, 119, 187); */
  /* border-radius: 0.5em; */
}
.bloque2 .datos-personales h2{
  background-color: rgb(128, 95, 158);
  color: whitesmoke;
  font-size: 1.5rem;
  padding: .25rem;
  text-align: center;
}
.bloque2 .datos-personales p{
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: .25rem;
}

.datos-personales a{
  text-decoration: none;
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: .25rem;
}

/* .enlace{
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-decoration: none;
  padding: .25rem;
  
} */

.bloque2 .formacion-complementaria h2{
  background-color: rgb(128, 95, 158);
  color: whitesmoke;
  font-size: 1.5rem;
  padding: .25rem;
  text-align: center;
}

.bloque2 .formacion-complementaria p{
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding: .25rem;
}

.gallery-images{
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 300px));
  gap: 1rem;
  
}
  .gallery-images img{
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  
</style>
