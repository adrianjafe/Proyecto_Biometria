
//Esta funcion no funciona, intento fallido de obtener datos con fetch
async function obtenerUltimoDato(){
    try{
        const response = await fetch('/mediciones');
        const dato = await response.json();
        if(dato.error){
            
        }
    }catch(err){

    }
}