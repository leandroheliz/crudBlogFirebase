import {
  eliminarPosteo,
  guardarPost,
  onGetPosteos,
  getPost,
  actualizarPosteo
} from './firebase.js';

const contenedorPosteos = document.getElementById('contenedor-posteos')

const idForm = document.getElementById('id-form');

let posteosEditados = false;

let id = '';

window.addEventListener('DOMContentLoaded', async () => {

  onGetPosteos((querySnapshot) => {

    let html = '';

    querySnapshot.forEach(doc => {
      const posteos = doc.data();
      html += `
      <div class="divPosteos">
      <div class="card sinBg">
  <img src="..." class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title"> <h3>${posteos.titulo}</h3></h5>
    <h6>${posteos.descripcion}</h6>
  </div>
        <div class="card-footer d-flex justify-content-around">
        <button class='btnEditar buttonEditar' data-id="${doc.id}"><i class="fas fa-edit"></i></button>
        <button class='btnEliminar buttonEliminar' data-id="${doc.id}"><i class="fas fa-trash"></i></button>
        </div>
        </div>
     </div>`
    });

    contenedorPosteos.innerHTML = html;

    const btnEliminar = contenedorPosteos.querySelectorAll('.btnEliminar');

    btnEliminar.forEach(btn => {
      btn.addEventListener('click', ({
        target: {
          dataset
        }
      }) => {
        eliminarPosteo(dataset.id)
      })
    })
    const btnEditar = contenedorPosteos.querySelectorAll('.btnEditar');
    btnEditar.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getPost(e.target.dataset.id)
        const paraEditar = doc.data();
        idForm['id-titulo'].value = paraEditar.titulo;
        idForm['id-descripcion'].value = paraEditar.descripcion;
        posteosEditados = true;
        id = doc.id;
        idForm['btn-guardar'].innerText = 'Actualizar';
      })
    })
  });
});

idForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titulo = idForm['id-titulo']
  const descripcion = idForm['id-descripcion']
  if (!posteosEditados) {
    guardarPost(titulo.value, descripcion.value);
  } else {
    actualizarPosteo(id, {
      titulo: titulo.value,
      descripcion: descripcion.value
    });
    posteosEditados = false;
  }
  idForm.reset();
});