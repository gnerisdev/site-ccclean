document.addEventListener('DOMContentLoaded', () => {

    const headerHTML = `
        <header class="site-header" role="banner">
            <div class="brand" aria-hidden="false">
                <div class="logo">CLEAN</div>
            </div>
            <div class="menu-container">
                <nav class="main-nav" aria-label="Menu principal">
                    <a href="quem-somos.html">Quem somos</a>
                    <a href="missao-valores.html">Missão e valores</a>
                    <a href="diaristas.html">Diaristas</a>
                    <a href="#">Mensalistas</a>
                    <a href="#">Avaliações</a>
                </nav>
                <div class="scroll-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-chevron-right">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </div>
            </div>
        </header>
    `;

    const footerHTML = `
        <footer class="site-footer" role="contentinfo">
            Av. Lourenço Cabreira, 759 - conj. 5 - São Paulo/SP - CEP 04812-010 - Tel: (11) 96589-3535
        </footer>
    `;

    // Insere o cabeçalho no início do corpo da página
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    // Insere o rodapé no final do corpo da página
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Adiciona a funcionalidade de rolagem do menu
    const mainNav = document.querySelector('.main-nav');
    const scrollArrow = document.querySelector('.scroll-arrow');

    if (mainNav && scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            mainNav.scrollBy({
                left: 150,
                behavior: 'smooth'
            });
        });

        mainNav.addEventListener('scroll', () => {
            if (mainNav.scrollWidth - mainNav.scrollLeft <= mainNav.clientWidth) {
                scrollArrow.style.opacity = '0';
                scrollArrow.style.pointerEvents = 'none';
            } else {
                scrollArrow.style.opacity = '1';
                scrollArrow.style.pointerEvents = 'auto';
            }
        });

        if (mainNav.scrollWidth <= mainNav.clientWidth) {
            scrollArrow.style.opacity = '0';
            scrollArrow.style.pointerEvents = 'none';
        }
    }

    // Adiciona a funcionalidade do botão do WhatsApp
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function () {
            const phone = '5511965893535';
            const msg = encodeURIComponent('Olá! Gostaria de solicitar uma proposta para limpeza comercial.');
            const url = 'https://wa.me/' + phone + '?text=' + msg;
            window.open(url, '_blank');
        });
    }

});