<template>
    <div>

        <nav class="main-menu">
            <router-link to="/">Estudios</router-link>
            <router-link to="/experiencia">Experiencia</router-link>
        </nav>
    </div>
</template>

<script setup>
    
</script>

<style scoped>
.main-menu{
    width: 100%;
    background-color: rgb(59, 59, 114);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; 
}
    .main-menu a{
        width: 100%;
        text-align: center;
        padding: 1rem;
        color: white;
        font-size: 1.5rem;
        text-decoration: none;
    }
    .main-menu a:hover{
        background-color: rgb(180, 117, 0);
    }
</style>