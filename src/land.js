 // Search functionality
        function performSearch() {
            const searchInput = document.getElementById('searchInput');
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
                // In a real application, this would trigger a search API call
            }
        }

        // Allow Enter key to trigger search
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Newsletter subscription
        function subscribeNewsletter(event) {
            event.preventDefault();
            const emailInput = event.target.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            alert(`Thank you for subscribing with: ${email}`);
            emailInput.value = '';
            // In a real application, this would send the email to a backend service
        }

        // Hero carousel dots functionality
        const dots = document.querySelectorAll('.dot');
        let currentSlide = 0;

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                dots[currentSlide].classList.remove('active');
                dots[index].classList.add('active');
                currentSlide = index;
                // In a real application, this would change the hero content
            });
        });

        // Auto-rotate hero carousel
        setInterval(() => {
            dots[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % dots.length;
            dots[currentSlide].classList.add('active');
        }, 5000);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add to cart functionality (placeholder)
        document.querySelectorAll('.btn-secondary, .btn-primary').forEach(button => {
            if (button.textContent.includes('VIEW')) {
                button.addEventListener('click', () => {
                    alert('Product details would be shown here');
                });
            }
        });

        // Mobile menu toggle
        const menuBtn = document.querySelector('.header-icons .icon-btn:last-child');
        const navMenu = document.querySelector('.nav-menu');
        
        menuBtn.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'none' ? 'flex' : 'none';
        });

        // Responsive menu handling
        function handleResize() {
            if (window.innerWidth > 768) {
                navMenu.style.display = 'flex';
            } else {
                navMenu.style.display = 'none';
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();