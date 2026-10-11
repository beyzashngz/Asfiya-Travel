
    // Header Scroll Effect
    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Navigation Links 
    document.querySelectorAll('nav a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    //  Search Functionality 
    const searchIcon = document.querySelector('.search-icon');
    searchIcon.addEventListener('click', function () {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search destinations...';
        searchInput.style.cssText = `
                    position: absolute;
                    top: 100%;
                    right: 0;
                    padding: 0.5rem 1rem;
                    border: 1px solid #ddd;
                    border-radius: 20px;
                    outline: none;
                    width: 200px;
                    transition: all 0.3s ease;
                `;

        this.parentElement.style.position = 'relative';
        this.parentElement.appendChild(searchInput);

        searchInput.focus();

        searchInput.addEventListener('blur', function () {
            this.remove();
        });

        searchInput.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                alert('Arama Islemi. Searching for: ' + this.value);
                this.remove();
            }
        });
    });

    // Book Now Button 
    const bookNowBtn = document.querySelector('.book-now');
    bookNowBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Rezervasyon sistemimize yönlendirileceksiniz.');
    });

    // Plan Your Trip Button  
    const planTripBtn = document.querySelector('.cta .btn');
    planTripBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Iletişim formunu doldurmayi unutmayiniz.');
    });
