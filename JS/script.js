// Menu Lateral - Versão 1
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

// Função para abrir o menu
menuToggle.addEventListener('click', function () {
    sideMenu.style.width = '250px';
    menuToggle.style.display = 'none';
});

// Função para fechar o menu
closeBtn.addEventListener('click', function () {
    sideMenu.style.width = '0';
    menuToggle.style.display = 'block';
});

// Função para ajustar o menu ao redimensionar a janela
window.addEventListener('resize', function () {
    if (window.innerWidth >= 769) {
        // Quando a largura da janela for maior que 768px
        sideMenu.style.width = '466px';
        menuToggle.style.display = 'none';
    } else {
        // Quando a largura da janela for menor que 769px
        sideMenu.style.width = '0';
        menuToggle.style.display = 'block';
    }
});


// Carrossel Automatico
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000);

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}


// Botão Dia/Noite
const toggleButton = document.getElementById('toggle-theme');
const menuLinks = document.querySelectorAll('.side-menu a');
const body = document.body;

// Função para alternar entre modo claro e escuro
function toggleTheme() {
    // Alterna entre as classes 'dark-mode' e 'light-mode'
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Aplica o tema no menu lateral também
    sideMenu.classList.toggle('dark-mode');
    sideMenu.classList.toggle('light-mode');

    // Aplica o tema nos links do menu lateral
    menuLinks.forEach(link => {
        link.classList.toggle('dark-mode');
        link.classList.toggle('light-mode');
    });

    // Aplica o tema nos botões de Abrir e Fechar o Menu
    menuToggle.classList.toggle('dark-mode');
    menuToggle.classList.toggle('light-mode');
    closeBtn.classList.toggle('dark-mode');
    closeBtn.classList.toggle('light-mode');

    // Salva a preferência do usuário no localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Carrega a preferência do usuário ao carregar a página
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        sideMenu.classList.add('dark-mode');
        sideMenu.classList.remove('light-mode');
        menuLinks.forEach(link => {
            link.classList.add('dark-mode');
            link.classList.remove('light-mode');
        });
        menuToggle.classList.add('dark-mode');
        menuToggle.classList.remove('light-mode');
        closeBtn.classList.add('dark-mode');
        closeBtn.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        sideMenu.classList.add('light-mode');
        sideMenu.classList.remove('dark-mode');
        menuLinks.forEach(link => {
            link.classList.add('light-mode');
            link.classList.remove('dark-mode');
        });
        menuToggle.classList.add('light-mode');
        menuToggle.classList.remove('dark-mode');
        closeBtn.classList.add('light-mode');
        closeBtn.classList.remove('dark-mode');
    }
}

// Carrega o tema ao carregar a página
loadTheme();

// Adiciona o evento de clique ao botão
toggleButton.addEventListener('click', toggleTheme);