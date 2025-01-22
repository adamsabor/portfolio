// Gestion des modules de bilan
document.addEventListener('DOMContentLoaded', () => {
    const bilanHeaders = document.querySelectorAll('.bilan-header');

    // Fonction pour fermer tous les modules
    const closeAllModules = () => {
        bilanHeaders.forEach(header => {
            header.classList.remove('active');
            if (header.nextElementSibling) {
                header.nextElementSibling.classList.remove('active');
            }
        });
    };

    // Gestionnaire de clic pour chaque en-tête de module
    bilanHeaders.forEach(header => {
        header.addEventListener('click', (e) => {
            e.preventDefault();
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');

            // Si le module cliqué est déjà actif, on le ferme
            if (isActive) {
                header.classList.remove('active');
                content.classList.remove('active');
            } else {
                // Sinon, on ferme tous les modules et on ouvre celui-ci
                closeAllModules();
                header.classList.add('active');
                content.classList.add('active');
            }
        });
    });

    // Gestion du menu mobile (si présent dans la page)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Ferme le menu mobile lors du clic sur un lien
        document.querySelectorAll('.nav-menu .menu-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Animation au défilement
    const observeElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.bilan-module').forEach(module => {
            observer.observe(module);
        });
    };

    observeElements();
});