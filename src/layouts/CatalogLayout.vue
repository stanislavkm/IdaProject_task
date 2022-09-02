<template>
<div class="catalog" :class="[MOBILE_VALUE ? 'full_catalog' :'']">
<!--    <h2>Каталог товаров</h2> -->
    <div class="catalog_wrapper">
        <CatalogItem></CatalogItem>
        <CatalogItem></CatalogItem>
        <CatalogItem></CatalogItem>
        <CatalogItem></CatalogItem>        
    </div>
</div>
</template>

<script>
import CatalogItem from '../components/Item'
import {mapGetters} from "vuex"
export default{
    name: "CatalogLayout",
    components: {CatalogItem},
    computed:{
    ...mapGetters([
      'MOBILE_VALUE',
    ])         
    }
}
</script>

<style scoped>
.catalog{
    padding: 0px 0 0 380px;
    background:#E5E5E5;
}
.full_catalog{
    padding: 0;
    transition: all 1s ease-in;    
}
.catalog_wrapper{
    height: 100%;
    width: 100%;
    padding: 60px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 10px;
    justify-content: center; 
}
</style>