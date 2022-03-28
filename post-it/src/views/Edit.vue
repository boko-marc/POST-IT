<template>
    <div class="container">
    <marquee behavior="alternate"><h2>MODIFIEZ VOS POSTS-IT ICI</h2></marquee>
         <form @submit.prevent="Modifier">
             <div class="mb-2" >
                 <label for="title" class="form-label"><h4>Titre</h4></label>
                  <input type="text"  v-model="notes.title" name="title"   class="form-control" id="title" placeholder="Titre du Post-it">
            </div>
            <div class="mb-2">
             <label for="content" class="form-label"><h4>Content of Post</h4></label>
                <textarea  v-model="notes.content"  class="form-control" name="content" id="content" cols="10" rows="10"></textarea>
                    <button type="submit"    class="btn btn-primary">Modifier</button>
            </div>
         </form>
        <router-link to="/"><button type="button" class="btn btn-primary">Retour</button></router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
        title:'',
        content:'',
        id: '',
        notes:[]
    }
},
mounted() {
    this.id = this.$route.params.Id;
  fetch('http://localhost:3000/notes/'+this.id)
  .then(res =>res.json())
  .then(data =>this.notes =data).then(this.title = this.notes.title,this.content =this.notes.content)
  .catch(err=>console.log(err.message))
},
methods :
{
    Modifier()

    {      
        if(confirm('Do you want to modify this post-it?'))
        {
             this.id = this.$route.params.Id
          fetch("http://localhost:3000/notes/"+this.id,
          {
              method:'PUT',
              body :JSON.stringify({
                  title:this.notes.title,
                  content:this.notes.content
              }),
               headers : { 
                   "Content-Type": "application/json" 
                   }
          }).then(response => response.json()).then(data => this.notes = data)
          .catch(err=>console.log(err.message))
          this.$router.push({name :'read' , params:{id:this.notes.id}}) 
        }
       else
       {    alert('Ready!Your post-it is not modify')
           this.$router.push({name :'read' , params:{id:this.notes.id}}) 
       }

    }
}

}

</script>
<style scoped>
.container
{   background-image: linear-gradient(to right,rgba(3055,100,300,6),rgb(255,255,180));
    border-radius: 10px;
    width: 500px;
    height: 600px;
    margin-top: 55px;
}
</style>