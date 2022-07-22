<template>
    <div class="container">
        
       <div v-if="loading">
            Cargando... 

        </div>
        <div v-else>
           <div class="nombre">{{guardarCosas.nombre}} {{guardarCosas.apellido1}} {{guardarCosas.apellido2}}</div>
           <div class="sobremi">{{guardarCosas.sobremi}}</div>
       </div>
    </div>
</template>

<script setup> 
import { db } from './firebase.js';
import { doc, getDoc } from "firebase/firestore";
import { ref } from 'vue';

const guardarCosas = ref('');
const loading = ref(false)

const leer = async () => {
    loading.value = true;
    const docRef = doc(db, "datos_personales", "misdatos");
    const docSnap = await getDoc(docRef);
    loading.value = false;  
    // console.log(docSnap)
    if (docSnap.exists()) {
        guardarCosas.value = docSnap.data();
    } else {
        // doc.data() will be undefined in this case pero en otros cases no fsx g
        console.log("No existo!");
    }
}


leer();

// console.log(db);
</script>

<style scoped>
.container{
    display: grid;
    grid-template-columns: auto;
    gap: .5rem;
    font-size: 1.3rem;
    width: 90%;
    max-width: 500px;
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 5px;
    border: 2px solid lightgray
}
</style>