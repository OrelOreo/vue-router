<template>
    <div>
        <h1>Voici Page 3</h1>
        <div v-on:click="goDebut" class="btn btn-warning">Retour au début</div>
    </div>
    
</template>

<script>
export default {
    name:'Page3Site',
    methods: {
        goDebut: function(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>