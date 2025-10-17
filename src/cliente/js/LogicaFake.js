

async function obtenerUltimoDato(){
    try{
        const response = await fetch('/mediciones');
        const dato = await response.json();
        if(dato.error){
            
        }
    }catch(err){

    }
}