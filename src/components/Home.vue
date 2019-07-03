<template>
<div>
<span id="btnprev" @click="previus">&#x21a2;</span>
<span id="btnnext" @click="next">&#x21a3;</span>
<div id="head">
<h1>{{Phones[CurrentDevice].name}}</h1>
</div>
<div id="main">
<!--IMG on click go to details component, and i want to show Phone Detail on Details component-->
<router-link :to="{name:'details', params:{phone: Phones[CurrentDevice]}}"> 
<img :src="Phones[CurrentDevice].image" @click.right="remove(CurrentDevice)">
</router-link>
</div>
 <p>Phone: {{CurrentDevice+1}}/{{Phones.length}}</p>

</div>
</template>

<script>
export default {

  data() {
    return {
   Phones:{},
   CurrentDevice:0,
    }
  },
  created(){
this.GetData();
  },
 
  methods:{
    GetData(){
       this.axios({
         method:'GET',
         url:'https://output.jsbin.com/fotokir.json',
         responseType:JSON
       }).then((Response)=>{
         this.Phones=Response.data.phones;
       })
    },   
      GoTo(){
          this.$router.push('/details') 
          
      },
      next(){
        if(this.CurrentDevice===this.Phones.length-1)
        this.CurrentDevice=-1;
        this.CurrentDevice++;
      },
      previus(){
        this.CurrentDevice--;
      },
      remove(index){
        this.Phones.splice(index,1);
             
            }
  }
}
</script>
<style scoped>
span{
  font-size: 50px;
}
#main{
  text-align: center;
  
}
img{
  border: 1px solid black;
  width: 450px;
  height: 500px;
}
#btnprev{
  margin: 30% 12%;
  position: absolute;
}
#btnnext{
  margin: 30% 80%;
    position: absolute;

}
#btnprev:hover{
  color:red;
}
#btnnext:hover{
  color:red;
}
#head{
  display: absolute;
}
p{
  display: absolute;
  margin: -5% 75%;
}

</style>
