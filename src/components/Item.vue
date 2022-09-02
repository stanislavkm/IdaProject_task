<template>
  <div class="item"> 
  <button class="delete_btn" @click="removeItem(item_data.name)"><div><img src="./../assets/images/Cart.svg"></div></button>
    <div class="item_img">
        <img class="photo" src="./../assets/images/Photo.svg" alt="Изображение товара">
    </div>
    <div class="item_info">
      <div class="item_description">
        <div class="item_title"><h4>{{item_data.name}}</h4><h4 v-if="!item_data.name">Наименование товара</h4></div>
        <div class="item_desc">{{item_data.description}}<span v-if="!item_data.description">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</span></div>
        <div class="item_price">{{item_data.price}} <span v-if="!item_data.price">10000</span> ₽</div>
        
      </div>
    </div>
  </div> 
</template>

<script>

export default {
  name: 'CatalogItem',
  data (){
    return {
      active: false,
    }
  },
  props:{
    item_data:{
      type: Object,
      default() {
        return{}
      }      
    }
  },
  methods: {
    clickme(){
      alert('Нажата')
    },
    removeItem(name){
      this.$store.dispatch('REMOVE_FROM_ITEMS', name)
    },

  }
}
</script>

<style scoped>
.item{
/*    position: relative;*/
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
    box-shadow: 0 5px 17px 0 rgba(255, 132, 132, 0.3);;
    transition: 0.1s ease-in;
}
.item:hover > button {
  display:block
}
.item > button {
  display:none
}
.delete_btn{
  position: absolute; 
  background: #FF8484;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 32px;
  height: 32px;
  top: -10px;
  right: -10px;
  border: none;
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