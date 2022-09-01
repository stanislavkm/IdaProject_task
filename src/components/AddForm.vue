<template>
    <form class="addForm" @submit.prevent="">
        <div class="addForm_item">
            <label class="addForm_label" for="product_name">Наименование товара</label>
            <input class="addForm_input" type="text" placeholder="Введите наименование товара" id="product_name">
        </div>
        <div class="addForm_item">
            <label class="addForm_label" for="product_description">Описание товара</label>
            <textarea class="addForm_input addForm_textarea" type="text" placeholder="Введите описание товара" id="product_description"></textarea>
        </div>
        <div class="addForm_item">
            <label class="addForm_label" for="product_url">Ссылка на изображение товара</label>
            <input class="addForm_input" type="text" placeholder="Введите ссылку" id="product_url">
        </div> 
        <div class="addForm_item">
            <label class="addForm_label" for="product_price">Цена товара</label>
            <input class="addForm_input" type="text" placeholder="Введите цену" id="product_price">
        </div>     
        <button class="add_btn">Добавить товар</button>                   
    </form>  
</template>

<script>
export default {
    name: 'AddForm' 
}
</script>

<style scoped>
.addForm{
    background: #FFFEFB;
    width: 85%;
    margin: 0 auto;
    padding: 40px 30px;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
}
.addForm_item{
    width: 100%;
    margin-bottom: 16px;
}
.addForm_label{
    margin-bottom: 6px;
    float: left;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 13px;
    color: #49485E;
}
.addForm_input{
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    background: #FFFEFB;
    font-family: 'SourceSansPro-Light';
    padding: 20px 16px;
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 4px;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 15px;
    color: #B4B4B4;
}
.addForm_input:focus {
    outline: none !important;
    border:2px solid rgba(228, 104, 104, 0.3);
    box-shadow: 0 0 10px rgba(228, 104, 104, 0.3);
}
.addForm_textarea{
    display: block;
    height: 108px;
}
.add_btn{
    font-size: 0.9rem;
    background: #EEEEEE;
    border-radius: 10px;
    color:#B4B4B4;
    border: none;
    width: 100%;
    padding: 12px 0;
}
.add_btn:hover{
    font-size: 1rem;
    color: #FF8484;
    transform: scale(1.02);
    border:1px solid rgba(228, 104, 104, 0.5);
    box-shadow: 0 5px 17px 0 rgba(205, 212, 200, 0.6);
    transition: 0.1s ease-in;
}
</style>