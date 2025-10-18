 
        // Toggle menu mobile
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('.nav-links');

         document.querySelector('.menu-toggle').onclick = function() {
         document.querySelector('.nav-links').classList.toggle('active');
        };

        // Chiudi menu quando clicco su un link (per mobile)
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 767) {
                    navLinks.classList.remove('active');
                }
            });
        });

        // Smooth scroll già gestito da CSS (scroll-behavior: smooth)

        // Animazione fade-in per gli elementi quando entrano nel viewport
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Osserva tutti i menu items per animarli
        document.querySelectorAll('.menu-item').forEach(item => {
            observer.observe(item);
        });


    
