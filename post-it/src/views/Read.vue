<template>

  <div class="container">
    <div  id="card" v-if="note">
    <router-link to="/"> <img id="im3" @mouseleave="hover_4 =false" @mouseover="hover_4=true"  src="../assets/back.png" alt="retout_img"> </router-link>
    
    <img id="im2" @mouseleave="hover_3 =false" @mouseover="hover_3=true" @click="supprimer()" src="../assets/supprimer.png" alt="deletes_1_img"> 
   <router-link :to="{name:'Edit' , params:{Id:note.id}}"> <img id="im2"  @mouseleave="hover_2 =false" @mouseover="hover_2=true" src="../assets/edit.png" alt="editer_img"></router-link>
  <div class="card-body" >
    <h5 class="card-title">{{note.title}}</h5>
    <p class="card-text">{{note.content}}</p>
    
  </div>
</div>
  
  </div>
</template>

<script>
export default {
  data() {
    
    return {
      hover_2:false,
      hover_3:false,
      hover_4:false,
        id: '',
        note:null
    }
},
mounted() {
    this.id = this.$route.params.id;
  fetch('http://localhost:3000/notes/'+this.id)
  .then(res =>res.json())
  .then(data =>this.note =data)
  .catch(err=>console.log(err.message))
},
methods:
{
  supprimer()
  {
    if(confirm("Do you want to delete this Post-it?"))
    {
      alert("Ready!Votre post sera supprimer!")
      this.id = this.$route.params.id;
      fetch("http://localhost:3000/notes/"+this.id,
      {
        method:'DELETE',
        headers : { 
        "Content-Type": "application/json" 
          }
          }).then(response => response.json()).then(data => this.note = data)
          .catch(err=>console.log(err.message))
          this.$router.push({path:'/'})
    }
    }
  }

}
</script>


<style scoped>
#card 
{   margin: 10px 10px 5px; 
    background-color:pink;
     box-shadow:0px 10px 5px gray;
     width: 700px;
     height: 500px;
     text-align: center;
}
#im2
{
  width: 20px;
  height: 20px;
  margin: 10px 10px 5px; 
}
#im3
{
  width: 20px;
  height: 20px;
  margin: 10px 10px 5px; 
}
</style>
