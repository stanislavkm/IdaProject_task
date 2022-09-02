<template>
  <div class="item">
    <div class="item_img">
        <img class="photo" src="./../assets/images/Photo.svg" alt="Изображение товара">
    </div>
    <div class="item_info">
      <div class="item_description">
        <div class="item_title"><h4>Наименование товара</h4></div>
        <div class="item_desc">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
        <div class="item_price">10000 ₽</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CatalogItem',
}
</script>

<style scoped>
.item{
    margin-bottom: 20px;
    width: 100%;
    height: 420px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    text-align: left;
    border-radius: 4px;
}
.item:hover{
    transform: scale(1.03);
    box-shadow: 0 5px 17px 0 rgba(123, 174, 115, 0.4);
    transition: 0.1s ease-in;
}
.item_img{
    text-align: -webkit-center;
    height: 45%;
}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.item_info{
    height: 55%;   
    padding: 10px; 
}
.item_title{
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 20px;
}
.item_desc{
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 45px;
}
.item_price{
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
}
</style>