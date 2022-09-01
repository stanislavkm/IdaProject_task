<template>
    <div class="adding_layout" :class="[MOBILE_VALUE ? 'layout_leave' :'']">
    <div class="add_header">
        <h1>Добавление товара</h1>
      <div class="menu_toggle" 
            @click="mobileClick()"
           :class="[MOBILE_VALUE ? '_active' :'']">
        <span></span>
      </div>
    </div>    
        <addForm></addForm>
    </div>
    <router-view></router-view>

</template>

<script>
import addForm from '../components/AddForm'
import {mapGetters} from "vuex"
import {mapActions} from "vuex";
export default{
    name: 'MainLayout',
    data (){
        return{
        }
    },
    components: {
        addForm,
    },
    computed:{
    ...mapGetters([
      'MOBILE_VALUE',
    ])        
    },
    methods: {
    mobileClick() {
      this.TOGGLE_MOBILE_VALUE()
    },        
    ...mapActions([
      'TOGGLE_MOBILE_VALUE',
    ]),
    }
}
</script>

<style>
.add_header{
    display: flex;
    justify-content: space-between;
    font-family: 'SourceSansPro-SemiBold';
    font-style: normal;
    color: #3F3F3F;
    font-size: 28px;
    line-height: 35px;
    margin: 15px 10%;
}
.add_header h1{
    font-size: 28px;
}
.adding_layout{
    background:#E5E5E5;
    position: fixed;
    left: 0;
    top: 0;
    width: 380px;
    height: 100%;
}
.layout_leave{
    transform: translateX(-100%);
    transition: all 1s ease-in;
}
</style>