var empanadaPrecioDiv = document.getElementById('empanada-precio')
var alitasPrecioDiv = document.getElementById('alitas-precio')
var papasfritasPrecioDiv = document.getElementById('papasfritas-precio')

var iconoAgregarEmpanada = document.getElementById('icono-agregar-empanada')
var iconoEliminarEmpanada = document.getElementById('icono-eliminar-empanada')
var inputCantidadEmpanada = document.getElementById('empanada-cantidad');
var precioGeneralEmpanada = document.getElementById('empanada-total-precio')

var iconoAgregarAlitas = document.getElementById('icono-agregar-alitas')
var iconoEliminarAlitas = document.getElementById('icono-eliminar-alitas')
var inputCantidadAlitas = document.getElementById('alitas-cantidad')
var precioGeneralAlitas = document.getElementById('alitas-total-precio')

var iconoAgregarPapasfritas = document.getElementById('icono-agregar-papasfritas')
var iconoEliminarPapasfritas = document.getElementById('icono-eliminar-papasfritas')
var inputCantidadPapasfritas = document.getElementById('papasfritas-cantidad')
var precioGeneralPapasfritas = document.getElementById('papasfritas-total-precio')

const preciosEntradas = {
empanada: 20,
alitas: 150,
papasfritas: 80,
}

function mostrarPrecio() {
empanadaPrecioDiv.innerHTML=`$${preciosEntradas.empanada}`
alitasPrecioDiv.innerHTML=`$${preciosEntradas.alitas}`
papasfritasPrecioDiv.innerHTML=`$${preciosEntradas.papasfritas}`
}

mostrarPrecio()

iconoAgregarEmpanada.addEventListener('click', () => {
  inputCantidadEmpanada.value=1
})

iconoEliminarEmpanada.addEventListener('click', () => {
  inputCantidadEmpanada.value=0
})

iconoAgregarAlitas.addEventListener('click', () => {
  inputCantidadAlitas.value=1
})

iconoEliminarAlitas.addEventListener('click', () => {
  inputCantidadAlitas.value=0
})

iconoAgregarPapasfritas.addEventListener('click', () => {
  inputCantidadPapasfritas.value=1
})

iconoEliminarPapasfritas.addEventListener('click', () => {
  inputCantidadPapasfritas.value=0
})

function capturarValorEmpanadas() {
  return parseInt(inputCantidadEmpanada.value)
}

function sumarTotalEmpanadas() {
  conteoEmpanadas = capturarValorEmpanadas()
  if(conteoEmpanadas >= 0) {
    return conteoEmpanadas * preciosEntradas.empanada
  } else {
    return 0
  }
}

setInterval(function mostrarTotalEmpanadas() {
  totalPrecioEmpanadas = sumarTotalEmpanadas()

  if(totalPrecioEmpanadas>0) {
    iconoAgregarEmpanada.classList.add("ocultar")
    iconoEliminarEmpanada.classList.remove("ocultar")
    precioGeneralEmpanada.classList.remove("ocultar-visibilidad")
    precioGeneralEmpanada.innerHTML=`$${totalPrecioEmpanadas}`
  } else {
    iconoAgregarEmpanada.classList.remove("ocultar")
    iconoEliminarEmpanada.classList.add("ocultar")
    precioGeneralEmpanada.classList.add("ocultar-visibilidad")
  }
},1)

function capturarValorAlitas() {
  return parseInt(inputCantidadAlitas.value)
}

function sumarTotalAlitas() {
  conteoAlitas = capturarValorAlitas()
  if(conteoAlitas >= 0) {
    return conteoAlitas * preciosEntradas.alitas
  } else {
    return 0
  }
}

setInterval(function mostrarTotalAlitas() {
  totalPrecioAlitas = sumarTotalAlitas()

  if(totalPrecioAlitas>0) {
    iconoAgregarAlitas.classList.add("ocultar")
    iconoEliminarAlitas.classList.remove("ocultar")
    precioGeneralAlitas.classList.remove("ocultar-visibilidad")
    precioGeneralAlitas.innerHTML=`$${totalPrecioAlitas}`
  } else {
    iconoAgregarAlitas.classList.remove("ocultar")
    iconoEliminarAlitas.classList.add("ocultar")
    precioGeneralAlitas.classList.add("ocultar-visibilidad")
  }
},1)  

function capturarValorPapasfritas() {
  return parseInt(inputCantidadPapasfritas.value)
}

function sumarTotalPapasfritas() {
  conteoPapasfritas = capturarValorPapasfritas()
  if(conteoPapasfritas >= 0) {
    return conteoPapasfritas * preciosEntradas.papasfritas
  } else {
    return 0
  }
}

setInterval(function mostrarTotalPapasfritas() {
  totalPrecioPapasfritas = sumarTotalPapasfritas()

  if(totalPrecioPapasfritas>0) {
    iconoAgregarPapasfritas.classList.add("ocultar")
    iconoEliminarPapasfritas.classList.remove("ocultar")
    precioGeneralPapasfritas.classList.remove("ocultar-visibilidad")
    precioGeneralPapasfritas.innerHTML=`$${totalPrecioPapasfritas}`
  } else {
    iconoAgregarPapasfritas.classList.remove("ocultar")
    iconoEliminarPapasfritas.classList.add("ocultar")
    precioGeneralPapasfritas.classList.add("ocultar-visibilidad")
  }
},1)  