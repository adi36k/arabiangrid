document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
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
        
        // Close menu when clicking a link
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
    
    // Intelligence filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const briefCards = document.querySelectorAll('.brief-card[data-tags]');
    
    if (filterBtns.length > 0 && briefCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active state
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter cards
                briefCards.forEach(card => {
                    const tags = card.dataset.tags || '';
                    if (filter === 'all' || tags.includes(filter)) {
                        card.style.display = 'flex';
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.3s ease';
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // ========== SITE SEARCH ==========
    const searchIndex = [
        {
            title: 'Angola: The Renewable Energy Market Most People Are Sleeping On',
            url: 'intelligence.html#angola',
            snippet: '16 GW solar potential, 18 GW hydropower, 30% electrification, Law 6/25 regulatory opening.',
            tags: 'angola solar hydrogen regulatory africa'
        },
        {
            title: 'Algeria: RE Capacity, FIT Corrections, and the Hydrogen Infrastructure Play',
            url: 'intelligence.html#algeria',
            snippet: '446 MW installed, 2.6 GW under construction, FIT 15.94 DZD/kWh, hydrogen 40 TWh/year by 2040.',
            tags: 'algeria solar hydrogen regulatory north africa'
        },
        {
            title: 'The BESS Surge: Why 2026 Is the Inflection Year for Battery Storage in the Gulf',
            url: 'intelligence.html',
            snippet: 'EWEC 1.5 GW Al Ajban tender, Masdar 5 GW pipeline, battery storage GCC.',
            tags: 'bess battery storage gcc uae saudi qatar oman kuwait'
        },
        {
            title: 'Qatar: EPC-Only Solar and the Kahramaa Licensing Gate',
            url: 'intelligence.html',
            snippet: 'EPC model, Samsung C&T, Kahramaa Grade A licensing, utility-scale solar Qatar.',
            tags: 'qatar solar regulatory epc kahramaa'
        },
        {
            title: "Saudi Arabia's Hydrogen Corridor: NEOM, SPARK, and the $5B Question",
            url: 'intelligence.html',
            snippet: 'NEOM 2.2 GW electrolyser, ACWA Power ammonia offtake, Saudi green hydrogen.',
            tags: 'saudi arabia ksa hydrogen neom acwa power spark'
        },
        {
            title: 'Bahrain Steel 110 MWp: What a Landmark Deal Teaches About C&I Solar in the Gulf',
            url: 'intelligence.html',
            snippet: '110 MWp hybrid C&I solar, long-term O&M, Bahrain landmark deal.',
            tags: 'bahrain solar c&i commercial industrial gcc'
        },
        {
            title: 'Angola Renewable Energy Market Primer — PDF Download',
            url: 'resources.html',
            snippet: '16-page executive study distilled into 8 slides. PDF carousel download.',
            tags: 'angola pdf download resource primer africa'
        },
        {
            title: 'About Krishna Singh — Chief Business Officer',
            url: 'about.html',
            snippet: '14 years in renewable energy, pipeline management, PPA negotiation, MEA markets.',
            tags: 'about author bio krishna singh cbo gm director'
        },
        {
            title: 'Contact — Career Opportunities & Partnerships',
            url: 'contact.html',
            snippet: 'Reach out for CBO, GM, Director roles, business partnerships, media inquiries.',
            tags: 'contact email linkedin phone dubai uae'
        },
        {
            title: 'GCC BESS Tender Tracker — Q2 2026',
            url: 'resources.html',
            snippet: 'Active and upcoming battery storage tenders across UAE, Saudi, Qatar, Oman, Kuwait.',
            tags: 'bess tracker tender gcc uae saudi qatar oman kuwait resource'
        }
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
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$\u0026');
    }
});
