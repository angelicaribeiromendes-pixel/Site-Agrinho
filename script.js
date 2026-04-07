// Alterar estilo do header ao rolar a página
const header = document.querySelector('#header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = '0.5rem 0';
        header.style.background = '#ffffff';
    } else {
        header.style.padding = '1rem 0';
    }
});

// Contador de Árvores Poupadas (Animação Simples)
const treeCounter = document.getElementById('tree-counter');
const trigger = document.getElementById('counter-trigger');

function startCounter() {
    let count = 0;
    const target = 15420; // Meta fictícia de árvores
    const speed = 50; // Velocidade da animação

    const updateCount = () => {
        const increment = Math.ceil(target / speed);
        if (count < target) {
            count += increment;
            treeCounter.innerText = count.toLocaleString('pt-BR');
            setTimeout(updateCount, 30);
        } else {
            treeCounter.innerText = target.toLocaleString('pt-BR');
        }
    };
    updateCount();
}

// Inicia o contador quando o usuário clica no botão do Hero ou chega na seção
trigger.addEventListener('click', () => {
    document.getElementById('sustentabilidade').scrollIntoView({ behavior: 'smooth' });
    startCounter();
});

// Smooth Scroll para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
