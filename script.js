// Link central do WhatsApp. Troque apenas este valor para atualizar todos os botoes.
const LINK_WHATSAPP = "https://wa.link/zb8n40";

// Aplica o link central a todos os elementos que possuem a classe whatsapp-link.
document.querySelectorAll(".whatsapp-link").forEach((linkWhatsapp) => {
  linkWhatsapp.href = LINK_WHATSAPP;
});

// Elementos usados pelo menu responsivo em telas menores.
const botaoMenu = document.querySelector(".menu-toggle");
const navegacaoPrincipal = document.querySelector(".main-nav");

// Abre ou fecha a navegacao e atualiza os atributos de acessibilidade.
botaoMenu?.addEventListener("click", () => {
  const menuEstaAberto = botaoMenu.getAttribute("aria-expanded") === "true";
  botaoMenu.setAttribute("aria-expanded", String(!menuEstaAberto));
  botaoMenu.setAttribute("aria-label", menuEstaAberto ? "Abrir menu" : "Fechar menu");
  navegacaoPrincipal?.classList.toggle("is-open", !menuEstaAberto);
});

// Fecha o menu depois que uma opcao de navegacao for selecionada.
document.querySelectorAll(".main-nav a").forEach((linkNavegacao) => {
  linkNavegacao.addEventListener("click", () => {
    botaoMenu?.setAttribute("aria-expanded", "false");
    botaoMenu?.setAttribute("aria-label", "Abrir menu");
    navegacaoPrincipal?.classList.remove("is-open");
  });
});

// Observa os elementos com a classe reveal para animar cada bloco ao entrar na tela.
const elementosRevelacao = document.querySelectorAll(".reveal");
const observadorRevelacao = new IntersectionObserver(
  (entradas, observador) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("is-visible");
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.14 },
);

elementosRevelacao.forEach((elemento) => observadorRevelacao.observe(elemento));

// Atualiza automaticamente o ano exibido no rodape.
const anoAtual = document.querySelector("#current-year");
if (anoAtual) anoAtual.textContent = new Date().getFullYear();
