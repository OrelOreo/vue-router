<template>
    <div>
        <h1>Le poste numéro {{ id }}</h1>
        <div v-on:click="goDebut" class="btn btn-warning">Retour au début</div>
    </div>
    
</template>

<script>
export default {
    name:'PostSite',
    data(){
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        goDebut: function(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>