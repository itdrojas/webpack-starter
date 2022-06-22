import "../css/componentes.css";
// import webpackLogo from  '../assets/img/webpack-logo.png'


export const saludar = (nombre)=>{
    console.log('Creando etiqueta html');

    const titulo = document.createElement('h1');
    titulo.innerHTML =`Nuestro sitio web se llama ${nombre} !!`;
    titulo.classList = 'colore';
     document.body.append(titulo);

    // console.log(webpackLogo);
    //  const img = document.createElement('img');
    //  img.src = webpackLogo,
    //  img.classList = 'tamano',
    //  document.body.append(img)
}

