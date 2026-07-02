// Lógica de Escassez de Vagas (Contador no Topo)
let vagasAtuais = 7;
const contadorElement = document.getElementById("vagas-counter");
const bannerElement = document.getElementById("top-banner");

function diminuirVagas() {
  if (vagasAtuais > 2) {
    const drop = Math.random() > 0.6 ? 2 : 1;
    vagasAtuais -= drop;
    if (vagasAtuais < 2) vagasAtuais = 2;

    contadorElement.innerText = vagasAtuais;

    // Efeito visual no banner
    bannerElement.classList.replace("bg-red-600", "bg-yellow-500");
    bannerElement.classList.replace("text-white", "text-gray-900");

    setTimeout(() => {
      bannerElement.classList.replace("bg-yellow-500", "bg-red-600");
      bannerElement.classList.replace("text-gray-900", "text-white");
    }, 400);
  }
}

setInterval(() => {
  if (Math.random() > 0.7) diminuirVagas();
}, 10000);

// Lógica das Notificações de Compras (Toast)
const toast = document.getElementById("urgency-toast");
const toastMessage = document.getElementById("toast-message");

const mensajes = [
  "¡Carlos de México acaba de garantizar su acceso!",
  "¡María de Colombia compró ahora mismo!",
  "Quedan poquísimos cupos con los bonos.",
  "¡Juan de Argentina aprovechó la oferta!",
  "¡Sofía de Chile se ha inscrito con éxito!",
  "¡Luis de España acaba de unirse!",
  "¡Ana de Perú garantizó sus bonos!",
  "Corre, la oferta casi se agota.",
  "¡Diego de Ecuador compró el Código Divino!",
  "¡Camila de Uruguay aprovechó la promoción!",
];

function mostrarToast() {
  const textoSorteado = mensajes[Math.floor(Math.random() * mensajes.length)];
  toastMessage.innerText = textoSorteado;

  toast.classList.remove("translate-y-20", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-20", "opacity-0");
  }, 4000);
}

setTimeout(mostrarToast, 8000);
setInterval(mostrarToast, 25000);

// Lógica do Botão Flutuante Mobile (Sticky CTA)
const stickyCta = document.getElementById("sticky-cta");

window.addEventListener("scroll", () => {
  // Mostra o botão após o usuário rolar 500px para baixo (quando o primeiro botão já saiu da tela)
  if (window.scrollY > 500) {
    stickyCta.classList.remove("translate-y-full");
  } else {
    // Esconde o botão se o usuário voltar para o topo
    stickyCta.classList.add("translate-y-full");
  }
});
