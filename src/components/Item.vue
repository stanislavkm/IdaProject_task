<template>
  <div class="item">
    <div class="item_img">
        <img src="" alt="Изображение товара">
    </div>
    <div class="item_info">
      <div class="item_description">
        <div class="item_title"><h4>Наименование товара</h4></div>
        <div class="item_desc">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
        <div class="item_price">10000 ₽</div>
      </div>
      <div class="item_controller">
        <button class="item_btn">
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ToDoItem',
}
</script>

<style scoped>
.item{
    margin-bottom: 60px;
    width: 100%;
    height: 450px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    text-align: center;
    border-radius: 4px;
    padding: 15px;
}
.item_img{
    height: 33%;
}
.item_info{
    height: 67%;    
}
</style>