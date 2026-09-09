console.log("Página de Boca Juniors cargada");

const links = document.querySelectorAll("nav a");

links.forEach(link => {
link.addEventListener("click", function() {
console.log("Página seleccionada: " + link.textContent);
});
});
