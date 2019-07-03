<template>
<div>
 
<button @click="GoBack">{{phone.name}}</button>
<h1>Phone: {{phone.name}}</h1>
<div id="details">
<p><b>Phone ID:</b> {{phone.id}}</p>
<p><b> Manufacturer:</b> {{phone.manufacturer}}</p>
<p><b>Ram Memory:</b> {{phone.ram}}</p>
<p><b>Internal Memory:</b> {{phone.internal_memory}}</p>
<p><b>CPU:</b> {{phone.cpu}}</p>
<p><b>Back Camera: </b>{{phone.back_camera}}</p>
<p><b>Front Camera:</b> {{phone.front_camera}}</p>
<p><b>GPU: </b>{{phone.gpu}}</p>
<p><b>Battery:</b> {{phone.battery}}</p>
<p><b>Battery Removable:</b> {{phone.battery_removable}}</p>
<p><b>LTE:</b> {{phone.lte}}</P>
<h3><b>Price: </b>{{phone.price}}</h3>


</div>
</div>
</template>

<script>
export default {
      data() {
    return {
   id:0,
   phone:{},
       };
  },
  created(){
this.phone=this.$route.params.phone
  },
  methods:{
     GoBack(){
          this.$router.push('/') 
     }
    
  }
   
 
}
</script>
<style>
body{
  background-color: #3a3b37;
}
p{
  font-size: 20px;
  margin: 20px;

}
h1{
  background-color: aqua;
  width: 100%;
  text-align: center;
  display: absolute;
}
#details{
border:1px solid black;
background-color: whitesmoke;
margin: 5px;
}
h3{
  margin: -50px 0% 0px 800px;
  position: absolute;
  background-color: yellowgreen;
  width: 150px;
  height: 40px;
  text-align: center;
  font-size: 21px;
}
button{
  width: 100px;
  height: 37px;
position: absolute;
}
button:hover{
  background-color: red;
}
</style>
