var vm=new Vue({
  el:"#cart",
  data:{  
    shoppingCart:[
      {src:"img/IMG_6581.JPG",name:"卡比寶_戴圍巾的卡比獸",nprice:900,num:1,delprice:900,discount:180,price:720},
      {src:"img/IMG_1533.JPG",name:"卡比狗_會玩車的狗狗",nprice:300,num:1,delprice:300,discount:60,price:240},
      {src:"img/IMG_5670.JPG",name:"戴花圈的狗狗",nprice:500,num:1,delprice:500,discount:100,price:400}  
    ] 
  },
  methods:{
    delItem(index){
      var del=window.confirm("請問是否確定刪除？");
      if(del){
        this.shoppingCart.splice(index,1)
      }     
    }
  },
  computed:{
    total(){
      var totalPrice=0;
      var num=0;
      for(var item of this.shoppingCart){
        if(item.num>0){
          totalPrice+=item.price*item.num;
          num+=item.num*1;
        }        
      }
      return ({totalPrice,num});
    }
  },
  filters:{
    prices:function(val,fix=2){
      val=val.toFixed(fix)
      val=""+val
      return val
    }
  }
})