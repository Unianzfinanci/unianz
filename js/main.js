// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Alternar ícone do menu
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Adicionar classe ao header ao rolar a página
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animação de depoimentos
    const depoimentos = document.querySelectorAll('.depoimento');
    let currentDepoimento = 0;
    
    function showDepoimento(index) {
        const slider = document.querySelector('.depoimentos-slider');
        const depoimento = depoimentos[index];
        
        if (depoimento) {
            slider.scrollTo({
                left: depoimento.offsetLeft,
                behavior: 'smooth'
            });
        }
    }
    
    // Alternar depoimentos automaticamente
    if (depoimentos.length > 1) {
        setInterval(() => {
            currentDepoimento = (currentDepoimento + 1) % depoimentos.length;
            showDepoimento(currentDepoimento);
        }, 5000);
    }
    
    // Formulário de contato
    const form = document.getElementById('formulario-contato');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores do formulário
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const servico = document.getElementById('servico').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Construir mensagem para WhatsApp
            let whatsappMsg = `Olá, sou ${nome}. Gostaria de saber mais sobre `;
            
            switch(servico) {
                case 'fgts':
                    whatsappMsg += 'antecipação de FGTS';
                    break;
                case 'veiculos':
                    whatsappMsg += 'consórcio de veículos';
                    break;
                case 'consorcio':
                    whatsappMsg += 'consórcio';
                    break;
                case 'emprestimo':
                    whatsappMsg += 'empréstimo';
                    break;
                default:
                    whatsappMsg += 'seus serviços';
            }
            
            if (mensagem) {
                whatsappMsg += `. ${mensagem}`;
            }
            
            // Codificar mensagem para URL
            const encodedMsg = encodeURIComponent(whatsappMsg);
            
            // Redirecionar para WhatsApp
            window.open(`https://wa.me/5575983603488?text=${encodedMsg}`, '_blank');
            
            // Limpar formulário
            form.reset();
            
            // Mostrar mensagem de sucesso
        });
    }
    
    // Máscara para telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.slice(0, 11);
            }
            
            if (value.length > 2) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            }
            
            if (value.length > 10) {
                value = `${value.slice(0, 10)}-${value.slice(10)}`;
            }
            
            e.target.value = value;
        });
    }
    
    // Animação de elementos ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.servico-card, .sobre-text, .sobre-image, .depoimento, .resultado');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar a página
});

// Adicionar placeholders para imagens
window.addEventListener('load', function() { // Adicionado o parêntese e a chave de abertura aqui
    // Placeholder do logotipo
    // const logoImg = document.getElementById('logo');
    // if (logoImg && !logoImg.src.includes('logo-placeholder.png')) {
    //     logoImg.src = 'https://via.placeholder.com/150/D4AF37/000000?text=Unianz';
    // } 
    // Adicionar background para a seção hero
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")';
    }

    // Imagem sobre nós
    const aboutImg = document.querySelector('.sobre-image img');
    if (aboutImg && aboutImg.src.includes('about-placeholder.jpg')) {
        aboutImg.src = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80';
    }
}); // Chave de fechamento da função e do addEventListener
