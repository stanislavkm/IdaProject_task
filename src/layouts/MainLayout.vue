<template>
    <div class="adding_layout">
    <h1 class="add_header">Добавление товара</h1>
    <addForm></addForm>
    </div>
    <router-view></router-view>

</template>

<script>
import addForm from '../components/AddForm'
export default{
    name: 'MainLayout',
    components: {
        addForm,
        }
}
</script>

<style>
.add_header{
    text-align:left;
    font-family: 'SourceSansPro-SemiBold';
    font-style: normal;
    color: #3F3F3F;
    font-size: 28px;
    line-height: 35px;
    margin: 15px 0 10px 10%;
}
.adding_layout{
    background:#E5E5E5;
    position: fixed;
    left: 0;
    top: 0;
    width: 380px;
    height: 100%;
}
</style>