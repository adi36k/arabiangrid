// ==========================================
// ARABIAN GRID — Premium Animation System
// GSAP + ScrollTrigger + Lenis Smooth Scroll
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lenis smooth scroll
    let lenis;
    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Connect Lenis to GSAP ScrollTrigger
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
        }
    }

    // Register GSAP plugins
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // ==========================================
    // PRELOADER
    // ==========================================
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        const preloaderTl = gsap.timeline();
        
        preloaderTl
            .to('.preloader-logo-mark', {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            })
            .to('.preloader-logo-text', {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: 'power3.out'
            }, '-=0.4')
            .to('.preloader-line', {
                width: '100%',
                duration: 1.2,
                ease: 'power2.inOut'
            }, '-=0.2')
            .to('.preloader', {
                yPercent: -100,
                duration: 1,
                ease: 'power4.inOut',
                delay: 0.3
            })
            .set('.preloader', { display: 'none' })
            .add(() => {
                initPageAnimations();
            });
    } else {
        initPageAnimations();
    }

    function initPageAnimations() {
        // ==========================================
        // NAVBAR ENTRANCE
        // ==========================================
        if (typeof gsap !== 'undefined') {
            gsap.from('.navbar', {
                y: -100,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2
            });

            gsap.from('.nav-links li', {
                y: -20,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.5
            });
        }

        // ==========================================
        // HERO PARALLAX & REVEALS
        // ==========================================
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            // Hero parallax
            gsap.to('.hero-content', {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                y: 150,
                ease: 'none'
            });

            // REMOVED: gsap.to('.hero::after') — GSAP cannot animate CSS pseudo-elements
        }

        // Hero text reveal
        if (typeof gsap !== 'undefined') {
            gsap.from('.hero-label', {
                y: 40,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.6
            });

            gsap.from('.hero h1', {
                y: 60,
                duration: 1,
                ease: 'power3.out',
                delay: 0.8
            });

            gsap.from('.hero-sub', {
                y: 40,
                duration: 0.8,
                ease: 'power3.out',
                delay: 1
            });

            gsap.from('.hero-cta a', {
                y: 30,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 1.2
            });

            gsap.from('.hero-scroll', {
                duration: 1,
                ease: 'power2.out',
                delay: 1.8
            });
        }

        // ==========================================
        // SCROLL-TRIGGERED SECTION REVEALS
        // ==========================================
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            // Section headers
            gsap.utils.toArray('.section-header').forEach(header => {
                gsap.from(header, {
                    scrollTrigger: {
                        trigger: header,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    y: 50,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            });

            // KPI cards with count-up
            gsap.from('.kpi-card', {
                scrollTrigger: {
                    trigger: '.kpi-section',
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                y: 80,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                onComplete: animateCounters
            });

            // Brief cards stagger
            gsap.from('.brief-card', {
                scrollTrigger: {
                    trigger: '.brief-grid',
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                y: 60,
                duration: 0.9,
                stagger: 0.12,
                ease: 'power3.out'
            });

            // Method cards
            gsap.from('.method-card', {
                scrollTrigger: {
                    trigger: '.method-grid',
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                y: 60,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });

            // About teaser
            gsap.from('.teaser-image', {
                scrollTrigger: {
                    trigger: '.about-teaser',
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                x: -60,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.teaser-text > *', {
                scrollTrigger: {
                    trigger: '.about-teaser',
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
                y: 40,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.3
            });

            // CTA section
            gsap.from('.cta-box > *', {
                scrollTrigger: {
                    trigger: '.cta-section',
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                y: 50,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out'
            });

            // Timeline items
            gsap.from('.timeline-item', {
                scrollTrigger: {
                    trigger: '.timeline',
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                x: -40,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });

            // Contact grid
            gsap.from('.contact-info > *', {
                scrollTrigger: {
                    trigger: '.contact-section',
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                x: -40,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out'
            });

            gsap.from('.contact-form-wrapper', {
                scrollTrigger: {
                    trigger: '.contact-section',
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
                x: 40,
                duration: 0.9,
                ease: 'power3.out',
                delay: 0.3
            });

            // Resource cards
            gsap.from('.resource-card', {
                scrollTrigger: {
                    trigger: '.resources-grid',
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                y: 80,
                duration: 0.9,
                stagger: 0.15,
                ease: 'power3.out'
            });

            // Page header
            gsap.from('.page-header h1', {
                y: 60,
                duration: 1,
                ease: 'power3.out',
                delay: 0.3
            });

            gsap.from('.page-header .page-tag', {
                y: 30,
                duration: 0.6,
                ease: 'power3.out',
                delay: 0.5
            });

            gsap.from('.page-intro', {
                y: 30,
                duration: 0.7,
                ease: 'power3.out',
                delay: 0.7
            });

            // Footer reveal
            gsap.from('.footer-grid > *', {
                scrollTrigger: {
                    trigger: '.footer',
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                },
                y: 40,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }
    }

    // ==========================================
    // COUNTER ANIMATION
    // ==========================================
    function animateCounters() {
        const counters = document.querySelectorAll('.kpi-number');
        counters.forEach(counter => {
            const text = counter.textContent;
            const numMatch = text.match(/[\d,]+/);
            if (!numMatch) return;
            
            const target = parseInt(numMatch[0].replace(/,/g, ''));
            const suffix = text.replace(numMatch[0], '');
            const duration = 2000;
            const start = performance.now();
            
            function update(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);
                counter.innerHTML = current.toLocaleString() + '<span class="kpi-unit">' + suffix.replace(/[\d,]+/, '') + '</span>';
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }
            requestAnimationFrame(update);
        });
    }

    // ==========================================
    // 3D TILT HOVER ON CARDS
    // ==========================================
    const tiltCards = document.querySelectorAll('.brief-card, .resource-card, .kpi-card, .method-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            card.style.transition = 'transform 0.1s ease-out';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            card.style.transition = 'transform 0.5s ease-out';
        });
    });

    // ==========================================
    // MAGNETIC BUTTON EFFECT
    // ==========================================
    const magneticBtns = document.querySelectorAll('.btn, .brief-link, .resource-link, .nav-links a');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
            btn.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        });
    });

    // ==========================================
    // CUSTOM CURSOR
    // ==========================================
    const cursor = document.querySelector('.custom-cursor');
    if (cursor && !window.matchMedia('(pointer: coarse)').matches) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.08,
                ease: 'power2.out'
            });
        });

        const interactiveElements = document.querySelectorAll('a, button, .brief-card, .resource-card, .kpi-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-expanded');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-expanded');
            });
        });
    }

    // ==========================================
    // NAVBAR SCROLL EFFECTS
    // ==========================================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            
            if (currentScroll > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
            
            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ==========================================
    // MOBILE NAV TOGGLE
    // ==========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const spans = navToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // ==========================================
    // INTELLIGENCE FILTER
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const briefCards = document.querySelectorAll('.brief-card[data-tags]');
    
    if (filterBtns.length > 0 && briefCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                briefCards.forEach(card => {
                    const tags = card.dataset.tags || '';
                    if (filter === 'all' || tags.includes(filter)) {
                        gsap.to(card, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.4,
                            display: 'flex',
                            ease: 'power2.out'
                        });
                    } else {
                        gsap.to(card, {
                            scale: 0.95,
                            duration: 0.3,
                            display: 'none',
                            ease: 'power2.in'
                        });
                    }
                });
            });
        });
    }

    // ==========================================
    // SMOOTH SCROLL FOR ANCHORS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                if (lenis) {
                    lenis.scrollTo(target, { offset: -80 });
                } else {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ==========================================
    // SEARCH FUNCTIONALITY
    // ==========================================
    const searchIndex = [
        { title: 'Angola: The Renewable Energy Market Most People Are Sleeping On', url: 'intelligence.html#angola', snippet: '16 GW solar potential, 18 GW hydropower, 30% electrification, Law 6/25 regulatory opening.', tags: 'angola solar hydrogen regulatory africa' },
        { title: 'Algeria: RE Capacity, FIT Corrections, and the Hydrogen Infrastructure Play', url: 'intelligence.html#algeria', snippet: '446 MW installed, 2.6 GW under construction, FIT 15.94 DZD/kWh, hydrogen 40 TWh/year by 2040.', tags: 'algeria solar hydrogen regulatory north africa' },
        { title: 'The BESS Surge: Why 2026 Is the Inflection Year for Battery Storage in the Gulf', url: 'intelligence.html', snippet: 'EWEC 1.5 GW Al Ajban tender, Masdar 5 GW pipeline, battery storage GCC.', tags: 'bess battery storage gcc uae saudi qatar oman kuwait' },
        { title: 'Qatar: EPC-Only Solar and the Kahramaa Licensing Gate', url: 'intelligence.html', snippet: 'EPC model, Samsung C&T, Kahramaa Grade A licensing, utility-scale solar Qatar.', tags: 'qatar solar regulatory epc kahramaa' },
        { title: "Saudi Arabia's Hydrogen Corridor: NEOM, SPARK, and the $5B Question", url: 'intelligence.html', snippet: 'NEOM 2.2 GW electrolyser, ACWA Power ammonia offtake, Saudi green hydrogen.', tags: 'saudi arabia ksa hydrogen neom acwa power spark' },
        { title: 'Bahrain Steel 110 MWp: What a Landmark Deal Teaches About C&I Solar in the Gulf', url: 'intelligence.html', snippet: '110 MWp hybrid C&I solar, long-term O&M, Bahrain landmark deal.', tags: 'bahrain solar c&i commercial industrial gcc' },
        { title: 'Angola Renewable Energy Market Primer — PDF Download', url: 'resources.html', snippet: '16-page executive study distilled into 8 slides. PDF carousel download.', tags: 'angola pdf download resource primer africa' },
        { title: 'About Krishna Singh — Chief Business Officer', url: 'about.html', snippet: '14 years in renewable energy, pipeline management, PPA negotiation, MEA markets.', tags: 'about author bio krishna singh cbo gm director' },
        { title: 'Contact — Career Opportunities & Partnerships', url: 'contact.html', snippet: 'Reach out for partnerships, media inquiries, or intelligence questions.', tags: 'contact email linkedin phone dubai uae' },
        { title: 'GCC BESS Tender Tracker — Q2 2026', url: 'resources.html', snippet: 'Active and upcoming battery storage tenders across UAE, Saudi, Qatar, Oman, Kuwait.', tags: 'bess tracker tender gcc uae saudi qatar oman kuwait resource' }
    ];

    const searchToggle = document.querySelector('.search-toggle');
    const searchDropdown = document.querySelector('.nav-search-dropdown');
    const searchInput = document.getElementById('site-search');
    const searchResults = document.getElementById('search-results');

    if (searchToggle && searchDropdown) {
        searchToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            searchDropdown.classList.toggle('active');
            if (searchDropdown.classList.contains('active') && searchInput) {
                searchInput.focus();
            }
        });

        document.addEventListener('click', function(e) {
            if (!searchDropdown.contains(e.target) && e.target !== searchToggle) {
                searchDropdown.classList.remove('active');
            }
        });
    }

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }
            const matches = searchIndex.filter(item => {
                return item.title.toLowerCase().includes(query) ||
                       item.snippet.toLowerCase().includes(query) ||
                       item.tags.toLowerCase().includes(query);
            });
            if (matches.length === 0) {
                searchResults.innerHTML = '<div class="search-no-results">No results found.</div>';
                return;
            }
            searchResults.innerHTML = matches.map(item =>
                `<a href="${item.url}" class="search-result-item">
                    <div class="result-title">${highlight(item.title, query)}</div>
                    <div class="result-snippet">${highlight(item.snippet, query)}</div>
                </a>`
            ).join('');
        });

        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                searchDropdown.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
        });
    }

    function highlight(text, query) {
        const regex = new RegExp('(' + escapeRegExp(query) + ')', 'gi');
        return text.replace(regex, '<mark style="background:rgba(184,150,62,0.3);padding:0 2px;">$1</mark>');
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
});
