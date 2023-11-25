const { createApp } = Vue

  createApp({
    data() {
      return {
            libros:[],
            url:'https://luciatassi.pythonanywhere.com/libros',
            error:false,
            cargando:true
        }
    },
    methods:{
        fetchdata(url){
            fetch(url)
                .then(resp => resp.json())
                .then(data =>{
                    this.libros = data;  
                    this.cargando = false;   
                }) 
                .catch(e => {
                    console.error(e);
                    this.error = true;
                })
        },
        eliminar(idLibro){
            const url = 'https://luciatassi.pythonanywhere.com/libros/'+ idLibro;
            var opciones = {
                method: 'DELETE',
            }
            fetch(url, opciones)
            .then(res => res.json())
            .then(res => {
                location.reload();
            })
        }
    },
    created(){
        this.fetchdata(this.url)
    }
  }).mount('#app')