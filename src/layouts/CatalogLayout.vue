<template>
<div class="catalog">
    <h2>Каталог товаров</h2>
    <div class="catalog_wrapper">
        <ToDoItem></ToDoItem>
        <ToDoItem></ToDoItem>
        <ToDoItem></ToDoItem>
        <ToDoItem></ToDoItem>        
    </div>
</div>
</template>

<script>
import ToDoItem from '../components/Item'
export default{
    name: "CatalogLayout",
    components: {ToDoItem},
}
</script>

<style scoped>
.catalog{
    padding: 0px 0 0 380px;
    background:#E5E5E5;
    height: 100vh;
}
.catalog_wrapper{
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 60px;
    row-gap: 10px;
    justify-content: center; 
}
</style>