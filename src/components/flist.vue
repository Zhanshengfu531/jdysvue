<template>
    <div>
       <div class="f-list">
           <a href="">
             <div class="f-img"><img :src="`img/flist/${list.img}`" alt=""></div>
             <div class="f-info">
                <div class="p-title">{{list.title}}</div>
                <div class="p-text">{{list.text}}</div>
             </div>
           </a>
       </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:{img:"72b022a3145cfd3e.jpg",title:"这种画有印痕之美，非常技术派，你见过，但不知道它",text:"我前两天去了798，看到几幅村上隆的版画，老板介绍说，这是丝网版画。两万到两万五一幅。"}
        }
    },
    
}
</script>
<style scoped>
  .f-list{
      width: 590px;
      height: 270px;
      padding: 15px;
      margin: 0 0 10px 10px;
      float: left;
  }
  .f-list a{
     text-decoration: none;
  }
  .f-img{
      width: 560px;
      height: 160px;
      overflow: hidden;
}
  .f-img img{
      width: 560px;
      height: 160px;
}
  .f-info{
        width: 560px;
        height: 70px;
       text-align: left;
  }
  .p-title{
      margin-top: 9px;
      font-size: 18px;
      color: #000;
  }
  .p-text{
      font-size: 14px;
      margin-top: 5px;
      height: 40px;
      color: #9b9b9b;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
  }
</style>