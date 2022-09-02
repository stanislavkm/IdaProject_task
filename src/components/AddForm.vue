<template>
    <Form class="addForm" @submit.prevent="">
        <div class="addForm_item">
            <label class="addForm_label" for="product_name">Наименование товара</label>
            <Field class="addForm_input" v-model="productName" type="text" name="product_name" placeholder="Введите наименование товара" id="product_name" :rules="[isRequired]"/>
        </div>
            <ErrorMessage class="errMessage" name="product_name"/>
        <div class="addForm_item">
            <label class="addForm_label" for="product_description">Описание товара</label>
            <textarea class="addForm_input addForm_textarea" v-model="productDesc" type="text" placeholder="Введите описание товара" id="product_description"></textarea>
        </div>
        <div class="addForm_item">
            <label class="addForm_label" for="product_url">Ссылка на изображение товара</label>
            <Field class="addForm_input" type="text" v-model="productUrl" name="product_url" placeholder="Введите ссылку" id="product_url" :rules="[isRequired]"/>
        </div> 
            <ErrorMessage class="errMessage" name="product_url"/>
        <div class="addForm_item">
            <label class="addForm_label" for="product_price">Цена товара</label>
            <Field class="addForm_input" type="text" v-model="productPrice" name="product_price" placeholder="Введите цену" id="product_price" :rules="[isRequired]"/>
        </div>   
            <ErrorMessage class="errMessage" name="product_price"/>  
        <button class="add_btn" @click="clickme()" :disabled=!productName||!productPrice||!productUrl>Добавить товар</button>                   
    </form>  
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
export default {
  name: 'AddForm',
  data (){
    return {
        productName: '',
        productDesc: '',
        productUrl: '',
        productPrice: '',
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },    
  methods: {
    clickme(){
        alert('Нажали')
    },
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return 'Поле является обязательным';
    },    
  }
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
    margin: 14px 0 6px;
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
    color: #3F3F3F;
}
.addForm_input:focus {
    outline: none !important;
    border:1px solid rgba(123, 174, 115, 0.3);
    box-shadow: 0 0 10px rgba(123, 174, 115, 0.2);
}
.addForm_textarea{
    display: block;
    height: 108px;
}
.add_btn{
    margin-top: 10px;
    font-size: 0.9rem;
    background: #7BAE73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color:#FFFFFF;
    border: none;
    width: 100%;
    padding: 12px 0;
}
.add_btn:hover{
    font-size: 0.95rem;
    color: #FFFFFF;
    transform: scale(1.01);
    border:1px solid #FFFFFF;
    box-shadow: 0 5px 17px 0 #FFFFFF;
    transition: 0.1s ease-in;
}
.add_btn:disabled,
.add_btn[disabled]{
  border: none;
  background-color: #EEEEEE;
  color: #B4B4B4;
}
.errMessage{
    font-size: 0.8rem;
    color:rgba(194, 16, 16, 0.9)
}
</style>