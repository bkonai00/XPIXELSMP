
        // Mobile Navigation Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        const overlay = document.getElementById('overlay');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            overlay.classList.toggle('active');
        });
        
        overlay.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            overlay.classList.remove('active');
        });

        // Page Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        const pageSections = document.querySelectorAll('.page-section');
        const homeLink = document.getElementById('homeLink');

        function showPage(pageId) {
            pageSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === pageId) {
                    section.classList.add('active');
                }
            });
        }

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = link.getAttribute('data-page');
                showPage(pageId);
                mobileNav.classList.remove('open');
                overlay.classList.remove('active');
            });
        });

        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('home');
        });

        // Show home page by default
        window.addEventListener('load', () => {
            showPage('home');
        });

        // Update Modals
        const readMoreBtns = document.querySelectorAll('.read-more');
        const modals = document.querySelectorAll('.modal');
        const closeModalBtns = document.querySelectorAll('.close-modal');

        readMoreBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const modalId = btn.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal');
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });

        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Copy IP to clipboard function
        function copyToClipboard(elementId) {
            const element = document.getElementById(elementId);
            let text = element.textContent;
            
            // For bedrock IP, include the port
            if (elementId === 'bedrock-ip' || elementId === 'java-ip-whyjoin') {
                text = 'play.xpixel.in:28747';
            }
            
            navigator.clipboard.writeText(text).then(() => {
                // Change button text temporarily
                const button = element.nextElementSibling;
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }

        // Add glow effect to navigation on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('header');
            if (window.scrollY > 50) {
                nav.style.boxShadow = '0 4px 20px rgba(255, 51, 102, 0.3)';
            } else {
                nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            }
        });
    