<template>
    <div>
        <ul class="nav">
            <li class="btn btn-primary btn-nav"><router-link to="/" exact>Accueil</router-link></li>
            <li class="btn btn-primary btn-nav"><router-link to="/page1">Page 1</router-link></li>
            <li class="btn btn-primary btn-nav"><router-link to="/page2">Page 2</router-link></li>
            <li class="btn btn-primary btn-nav"><router-link to="/page3">Page 3</router-link></li>
        </ul>
    </div> 
</template>

<script>
export default {
    name:'HeaderTop'
}
</script>

<style>
    .btn-nav {
        margin: 5px;
    }
    .btn-nav a {
        color: #fff;
        text-decoration: none;
    }
    .btn-nav a:hover {
        color: #fff;
    }

</style>