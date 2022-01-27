const contenedor = document.querySelector('.contenedor');
const colores = ['#CB51EE', '#0073BC', '#38B75E', '#DE365C', '#fff'];

const figuras = () => {
  for(let i = 0; i <= 25; i++){
    let figuras = document.createElement('span');
    let seleccion = Math.round(colores.length * Math.random())
    figuras.style.top = innerHeight * Math.random() + 'px';
    figuras.style.left = innerWidth * Math.random() + 'px';
    figuras.style.background = colores[seleccion >= colores.length ? colores - 1 : seleccion];
    contenedor.appendChild(figuras);
    setInterval(() => {
      figuras.style.top = innerHeight * Math.random() + 'px';
      figuras.style.left = innerWidth * Math.random() + 'px';
    }, 5000)
  }
}

figuras();