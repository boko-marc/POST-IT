<template>

  <div id="add" class="container" >
  <marquee behavior="alternate"><h2>AJOUTEZ DES POSTS-IT ICI</h2></marquee>
  <router-link to="/"><button type="button" @mouseleave="hover_1 =false" @mouseover="hover_1=true" class="btn btn-primary">Back</button></router-link>
  <span v-if="hover_1">Retour sur la page d'accueil </span>
  <br><br><br>
  <form @submit.prevent="addPost">
  <div class="mb-2" >
  <label for="title" class="form-label"><h4>Titre</h4></label>
  <input type="text" v-model="title" name="title"    minlength="5" required class="form-control" id="title" placeholder="Titre du Post-it">
</div>
<div class="mb-2">
  <label for="content" class="form-label"><h4>Content of Post</h4></label>
  <textarea required  v-model="content" minlength="5" class="form-control" name="content" id="content" cols="10" rows="10"></textarea>
  <button type="submit"  @mouseover="hover=true" @mouseleave="hover =false" class="btn btn-primary">Poster</button>
  <span v-if="hover">Poster vos post-it </span>
</div>
  </form>
  </div> 
  
</template>

<script>
export default {
    data() {
        return {
            hover:false,
            hover_1:false,
            title:'',
            content:'',
            notes:[],
            
        }
    },
    
   methods:
   {
       addPost()
      {

          fetch("http://localhost:3000/notes",
          {
              method:'POST',
              body :JSON.stringify({
                  title:this.title,
                  content:this.content
              }),
               headers : { 
                   "Content-Type": "application/json" 
                   }
          }).then(response => response.json()).then(data => this.notes = data)
          .catch(err=>console.log(err.message))
this.$router.push({path:'/'})      }
   }
}
</script>

<style scoped>
#add
{
 background-image: linear-gradient(to right,rgba(7055,100,300,6),rgb(255,255,180));
    border-radius: 10px;
    width: 500px;
    height: 650px;
    margin-top: 55px;
    
}

</style>



