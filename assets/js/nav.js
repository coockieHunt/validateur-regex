const mobileMenuBtn = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');

        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Fermer le menu au clic sur un lien
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });