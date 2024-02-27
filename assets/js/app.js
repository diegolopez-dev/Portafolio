'use strict'

// Selecciones para Barra de navegación hamburguesa

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Cerrar el menú de hamburguesa cuando se hace click en un enlace  

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#to-up");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Carrusel con glider
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrusel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carrusel__indicadores',
		arrows: {
			prev: '.carrusel__anterior',
			next: '.carrusel__siguiente'
		},
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
			  }
			},{
			  breakpoint: 480,
			  settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
			  }
			}
		]
	});
});

// Envió de formulario

const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
	event.preventDefault()
	const form = new FormData(this)
	const response = await fetch(this.action, {
		method: this.method,
		body: form, 
		headers: {
			'Accept': 'application/json'
		}
	})
	if (response.ok) {
		this.reset()
		Swal.fire({
			title: "¡GRACIAS!",
			text: "Correo enviado correctamente",
			iconColor: '#ffff00',
			color: '#ffff00',
			background: '#0b0a13',
			icon: "success"
		  });
	}
}