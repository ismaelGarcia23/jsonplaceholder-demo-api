import axios from "axios";

//aqui se colocara las peticiones de la api (solo logica)

//metodo que me devuelva los posts de la api
const getPosts = async () => {
    try{
        //colocar la peticion HTTP (get, post, put, patch, delete)
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        //la respuesta ya se convierte en un json
        console.log(response);
        return response.data; //data => representa la informacion del endpoint
    }catch(error){
        console.error("error al obtener los datos", error);
    }
}

export { getPosts }

//metodo para crear una publicacion
const createPost = async (data_post) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data_post, // se envía como body JSON automáticamente por axios
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(response.data);
    return response.data; // contiene el nuevo post creado
  } catch (error) {
    console.error("Error al crear el post:", error);
    return null;
  }
};

export { createPost };
// const obtenerPublicaciones = async () => {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "PUT",
//             data: {

//             }
//         }) //get
//         //convierto la respuesta en un json
//         const lista_post = response.json()
//         console.log(lista_post); //[]
        
//     }catch(error){
//         console.error("Error al obtener los post", error)
//     }
// }