<template>
<div class="container"> 
  <h1 class="text-primary">Bienvenue sur notre page des posts-it </h1><br>
  <h1>Laissez des notes ici pour ne plus rien oublier</h1><br>
  <h5><router-link to="add"><img  id="image" src="../assets/plus.jpg" alt="photo-add">Add new post--it</router-link></h5>
    <div v-if="notes.length !==0" class="row">
      <div class="col-lg-3 my-4" v-for="obj in notes" :key="obj.id">
          <div  class="card">
            <div class="card-body">
              <h3 class="card-title">{{obj.title.slice(0,10)}}</h3>
              <p class="card-text">{{obj.content.slice(0, 20)}}</p>
              <router-link  class="btn btn-primary" :to="{name: 'read', params:{id:obj.id}}" >Lire la suite</router-link>
            </div>
          </div>
      </div>
    </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {
      id:'',
      notes:[]
    }
},
mounted() {
  fetch("http://localhost:3000/notes")
  .then(res =>res.json())
  .then(data =>this.notes =data)
  .catch(err=>console.log(err.message))
}

 
}

</script>

<style scoped>
h1
{
  text-align: center;
}
.card
{
  background-color:blueviolet;
  box-shadow:10px 10px 5px gray;
}
#image
{
  width: 25px;
  height: 25px;
 
}
#im2
{
  width: 20px;
  height: 20px;
  justify-content: center;
  
}
</style>