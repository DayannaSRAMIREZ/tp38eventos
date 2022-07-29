window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    titulo.addEventListener('mouseover', ({
        target
    }) => {
        target.classList.toggle('fondoRojo')

    })
    let estado= 0; 
 
    let frase= []; 


    let tituloInput = document.querySelector('#titulo')
    tituloInput.addEventListener('keydown', (event) => {

    if(estado===0&& event.key ==="s"){
        frase.push(event.key)
        estado++
    }else{
     
        switch(estado){
            case 1 : 
            if(event.key==="e"&& frase[0]=== "s"){
                frase.push(event.key)
                estado++
            break;
            }
            
            case 2: 
            if(event.key==="c"&& frase[1]=== "e"){
                frase.push(event.key); 
                estado++ 
              break;
              }
            case 3: 
            if(event.key==="r"&& frase[2]=== "c"){
                frase.push(event.key); 
                estado++
              break; 
              }
            case 4 : 
            if(event.key==="e"&& frase[3]=== "r"){
                frase.push(event.key);   
                estado++
              break; 
              }
            case 5: 
            if(event.key==="t"&& frase[4]=== "e"){
                frase.push(event.key); 
                estado++
              break; 
              }
            case 6: 
            if(event.key==="o"&& frase[5]=== "t"){
                estado =0; 
                alert("SECRETO MAGICO!!"); 
                break;
              }
          
            default:
             estado=0;
             break; 
        }

    }
    })
}