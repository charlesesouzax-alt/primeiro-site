// =========================
// TESTE DE CONEXÃO
// =========================
console.log("JavaScript funcionando");

// =========================
// MENU RESPONSIVO
// =========================

// Seleciona botão do menu
const botaoMenu = document.getElementById("menuToggle");

// Seleciona lista do menu
const menu = document.getElementById("menuLista");

// Verifica se elementos existem
if (botaoMenu && menu) {

  botaoMenu.addEventListener("click", () => {

    // Mostra/esconde menu
    menu.classList.toggle("ativo");

  });

}

// =========================
// TEMA ESCURO
// =========================

// Seleciona botão tema
const botaoTema = document.getElementById("toggleTema");

// Verifica existência
if (botaoTema) {

  botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

  });

}

// =========================
// FORMULÁRIO DE CONTATO
// =========================

// Seleciona formulário
const formulario = document.getElementById("formContato");

// Verifica se existe
if (formulario) {

  formulario.addEventListener("submit", function(evento) {

    // Impede envio real
    evento.preventDefault();

    // Captura valores
    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação
    if (nome === "" || email === "" || mensagem === "") {

      alert("Preencha todos os campos.");

      return;

    }

    // Validação simples email
    if (!email.includes("@") || !email.includes(".")) {

      alert("Digite um e-mail válido.");

      return;

    }

    // Simulação envio
    alert("Mensagem enviada com sucesso!");

    // Limpa formulário
    formulario.reset();

  });

}