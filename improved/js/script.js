// ==========================================
// JETSELECT.NL - INTERACTIVE WIZARD
// ==========================================

// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {
    nl: {
        nav: {
            home: 'Home',
            findJet: 'Vind uw jet',
            contact: 'Contact'
        },
        hero: {
            title: 'Privéjet Kopen',
            subtitle: 'Volledig ontzorgd een privéjet kopen. Snel, discreet en op maat. Wij vinden de perfecte jet voor U.',
            cta: 'Begin uw selectie'
        },
        process: {
            title: 'De perfecte privéjet kopen in 3 stappen',
            step1: {
                title: 'Vul uw wensen in',
                desc: 'Beantwoord enkele vragen over uw reisbehoeften, budget en voorkeuren.'
            },
            step2: {
                title: 'Wij analyseren',
                desc: 'Ons team analyseert uw wensen en zoekt de beste opties uit ons wereldwijde netwerk.'
            },
            step3: {
                title: 'Ontvang aanbiedingen',
                desc: 'Binnen 24 uur ontvangt u een selectie van geschikte privéjets, volledig op maat.'
            }
        },
        benefits: {
            title: 'Waarom een privéjet kopen via JetSelect?',
            item1: 'Toegang tot een wereldwijd netwerk van privéjets',
            item2: 'Deskundige begeleiding tijdens het hele proces',
            item3: 'Transparante prijzen en voorwaarden',
            item4: 'Snelle en discrete service'
        },
        content1: {
            title: 'Kopen van een Privéjet',
            para1: 'Het kopen van een privéjet is een belangrijke investering die zorgvuldige overweging vereist. Bij JetSelect begrijpen we dat elke klant unieke behoeften heeft. Of u nu regelmatig internationale reizen maakt voor zaken, of op zoek bent naar de ultieme vrijheid in privé reizen, wij begeleiden u bij elke stap van het proces.',
            para2: 'Van het selecteren van het juiste vliegtuigtype tot het regelen van alle juridische en technische aspecten - wij zorgen ervoor dat uw aankoop soepel en zorgeloos verloopt.'
        },
        content2: {
            title: 'Privéjet kopen in Nederland',
            para1: 'JetSelect is uw specialist in het kopen van privéjets in Nederland. Met onze uitgebreide ervaring en internationale connecties hebben wij toegang tot de beste privéjets wereldwijd. We werken samen met gerenommeerde fabrikanten en dealers om u de hoogste kwaliteit te garanderen.',
            para2: 'Ons team van experts staat klaar om u te adviseren over alle aspecten van het bezit van een privéjet, inclusief onderhoud, verzekering, en operationele kosten. Wij maken het proces eenvoudig en transparant.'
        },
        wizard: {
            step1: {
                title: 'Hoe ver moet de privéjet kunnen vliegen?',
                desc: 'De vliegafstand bepaalt welk type jet het meest geschikt is voor uw reizen.',
                short: { title: 'Korte afstand', range: 'Tot 2.500 km', detail: 'Ideaal voor Europese reizen' },
                medium: { title: 'Middellange afstand', range: '2.500 – 6.000 km', detail: 'Perfect voor intercontinentale vluchten' },
                long: { title: 'Lange afstand', range: '6.000+ km', detail: 'Voor wereldwijde reizen' }
            },
            step2: {
                title: 'Hoeveel personen moeten er vervoerd worden?',
                desc: 'Het aantal passagiers bepaalt de grootte en capaciteit van de jet.',
                small: { title: '1-5 personen', type: 'Lichte jets', detail: 'Compact en efficiënt' },
                medium: { title: '6-10 personen', type: 'Midsize jets', detail: 'Optimale balans' },
                large: { title: '10+ personen', type: 'Heavy jets', detail: 'Luxe en ruimte' }
            },
            step3: {
                title: 'Wat is de belangrijkste eigenschap?',
                desc: 'Kies wat voor u het meest belangrijk is bij het selecteren van een privéjet.',
                luxury: { title: 'Luxe en comfort', sub: 'Premium ervaring', detail: 'De beste voorzieningen en comfort' },
                speed: { title: 'Snelheid', sub: 'Efficiënte reistijd', detail: 'Maximale snelheid en efficiëntie' },
                cost: { title: 'Kostenbesparing', sub: 'Beste prijs-kwaliteit', detail: 'Optimale waarde voor uw investering' }
            },
            step4: {
                title: 'Welk type start- en landingsbanen gebruikt u meestal?',
                desc: 'De toegang tot verschillende luchthavens bepaalt welke jets geschikt zijn.',
                major: { title: 'Grote luchthavens', sub: 'Internationale hubs', detail: 'Geschikt voor grote jets' },
                regional: { title: 'Regionale luchthavens', sub: 'Midsize faciliteiten', detail: 'Flexibele toegang' },
                remote: { title: 'Afgelegen locaties', sub: 'Korte landingsbanen', detail: 'Turboprops of robuuste jets' }
            },
            step5: {
                title: 'Wat is uw budgetklasse?',
                desc: 'Uw budget helpt ons de meest geschikte opties te vinden.',
                entry: { sub: 'Entry level', detail: 'Lichte jets' },
                mid: { sub: 'Midrange', detail: 'Midsize jets' },
                premium: { sub: 'Premium', detail: 'Heavy jets' },
                ultra: { sub: 'Ultra-premium', detail: 'Ultra-long range jets' }
            },
            form: {
                title: 'Vul uw gegevens in',
                desc: 'We nemen zo snel mogelijk contact met u op met geschikte opties.',
                summaryTitle: 'Uw selectie:',
                rangeLabel: 'Vliegafstand:',
                passengersLabel: 'Aantal passagiers:',
                priorityLabel: 'Prioriteit:',
                runwayLabel: 'Locatietype:',
                budgetLabel: 'Budget:',
                nameLabel: 'Naam *',
                emailLabel: 'E-mail *',
                phoneLabel: 'Telefoon *',
                companyLabel: 'Bedrijf',
                messageLabel: 'Aanvullende opmerkingen',
                submitBtn: 'Verstuur aanvraag'
            },
            results: {
                title: 'Op basis van uw wensen raden wij aan:',
                desc: 'Selecteer een jet om uw aanvraag te starten.',
                skipBtn: 'Doorgaan zonder voorkeur →',
                selectBtn: 'Selecteer deze jet',
                detailsBtn: 'Details bekijken',
                rangeLabel: 'Bereik',
                passengerLabel: 'Passagiers',
                speedLabel: 'Snelheid',
                noMatchTitle: 'Geen exacte match gevonden',
                noMatchDesc: 'Op basis van uw criteria vinden onze adviseurs graag de beste opties voor u.',
                noMatchBtn: 'Stuur uw aanvraag in',
                selectedJetLabel: 'Geselecteerde jet'
            },
            success: {
                title: 'Bedankt voor uw aanvraag!',
                message: 'We hebben uw gegevens ontvangen en nemen binnen 24 uur contact met u op met een selectie van geschikte privéjets.',
                button: 'Nieuwe selectie maken'
            },
            nav: {
                prev: 'Vorige',
                next: 'Volgende'
            }
        },
        contact: {
            title: 'Klaar om uw privéjet te kopen?',
            subtitle: 'Neem vandaag nog contact met ons op en ontdek hoe wij u kunnen helpen bij het vinden van de perfecte privéjet.',
            nameLabel: 'Naam *',
            emailLabel: 'E-mail *',
            phoneLabel: 'Telefoon *',
            companyLabel: 'Bedrijf',
            messageLabel: 'Bericht',
            submitBtn: 'Verstuur bericht'
        },
        footer: {
            tagline: 'Volledig ontzorgd een privéjet kopen. Snel, discreet en op maat.',
            contactTitle: 'Contact',
            infoTitle: 'Informatie',
            about: 'Over ons',
            privacy: 'Privacy Policy',
            terms: 'Algemene Voorwaarden',
            callbackTitle: 'Laat ons u terugbellen',
            callbackName: 'Naam *',
            callbackPhone: 'Telefoon *',
            callbackBtn: 'Bel mij terug',
            copyright: '© 2026 JetSelect.nl - Alle rechten voorbehouden'
        },
        notifications: {
            selectOption: 'Selecteer alstublieft een optie',
            contactSuccess: 'Bedankt voor uw bericht! We nemen spoedig contact met u op.',
            callbackSuccess: 'Bedankt! We bellen u spoedig terug.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            findJet: 'Find your jet',
            contact: 'Contact'
        },
        hero: {
            title: 'Buy a Private Jet',
            subtitle: 'Buy a private jet with complete peace of mind. Fast, discreet, and tailored. We find the perfect jet for you.',
            cta: 'Start your selection'
        },
        process: {
            title: 'Buy the perfect private jet in 3 steps',
            step1: {
                title: 'Fill in your preferences',
                desc: 'Answer a few questions about your travel needs, budget, and preferences.'
            },
            step2: {
                title: 'We analyze',
                desc: 'Our team analyzes your requirements and searches for the best options from our global network.'
            },
            step3: {
                title: 'Receive offers',
                desc: 'Within 24 hours, you will receive a selection of suitable private jets, fully customized.'
            }
        },
        benefits: {
            title: 'Why buy a private jet through JetSelect?',
            item1: 'Access to a worldwide network of private jets',
            item2: 'Expert guidance throughout the entire process',
            item3: 'Transparent pricing and terms',
            item4: 'Fast and discreet service'
        },
        content1: {
            title: 'Buying a Private Jet',
            para1: 'Buying a private jet is a significant investment that requires careful consideration. At JetSelect, we understand that every client has unique needs. Whether you regularly travel internationally for business or are looking for the ultimate freedom in private travel, we guide you through every step of the process.',
            para2: 'From selecting the right aircraft type to handling all legal and technical aspects - we ensure your purchase is smooth and worry-free.'
        },
        content2: {
            title: 'Buying a Private Jet in the Netherlands',
            para1: 'JetSelect is your specialist in buying private jets in the Netherlands. With our extensive experience and international connections, we have access to the best private jets worldwide. We work with renowned manufacturers and dealers to guarantee you the highest quality.',
            para2: 'Our team of experts is ready to advise you on all aspects of private jet ownership, including maintenance, insurance, and operational costs. We make the process simple and transparent.'
        },
        wizard: {
            step1: {
                title: 'How far should the private jet be able to fly?',
                desc: 'The flight range determines which type of jet is most suitable for your travels.',
                short: { title: 'Short range', range: 'Up to 2,500 km', detail: 'Ideal for European travel' },
                medium: { title: 'Medium range', range: '2,500 – 6,000 km', detail: 'Perfect for intercontinental flights' },
                long: { title: 'Long range', range: '6,000+ km', detail: 'For worldwide travel' }
            },
            step2: {
                title: 'How many people need to be transported?',
                desc: 'The number of passengers determines the size and capacity of the jet.',
                small: { title: '1-5 people', type: 'Light jets', detail: 'Compact and efficient' },
                medium: { title: '6-10 people', type: 'Midsize jets', detail: 'Optimal balance' },
                large: { title: '10+ people', type: 'Heavy jets', detail: 'Luxury and space' }
            },
            step3: {
                title: 'What is the most important feature?',
                desc: 'Choose what matters most to you when selecting a private jet.',
                luxury: { title: 'Luxury and comfort', sub: 'Premium experience', detail: 'The best amenities and comfort' },
                speed: { title: 'Speed', sub: 'Efficient travel time', detail: 'Maximum speed and efficiency' },
                cost: { title: 'Cost savings', sub: 'Best value', detail: 'Optimal value for your investment' }
            },
            step4: {
                title: 'What type of runways do you usually use?',
                desc: 'Access to different airports determines which jets are suitable.',
                major: { title: 'Major airports', sub: 'International hubs', detail: 'Suitable for large jets' },
                regional: { title: 'Regional airports', sub: 'Midsize facilities', detail: 'Flexible access' },
                remote: { title: 'Remote locations', sub: 'Short runways', detail: 'Turboprops or robust jets' }
            },
            step5: {
                title: 'What is your budget range?',
                desc: 'Your budget helps us find the most suitable options.',
                entry: { sub: 'Entry level', detail: 'Light jets' },
                mid: { sub: 'Midrange', detail: 'Midsize jets' },
                premium: { sub: 'Premium', detail: 'Heavy jets' },
                ultra: { sub: 'Ultra-premium', detail: 'Ultra-long range jets' }
            },
            form: {
                title: 'Fill in your details',
                desc: 'We will contact you as soon as possible with suitable options.',
                summaryTitle: 'Your selection:',
                rangeLabel: 'Flight range:',
                passengersLabel: 'Number of passengers:',
                priorityLabel: 'Priority:',
                runwayLabel: 'Location type:',
                budgetLabel: 'Budget:',
                nameLabel: 'Name *',
                emailLabel: 'Email *',
                phoneLabel: 'Phone *',
                companyLabel: 'Company',
                messageLabel: 'Additional comments',
                submitBtn: 'Submit request'
            },
            results: {
                title: 'Based on your preferences, we recommend:',
                desc: 'Select a jet to start your request.',
                skipBtn: 'Continue without preference →',
                selectBtn: 'Select this jet',
                detailsBtn: 'View details',
                rangeLabel: 'Range',
                passengerLabel: 'Passengers',
                speedLabel: 'Speed',
                noMatchTitle: 'No exact match found',
                noMatchDesc: 'Our advisors will be happy to find the best options for you based on your criteria.',
                noMatchBtn: 'Submit your request',
                selectedJetLabel: 'Selected jet'
            },
            success: {
                title: 'Thank you for your request!',
                message: 'We have received your details and will contact you within 24 hours with a selection of suitable private jets.',
                button: 'Make new selection'
            },
            nav: {
                prev: 'Previous',
                next: 'Next'
            }
        },
        contact: {
            title: 'Ready to buy your private jet?',
            subtitle: 'Contact us today and discover how we can help you find the perfect private jet.',
            nameLabel: 'Name *',
            emailLabel: 'Email *',
            phoneLabel: 'Phone *',
            companyLabel: 'Company',
            messageLabel: 'Message',
            submitBtn: 'Send message'
        },
        footer: {
            tagline: 'Buy a private jet with complete peace of mind. Fast, discreet, and tailored.',
            contactTitle: 'Contact',
            infoTitle: 'Information',
            about: 'About us',
            privacy: 'Privacy Policy',
            terms: 'Terms and Conditions',
            callbackTitle: 'Let us call you back',
            callbackName: 'Name *',
            callbackPhone: 'Phone *',
            callbackBtn: 'Call me back',
            copyright: '© 2026 JetSelect.nl - All rights reserved'
        },
        notifications: {
            selectOption: 'Please select an option',
            contactSuccess: 'Thank you for your message! We will contact you soon.',
            callbackSuccess: 'Thank you! We will call you back soon.'
        }
    }
};

// ==========================================
// ANIMATION MANAGER
// ==========================================

class AnimationManager {
    constructor() {
        // Luxury brand timing curves
        this.easings = {
            smooth: 'cubic-bezier(0.16, 1, 0.3, 1)', // Framer Motion default
            snappy: 'cubic-bezier(0.4, 0, 0.2, 1)',   // Material Design
            bounce: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
        };

        this.durations = {
            fast: 300,
            normal: 600,
            slow: 900
        };
    }

    init() {
        // Check Motion One availability
        if (typeof motion === 'undefined') {
            console.warn('Motion One not loaded - animations disabled');
            return false;
        }
        // Initialize parallax effect
        this.initParallax();
        return true;
    }

    initParallax() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        let ticking = false;
        const updateParallax = () => {
            const scrolled = window.scrollY;
            const offset = scrolled * 0.5;
            hero.style.transform = `translateY(${offset}px)`;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });
    }

    fadeIn(selector, options = {}) {
        const defaults = {
            opacity: [0, 1],
            transform: ['translateY(20px)', 'translateY(0)']
        };
        const config = {
            duration: options.duration || this.durations.normal / 1000,
            easing: options.easing || this.easings.smooth
        };
        return motion.animate(selector, defaults, config);
    }

    fadeOut(selector, options = {}) {
        const defaults = {
            opacity: [1, 0],
            transform: ['translateY(0)', 'translateY(-20px)']
        };
        const config = {
            duration: options.duration || this.durations.fast / 1000,
            easing: options.easing || this.easings.smooth
        };
        return motion.animate(selector, defaults, config);
    }

    slideIn(selector, options = {}) {
        const defaults = {
            opacity: [0, 1],
            transform: ['translateX(-30px)', 'translateX(0)']
        };
        const config = {
            duration: options.duration || this.durations.normal / 1000,
            easing: options.easing || this.easings.smooth
        };
        return motion.animate(selector, defaults, config);
    }

    scaleSelect(selector, options = {}) {
        const defaults = {
            transform: ['scale(0.95)', 'scale(1)']
        };
        const config = {
            duration: options.duration || this.durations.fast / 1000,
            easing: options.easing || this.easings.snappy
        };
        return motion.animate(selector, defaults, config);
    }

    staggerIn(cards, options = {}) {
        if (!cards || cards.length === 0) return;

        // Convert NodeList to Array if needed
        const cardArray = Array.from(cards);

        // Animate each card with staggered delay
        cardArray.forEach((card, index) => {
            // Skip if already animated
            if (card.dataset.animated === 'true') return;

            const delay = index * (options.staggerDelay || 0.08); // 80ms default

            const defaults = {
                opacity: [0, 1],
                transform: ['translateY(20px)', 'translateY(0)']
            };

            const config = {
                duration: options.duration || this.durations.normal / 1000,
                easing: options.easing || this.easings.smooth,
                delay: delay
            };

            motion.animate(card, defaults, config).finished.then(() => {
                // Mark as animated to prevent re-animation on back navigation
                card.dataset.animated = 'true';
            });
        });
    }

    showSpinner(element) {
        if (!element) return;

        // Check if spinner already exists
        if (element.querySelector('.spinner-overlay')) return;

        // Create spinner overlay
        const overlay = document.createElement('div');
        overlay.className = 'spinner-overlay';
        overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: inherit;
            z-index: 10;
        `;

        // Create inline SVG spinner
        const spinner = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        spinner.setAttribute('width', '20');
        spinner.setAttribute('height', '20');
        spinner.setAttribute('viewBox', '0 0 20 20');
        spinner.style.cssText = `display: block;`;

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '10');
        circle.setAttribute('cy', '10');
        circle.setAttribute('r', '8');
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', '#115A4E'); // Brand teal color
        circle.setAttribute('stroke-width', '2');
        circle.setAttribute('stroke-linecap', 'round');
        circle.setAttribute('stroke-dasharray', '40');
        circle.setAttribute('stroke-dashoffset', '10');

        spinner.appendChild(circle);
        overlay.appendChild(spinner);

        // Ensure element has position relative/absolute
        const elementPosition = window.getComputedStyle(element).position;
        if (elementPosition === 'static') {
            element.style.position = 'relative';
        }

        element.appendChild(overlay);

        // Fade in overlay
        motion.animate(overlay,
            { opacity: [0, 1] },
            { duration: this.durations.fast / 1000, easing: this.easings.smooth }
        );

        // Start continuous rotation
        motion.animate(spinner,
            { transform: ['rotate(0deg)', 'rotate(360deg)'] },
            {
                duration: 1,
                easing: 'linear',
                repeat: Infinity
            }
        );
    }

    hideSpinner(element) {
        if (!element) return;

        const overlay = element.querySelector('.spinner-overlay');
        if (!overlay) return;

        // Fade out and remove
        motion.animate(overlay,
            { opacity: [1, 0] },
            { duration: this.durations.fast / 1000, easing: this.easings.smooth }
        ).finished.then(() => {
            overlay.remove();
        });
    }

    observeScrollReveal() {
        // Select all elements with scroll-reveal class
        const elements = document.querySelectorAll('.scroll-reveal');
        if (!elements || elements.length === 0) return;

        // Set up IntersectionObserver with early trigger
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '-50px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;

                    // Skip if already animated
                    if (element.dataset.animated === 'true') {
                        observer.unobserve(element);
                        return;
                    }

                    // Check if element contains option cards
                    const optionsGrid = element.querySelector('.options-grid');
                    if (optionsGrid) {
                        // Animate cards with stagger
                        const cards = optionsGrid.querySelectorAll('.option-card');
                        if (cards && cards.length > 0) {
                            this.staggerIn(cards, { staggerDelay: 0.08, duration: 0.5 });
                        }
                        // Mark parent as animated
                        element.dataset.animated = 'true';
                    } else {
                        // Animate the section itself with fadeInUp
                        motion.animate(element,
                            {
                                opacity: [0, 1],
                                transform: ['translateY(30px)', 'translateY(0)']
                            },
                            {
                                duration: 0.6,
                                easing: this.easings.smooth
                            }
                        ).finished.then(() => {
                            element.dataset.animated = 'true';
                        });
                    }

                    // Disconnect observer after animation
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Observe all scroll-reveal elements
        elements.forEach(el => observer.observe(el));
    }
}

// ==========================================
// LANGUAGE MANAGER
// ==========================================

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('jetselect-lang') || 'nl';
        this.init();
    }

    init() {
        this.setupLanguageToggle();
        this.applyLanguage(this.currentLang);
    }

    setupLanguageToggle() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('jetselect-lang', lang);
        this.applyLanguage(lang);
        this.updateActiveButton(lang);
    }

    applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.dataset.i18n;
            const translation = this.getNestedTranslation(translations[lang], key);
            if (translation) {
                el.textContent = translation;
            }
        });

        // Handle placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            const translation = this.getNestedTranslation(translations[lang], key);
            if (translation) {
                el.placeholder = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }

    updateActiveButton(lang) {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    getNestedTranslation(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    getCurrentLang() {
        return this.currentLang;
    }
}

// ─── Jet Database ─────────────────────────────────────────────────────────────

const JET_DATABASE = [
    {
        id: 'embraer-phenom-300',
        name: 'Embraer Phenom 300E',
        category: { nl: 'Light Jet', en: 'Light Jet' },
        image: '/images/jets/luxury-jet-close-white.jpg',
        detailUrl: '/vliegtuigen/embraer-phenom-300/',
        specs: { range: 3650, passengers: 6, speed: 834 },
        ranges: ['short', 'medium'],
        passengerGroups: ['1-5', '6-10'],
        priorities: ['speed', 'cost'],
        runways: ['major', 'regional', 'remote'],
        budgets: ['5-10M'],
        highlights: {
            nl: ['Beste klasse snelheid', 'Korte startbaan', 'Zuinig in gebruik'],
            en: ['Best-in-class speed', 'Short runway capable', 'Cost efficient']
        }
    },
    {
        id: 'cessna-citation-xls-plus',
        name: 'Cessna Citation XLS+',
        category: { nl: 'Midsize Jet', en: 'Midsize Jet' },
        image: '/images/jets/private-jet-runway-front.jpg',
        detailUrl: '/vliegtuigen/cessna-citation-xls-plus/',
        specs: { range: 3700, passengers: 8, speed: 832 },
        ranges: ['short', 'medium'],
        passengerGroups: ['6-10'],
        priorities: ['cost', 'speed'],
        runways: ['major', 'regional', 'remote'],
        budgets: ['5-10M', '10-25M'],
        highlights: {
            nl: ['Groot bagageruim', 'Bewezen betrouwbaarheid', 'Uitstekende prijs/kwaliteit'],
            en: ['Large baggage hold', 'Proven reliability', 'Excellent value']
        }
    },
    {
        id: 'cessna-citation-latitude',
        name: 'Cessna Citation Latitude',
        category: { nl: 'Super Midsize Jet', en: 'Super Midsize Jet' },
        image: '/images/jets/luxury-jet-interior-cabin.jpg',
        detailUrl: '/vliegtuigen/cessna-citation-latitude/',
        specs: { range: 4417, passengers: 9, speed: 848 },
        ranges: ['medium', 'long'],
        passengerGroups: ['6-10'],
        priorities: ['luxury', 'cost'],
        runways: ['major', 'regional', 'remote'],
        budgets: ['10-25M'],
        highlights: {
            nl: ['Stand-up cabine', 'Hoog comfort', 'Laag verbruik'],
            en: ['Stand-up cabin', 'High comfort', 'Low operating costs']
        }
    },
    {
        id: 'embraer-legacy-500',
        name: 'Embraer Praetor 500',
        category: { nl: 'Super Midsize Jet', en: 'Super Midsize Jet' },
        image: '/images/jets/white-jet-tarmac-side.jpg',
        detailUrl: '/vliegtuigen/embraer-legacy-500/',
        specs: { range: 5556, passengers: 12, speed: 870 },
        ranges: ['medium', 'long'],
        passengerGroups: ['6-10', '10+'],
        priorities: ['speed', 'luxury'],
        runways: ['major', 'regional', 'remote'],
        budgets: ['10-25M', '25-50M'],
        highlights: {
            nl: ['Intercontinentaal bereik', 'Fly-by-wire', 'Brede cabine'],
            en: ['Intercontinental range', 'Fly-by-wire', 'Wide cabin']
        }
    },
    {
        id: 'gulfstream-g280',
        name: 'Gulfstream G280',
        category: { nl: 'Super Midsize Jet', en: 'Super Midsize Jet' },
        image: '/images/jets/private-jet-field-landing.jpg',
        detailUrl: '/vliegtuigen/gulfstream-g280/',
        specs: { range: 6667, passengers: 10, speed: 900 },
        ranges: ['medium', 'long'],
        passengerGroups: ['6-10', '10+'],
        priorities: ['speed', 'luxury'],
        runways: ['major', 'regional'],
        budgets: ['10-25M', '25-50M'],
        highlights: {
            nl: ['Gulfstream kwaliteit', 'Hoog plafond', 'Indrukwekkend bereik'],
            en: ['Gulfstream quality', 'High cabin ceiling', 'Impressive range']
        }
    },
    {
        id: 'bombardier-challenger-350',
        name: 'Bombardier Challenger 350',
        category: { nl: 'Heavy Jet', en: 'Heavy Jet' },
        image: '/images/jets/executive-airport-terminal.jpg',
        detailUrl: '/vliegtuigen/bombardier-challenger-350/',
        specs: { range: 6483, passengers: 10, speed: 870 },
        ranges: ['long'],
        passengerGroups: ['6-10', '10+'],
        priorities: ['luxury', 'speed'],
        runways: ['major', 'regional'],
        budgets: ['25-50M'],
        highlights: {
            nl: ['Ruime cabine', 'Bombardier luxe', 'Intercontinentaal'],
            en: ['Spacious cabin', 'Bombardier luxury', 'Intercontinental']
        }
    },
    {
        id: 'gulfstream-g550',
        name: 'Gulfstream G550',
        category: { nl: 'Heavy Jet', en: 'Heavy Jet' },
        image: '/images/jets/business-executive-in-jet.jpg',
        detailUrl: '/vliegtuigen/gulfstream-g550/',
        specs: { range: 12500, passengers: 14, speed: 956 },
        ranges: ['long'],
        passengerGroups: ['10+'],
        priorities: ['luxury', 'speed'],
        runways: ['major'],
        budgets: ['25-50M', '50M+'],
        highlights: {
            nl: ['Ultragrote cabine', 'Non-stop intercontinentaal', 'Iconisch ontwerp'],
            en: ['Ultra large cabin', 'Non-stop intercontinental', 'Iconic design']
        }
    },
    {
        id: 'dassault-falcon-8x',
        name: 'Dassault Falcon 8X',
        category: { nl: 'Ultra Long Range', en: 'Ultra Long Range' },
        image: '/images/jets/luxury-jet-interior-cabin.jpg',
        detailUrl: '/vliegtuigen/dassault-falcon-8x/',
        specs: { range: 13334, passengers: 14, speed: 953 },
        ranges: ['long'],
        passengerGroups: ['10+'],
        priorities: ['luxury'],
        runways: ['major', 'regional', 'remote'],
        budgets: ['50M+'],
        highlights: {
            nl: ['3 motoren voor extra veiligheid', 'Korte baan mogelijk', 'Stilste cabine in klasse'],
            en: ['3 engines for extra safety', 'Short field capable', 'Quietest cabin in class']
        }
    },
    {
        id: 'gulfstream-g650',
        name: 'Gulfstream G650ER',
        category: { nl: 'Ultra Long Range', en: 'Ultra Long Range' },
        image: '/images/jets/white-jet-tarmac-side.jpg',
        detailUrl: '/vliegtuigen/gulfstream-g650/',
        specs: { range: 13890, passengers: 14, speed: 978 },
        ranges: ['long'],
        passengerGroups: ['10+'],
        priorities: ['luxury', 'speed'],
        runways: ['major'],
        budgets: ['50M+'],
        highlights: {
            nl: ['Snelste civiele jet', 'Meest gevraagd wereldwijd', 'Non-stop van AMS naar NYC'],
            en: ['Fastest civil jet', 'Most sought-after worldwide', 'Non-stop AMS to NYC']
        }
    },
    {
        id: 'bombardier-global-7500',
        name: 'Bombardier Global 7500',
        category: { nl: 'Ultra Long Range', en: 'Ultra Long Range' },
        image: '/images/jets/private-jet-runway-front.jpg',
        detailUrl: '/vliegtuigen/bombardier-global-7500/',
        specs: { range: 14260, passengers: 14, speed: 956 },
        ranges: ['long'],
        passengerGroups: ['10+'],
        priorities: ['luxury', 'speed'],
        runways: ['major'],
        budgets: ['50M+'],
        highlights: {
            nl: ['Grootste cabine ultra-range', '4 woonruimtes aan boord', 'Langste bereik ter wereld'],
            en: ['Largest ultra-range cabin', '4 living spaces on board', 'Longest range in the world']
        }
    }
];

const ADJACENT_BUDGETS = {
    '5-10M':  ['10-25M'],
    '10-25M': ['5-10M', '25-50M'],
    '25-50M': ['10-25M', '50M+'],
    '50M+':   ['25-50M']
};

function generateRecommendations(selections) {
    const scored = JET_DATABASE.map(jet => {
        let score = 0;
        if (jet.ranges.includes(selections.range))             score += 3;
        if (jet.passengerGroups.includes(selections.passengers)) score += 3;
        if (jet.budgets.includes(selections.budget))           score += 3;
        else if (ADJACENT_BUDGETS[selections.budget]?.some(b => jet.budgets.includes(b))) score += 1;
        if (jet.priorities.includes(selections.priority))     score += 2;
        if (jet.runways.includes(selections.runway))           score += 1;
        return { jet, score };
    });

    const results = scored
        .filter(s => s.score >= 4)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map(s => s.jet);

    // Fallback: relax threshold if nothing matches well
    if (results.length === 0) {
        return scored
            .filter(s => s.score >= 2)
            .sort((a, b) => b.score - a.score)
            .slice(0, 3)
            .map(s => s.jet);
    }

    return results;
}

// ─────────────────────────────────────────────────────────────────────────────

class JetSelector {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.selectedJet = null;
        this.selections = {
            range: null,
            passengers: null,
            priority: null,
            runway: null,
            budget: null
        };

        this.restoreFromStorage();
        this.init();
    }

    restoreFromStorage() {
        try {
            const saved = localStorage.getItem('jetselect-wizard');
            if (!saved) return;
            const { selections, step } = JSON.parse(saved);
            if (selections) this.selections = { ...this.selections, ...selections };
            if (step && step >= 1 && step <= this.totalSteps) {
                this.currentStep = step;
            }
        } catch (e) {
            // ignore corrupt storage
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem('jetselect-wizard', JSON.stringify({
                selections: this.selections,
                step: this.currentStep
            }));
        } catch (e) {}
    }

    clearStorage() {
        try { localStorage.removeItem('jetselect-wizard'); } catch (e) {}
    }

    init() {
        this.setupEventListeners();
        this.showStep(this.currentStep);
        this.updateProgress();
        this.updateNavigationButtons();
        this.restoreCardSelections();
    }

    restoreCardSelections() {
        Object.entries(this.selections).forEach(([key, value]) => {
            if (!value) return;
            const stepNum = Object.keys({ range:1, passengers:2, priority:3, runway:4, budget:5 }
                .valueOf ? { range:1, passengers:2, priority:3, runway:4, budget:5 } : {})
                .find(k => k === key);
            const stepIndex = { range:1, passengers:2, priority:3, runway:4, budget:5 }[key];
            if (!stepIndex) return;
            const step = document.querySelector(`.step-container[data-step="${stepIndex}"]`);
            if (!step) return;
            const card = step.querySelector(`.option-card[data-value="${value}"]`);
            if (card) card.classList.add('selected');
        });
    }

    setupEventListeners() {
        // Option card selections
        const optionCards = document.querySelectorAll('.option-card');
        optionCards.forEach(card => {
            card.addEventListener('click', () => this.handleOptionSelect(card));
        });

        // Navigation buttons
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');

        nextBtn.addEventListener('click', () => this.nextStep());
        prevBtn.addEventListener('click', () => this.prevStep());

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));

        // Form field validation
        this.setupFormValidation();

        // Smooth scroll for CTA button
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (btn.getAttribute('href') === '#selector') {
                    e.preventDefault();
                    this.smoothScrollTo('#selector');
                }
            });
        });

        // Smooth scroll for nav links
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    this.smoothScrollTo(link.getAttribute('href'));
                }
            });
        });
    }

    setupFormValidation() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        const fields = form.querySelectorAll('input, textarea');

        fields.forEach(field => {
            // Validate on blur
            field.addEventListener('blur', () => {
                this.validateField(field);

                // Show checkmark if valid and has value
                if (field.validity.valid && field.value.trim()) {
                    this.showCheckmark(field);
                } else {
                    this.hideCheckmark(field);
                }
            });

            // Clear error on input (don't validate on every keystroke)
            field.addEventListener('input', () => {
                if (field.classList.contains('invalid') && field.validity.valid) {
                    this.clearFieldError(field);
                }

                // Hide checkmark if field becomes empty
                if (!field.value.trim()) {
                    this.hideCheckmark(field);
                }
            });
        });
    }

    validateField(field) {
        const fieldId = field.id;
        const errorElement = document.getElementById(`${fieldId}-error`);
        const lang = window.languageManager.getCurrentLang();

        let errorMessage = '';

        if (!field.validity.valid) {
            if (field.validity.valueMissing) {
                errorMessage = lang === 'nl' ? 'Dit veld is verplicht' : 'This field is required';
            } else if (field.validity.typeMismatch && field.type === 'email') {
                errorMessage = lang === 'nl' ? 'Voer een geldig e-mailadres in' : 'Enter a valid email address';
            } else if (field.validity.tooShort) {
                errorMessage = lang === 'nl' ? `Minimaal ${field.minLength} tekens` : `Minimum ${field.minLength} characters`;
            }

            // Add invalid class and show error
            field.classList.add('invalid');

            if (errorElement) {
                errorElement.textContent = errorMessage;
                errorElement.classList.add('show');

                // Animate error message with Motion One
                if (typeof motion !== 'undefined') {
                    motion.animate(errorElement,
                        { opacity: [0, 1], maxHeight: ['0px', '50px'] },
                        { duration: 0.3, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
                    );
                }
            }

            return false;
        } else {
            this.clearFieldError(field);
            return true;
        }
    }

    clearFieldError(field) {
        const fieldId = field.id;
        const errorElement = document.getElementById(`${fieldId}-error`);

        field.classList.remove('invalid');

        if (errorElement && errorElement.classList.contains('show')) {
            // Animate error message out
            if (typeof motion !== 'undefined') {
                motion.animate(errorElement,
                    { opacity: [1, 0], maxHeight: ['50px', '0px'] },
                    { duration: 0.3, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
                ).finished.then(() => {
                    errorElement.classList.remove('show');
                    errorElement.textContent = '';
                });
            } else {
                errorElement.classList.remove('show');
                errorElement.textContent = '';
            }
        }
    }

    showCheckmark(field) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;

        // Check if checkmark already exists
        let checkmark = formGroup.querySelector('.checkmark');

        if (!checkmark) {
            checkmark = document.createElement('span');
            checkmark.className = 'checkmark';
            checkmark.textContent = '✓';
            formGroup.appendChild(checkmark);
        }

        // Show with animation
        setTimeout(() => {
            checkmark.classList.add('show');

            // Animate with Motion One if available
            if (typeof motion !== 'undefined') {
                motion.animate(checkmark,
                    { scale: [0, 1.2, 1] },
                    { duration: 0.3, easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' }
                );
            }
        }, 10);
    }

    hideCheckmark(field) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;

        const checkmark = formGroup.querySelector('.checkmark');
        if (checkmark) {
            checkmark.classList.remove('show');
        }
    }

    validateAllFields(form) {
        const fields = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        let firstInvalidField = null;

        fields.forEach(field => {
            const fieldValid = this.validateField(field);
            if (!fieldValid) {
                isValid = false;
                if (!firstInvalidField) {
                    firstInvalidField = field;
                }
            }
        });

        return { isValid, firstInvalidField };
    }

    shakeButton(button) {
        if (typeof motion !== 'undefined') {
            motion.animate(button,
                { transform: ['translateX(-10px)', 'translateX(10px)', 'translateX(-10px)', 'translateX(10px)', 'translateX(0)'] },
                { duration: 0.4, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
            );
        }
    }

    handleOptionSelect(card) {
        const step = card.closest('.step-container').dataset.step;
        const value = card.dataset.value;

        // Visual feedback with animation
        const siblings = card.parentElement.querySelectorAll('.option-card');
        siblings.forEach(sibling => sibling.classList.remove('selected'));
        card.classList.add('selected');

        // Animate selection
        window.animationManager.scaleSelect(card);

        // Add click feedback pulse (independent of existing animations)
        if (typeof motion !== 'undefined') {
            motion.animate(card, { scale: [1, 1.05, 1] }, { duration: 0.3, easing: 'ease-out' });
        }

        // Store selection
        const stepKey = this.getStepKey(parseInt(step));
        const wasAlreadySelected = this.selections[stepKey] === value;
        this.selections[stepKey] = value;
        this.saveToStorage();

        // Enable next button
        const nextBtn = document.getElementById('nextBtn');
        nextBtn.disabled = false;

        // Show loading spinner on card if this is a new selection
        if (!wasAlreadySelected) {
            window.animationManager.showSpinner(card);

            // Auto-advance after 400ms loading state
            setTimeout(() => {
                window.animationManager.hideSpinner(card);

                setTimeout(() => {
                    if (this.currentStep < this.totalSteps) {
                        this.nextStep();
                    }
                }, 100); // Small delay after spinner hide for smooth transition
            }, 400);
        }
    }

    getStepKey(step) {
        const keys = {
            1: 'range',
            2: 'passengers',
            3: 'priority',
            4: 'runway',
            5: 'budget'
        };
        return keys[step];
    }

    nextStep() {
        const stepKey = this.getStepKey(this.currentStep);

        // Validate current step has selection (except for step 6 which is the form)
        if (this.currentStep <= this.totalSteps && !this.selections[stepKey]) {
            const lang = window.languageManager.getCurrentLang();
            this.showNotification(translations[lang].notifications.selectOption);
            return;
        }

        // Move to next step
        if (this.currentStep < 8) {
            this.currentStep++;
            this.showStep(this.currentStep);
            this.updateProgress();
            this.updateNavigationButtons();

            if (this.currentStep === 6) {
                this.populateRecommendations();
            }

            if (this.currentStep === 7) {
                this.populateSummary();
            }

            this.smoothScrollTo('#selector', -100);
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.showStep(this.currentStep);
            this.updateProgress();
            this.updateNavigationButtons();
            this.smoothScrollTo('#selector', -100);
        }
    }

    showStep(step) {
        const steps = document.querySelectorAll('.step-container');
        const currentActive = document.querySelector('.step-container.active');
        const newStep = document.querySelector(`.step-container[data-step="${step}"]`);

        if (newStep) {
            // Fade out current step first
            if (currentActive && currentActive !== newStep) {
                window.animationManager.fadeOut(currentActive).finished.then(() => {
                    currentActive.classList.remove('active');
                    // Then fade in new step
                    newStep.classList.add('active');
                    window.animationManager.fadeIn(newStep);

                    // Apply staggered animation to option cards
                    const cards = newStep.querySelectorAll('.option-card');
                    if (cards.length > 0) {
                        window.animationManager.staggerIn(cards);
                    }
                });
            } else {
                // First load - just fade in
                newStep.classList.add('active');
                window.animationManager.fadeIn(newStep);

                // Apply staggered animation to option cards
                const cards = newStep.querySelectorAll('.option-card');
                if (cards.length > 0) {
                    window.animationManager.staggerIn(cards);
                }
            }
        }

        this.updateProgress();
    }

    updateProgress() {
        // Smooth progress bar animation
        const progressFill = document.getElementById('progressFill');
        const progress = Math.min((this.currentStep / this.totalSteps) * 100, 100);
        motion.animate(progressFill,
            { width: `${progress}%` },
            { duration: 0.6, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
        );

        // Update step indicators
        const progressSteps = document.querySelectorAll('.progress-step');
        progressSteps.forEach((step, index) => {
            const stepNumber = index + 1;
            const stepCircle = step.querySelector('.step-circle');

            if (stepNumber < this.currentStep) {
                // Step is completed
                const wasActive = step.classList.contains('active');
                step.classList.add('completed');
                step.classList.remove('active');

                // Add checkmark animation if transitioning from active to completed
                if (wasActive && stepCircle) {
                    this.animateCheckmark(stepCircle);
                }
            } else if (stepNumber === this.currentStep) {
                // Step is active
                const wasAlreadyActive = step.classList.contains('active');
                step.classList.add('active');
                step.classList.remove('completed');

                // Pulse animation on first activation only
                if (!wasAlreadyActive && stepCircle) {
                    this.pulseStep(stepCircle);
                }
            } else {
                step.classList.remove('active', 'completed');
            }
        });
    }

    pulseStep(stepCircle) {
        // Single pulse animation: scale 1 → 1.1 → 1
        motion.animate(stepCircle,
            {
                transform: ['scale(1)', 'scale(1.1)', 'scale(1)']
            },
            {
                duration: 0.6,
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }
        );

        // Add pulsing class for CSS box-shadow animation
        stepCircle.classList.add('pulsing');

        // Remove pulsing class after animation completes
        setTimeout(() => {
            stepCircle.classList.remove('pulsing');
        }, 600);
    }

    animateCheckmark(stepCircle) {
        // Check if checkmark already exists (avoid duplicates)
        if (stepCircle.querySelector('.checkmark-svg')) return;

        // Get the step number element
        const numberSpan = stepCircle.childNodes[0];

        // Fade out the number first
        if (numberSpan) {
            motion.animate(numberSpan,
                { opacity: [1, 0] },
                { duration: 0.2, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
            ).finished.then(() => {
                // Create SVG checkmark (16x16px, white stroke)
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('class', 'checkmark-svg');
                svg.setAttribute('width', '16');
                svg.setAttribute('height', '16');
                svg.setAttribute('viewBox', '0 0 16 16');
                svg.style.cssText = 'position: absolute; opacity: 0;';

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', 'M3 8 L6 11 L13 4');
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', 'white');
                path.setAttribute('stroke-width', '2');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-linejoin', 'round');
                path.setAttribute('stroke-dasharray', '20');
                path.setAttribute('stroke-dashoffset', '20');

                svg.appendChild(path);
                stepCircle.appendChild(svg);

                // Animate checkmark: fade in + stroke draw
                motion.animate(svg,
                    { opacity: [0, 1] },
                    { duration: 0.2, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
                );

                motion.animate(path,
                    { strokeDashoffset: [20, 0] },
                    { duration: 0.4, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
                );
            });
        }
    }

    updateNavigationButtons() {
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');

        // Show/hide prev button
        if (this.currentStep === 1) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'inline-block';
        }

        // Handle next button
        if (this.currentStep === 6) {
            // Recommendations step — user selects via jet cards
            nextBtn.style.display = 'none';
        } else if (this.currentStep === 7) {
            // Contact form — no next button
            nextBtn.style.display = 'none';
        } else if (this.currentStep === 8) {
            // Success screen — hide both
            nextBtn.style.display = 'none';
            prevBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'inline-block';

            // Disable if no selection made
            const stepKey = this.getStepKey(this.currentStep);
            nextBtn.disabled = !this.selections[stepKey];
        }
    }

    populateSummary() {
        const lang = window.languageManager.getCurrentLang();
        const t = translations[lang].wizard;

        const labels = {
            range: {
                short: `${t.step1.short.title} (${t.step1.short.range})`,
                medium: `${t.step1.medium.title} (${t.step1.medium.range})`,
                long: `${t.step1.long.title} (${t.step1.long.range})`
            },
            passengers: {
                '1-5': `${t.step2.small.title} - ${t.step2.small.type}`,
                '6-10': `${t.step2.medium.title} - ${t.step2.medium.type}`,
                '10+': `${t.step2.large.title} - ${t.step2.large.type}`
            },
            priority: {
                luxury: t.step3.luxury.title,
                speed: t.step3.speed.title,
                cost: t.step3.cost.title
            },
            runway: {
                major: t.step4.major.title,
                regional: t.step4.regional.title,
                remote: t.step4.remote.title
            },
            budget: {
                '5-10M': '€5M - €10M',
                '10-25M': '€10M - €25M',
                '25-50M': '€25M - €50M',
                '50M+': '€50M+'
            }
        };

        document.getElementById('summaryRange').textContent =
            labels.range[this.selections.range] || '-';
        document.getElementById('summaryPassengers').textContent =
            labels.passengers[this.selections.passengers] || '-';
        document.getElementById('summaryPriority').textContent =
            labels.priority[this.selections.priority] || '-';
        document.getElementById('summaryRunway').textContent =
            labels.runway[this.selections.runway] || '-';
        document.getElementById('summaryBudget').textContent =
            labels.budget[this.selections.budget] || '-';

        // Show selected jet if one was chosen
        const jetRow = document.getElementById('summaryJetRow');
        if (jetRow) {
            if (this.selectedJet) {
                document.getElementById('summaryJet').textContent = this.selectedJet;
                jetRow.style.display = '';
            } else {
                jetRow.style.display = 'none';
            }
        }
    }

    populateRecommendations() {
        const lang = window.languageManager.getCurrentLang();
        const t = translations[lang].wizard.results;
        const grid = document.getElementById('recommendationsGrid');
        if (!grid) return;

        const jets = generateRecommendations(this.selections);

        if (jets.length === 0) {
            grid.innerHTML = `
                <div class="results-no-match">
                    <h3>${t.noMatchTitle}</h3>
                    <p>${t.noMatchDesc}</p>
                    <button class="cta-button" id="noMatchCta">${t.noMatchBtn}</button>
                </div>`;
            document.getElementById('noMatchCta')?.addEventListener('click', () => {
                this.currentStep = 7;
                this.showStep(7);
                this.updateProgress();
                this.updateNavigationButtons();
                this.populateSummary();
                this.smoothScrollTo('#selector', -100);
            });
            return;
        }

        grid.innerHTML = jets.map(jet => `
            <div class="jet-card" data-jet-id="${jet.id}">
                <div class="jet-card-image">
                    <img src="${jet.image}" alt="${jet.name}" loading="lazy">
                    <span class="jet-category-badge">${jet.category[lang] || jet.category.nl}</span>
                </div>
                <div class="jet-card-body">
                    <h3 class="jet-name">${jet.name}</h3>
                    <div class="jet-specs">
                        <div class="jet-spec">
                            <span class="jet-spec-value">${jet.specs.range.toLocaleString()} km</span>
                            <span class="jet-spec-label">${t.rangeLabel}</span>
                        </div>
                        <div class="jet-spec">
                            <span class="jet-spec-value">${jet.specs.passengers}</span>
                            <span class="jet-spec-label">${t.passengerLabel}</span>
                        </div>
                        <div class="jet-spec">
                            <span class="jet-spec-value">${jet.specs.speed} km/h</span>
                            <span class="jet-spec-label">${t.speedLabel}</span>
                        </div>
                    </div>
                    <div class="jet-highlights">
                        ${jet.highlights[lang].map(h => `<span class="highlight-tag">${h}</span>`).join('')}
                    </div>
                    <div class="jet-actions">
                        <a href="${jet.detailUrl}" class="btn-jet-details" target="_blank">${t.detailsBtn}</a>
                        <button class="btn-jet-select" data-jet-name="${jet.name}">${t.selectBtn}</button>
                    </div>
                </div>
            </div>`).join('');

        // Wire up select buttons
        grid.querySelectorAll('.btn-jet-select').forEach(btn => {
            btn.addEventListener('click', () => {
                const jetName = btn.dataset.jetName;
                this.selectedJet = jetName;

                // Highlight selected card
                grid.querySelectorAll('.jet-card').forEach(c => c.classList.remove('selected'));
                btn.closest('.jet-card').classList.add('selected');

                // Small delay for visual feedback then advance
                setTimeout(() => {
                    this.currentStep = 7;
                    this.showStep(7);
                    this.updateProgress();
                    this.updateNavigationButtons();
                    this.populateSummary();
                    this.smoothScrollTo('#selector', -100);
                }, 300);
            });
        });

        // Wire up skip button
        document.getElementById('skipToForm')?.addEventListener('click', () => {
            this.selectedJet = null;
            this.currentStep = 7;
            this.showStep(7);
            this.updateProgress();
            this.updateNavigationButtons();
            this.populateSummary();
            this.smoothScrollTo('#selector', -100);
        });

        // Stagger card entrance
        setTimeout(() => {
            const cards = grid.querySelectorAll('.jet-card');
            if (cards.length > 0 && window.animationManager) {
                window.animationManager.staggerIn(cards);
            }
        }, 50);
    }

    async handleFormSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const submitButton = form.querySelector('.submit-button');

        // Validate all fields
        const validation = this.validateAllFields(form);

        if (!validation.isValid) {
            // Shake the submit button
            this.shakeButton(submitButton);

            // Focus the first invalid field
            if (validation.firstInvalidField) {
                validation.firstInvalidField.focus();
            }

            return;
        }

        // Disable submit button to prevent double submission
        submitButton.disabled = true;
        submitButton.textContent = 'Verzenden...';

        const formData = new FormData(form);
        const contactData = Object.fromEntries(formData);

        // Prepare data for Supabase
        const jetNote = this.selectedJet ? `Geselecteerde jet: ${this.selectedJet}\n\n` : '';
        const submissionData = {
            // Wizard selections
            aircraft_type: this.selections.priority || null,
            passenger_count: this.selections.passengers || null,
            range: this.selections.range || null,
            budget: this.selections.budget || null,
            timeline: this.selections.runway || null,

            // Contact info
            name: contactData.name,
            email: contactData.email,
            phone: contactData.phone || null,
            company: contactData.company || null,
            notes: jetNote + (contactData.message || '') || null,

            // Metadata
            ...getSubmissionMetadata()
        };

        console.log('Form submitted:', submissionData);

        try {
            // Save to Supabase
            const { data, error } = await supabaseClient
                .from('wizard_submissions')
                .insert([submissionData])
                .select();

            if (error) throw error;

            console.log('Saved to Supabase:', data);

            // Show success message
            this.clearStorage();
            this.currentStep = 8;
            this.showStep(8);
            this.updateNavigationButtons();
            this.smoothScrollTo('#selector', -100);

            // Trigger success screen animation
            this.animateSuccessScreen();

        } catch (error) {
            console.error('Error saving to Supabase:', error);
            this.showNotification('Er is een fout opgetreden. Probeer het opnieuw.', 'error');

            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Versturen';
        }
    }

    animateSuccessScreen() {
        // Check Motion One availability
        if (typeof motion === 'undefined') {
            console.warn('Motion One not loaded - success animation disabled');
            return;
        }

        // Get elements
        const successIcon = document.querySelector('.success-icon');
        const heading = document.querySelector('[data-step="8"] .step-title');
        const message = document.querySelector('[data-step="8"] .step-description');
        const button = document.querySelector('[data-step="8"] .cta-button');

        if (!successIcon || !heading || !message || !button) {
            console.warn('Success screen elements not found');
            return;
        }

        // Stage 1: Icon reveal with spring bounce (0-600ms)
        motion.animate(
            successIcon,
            {
                scale: [0, 1.2, 1],
                opacity: [0, 1]
            },
            {
                duration: 0.6,
                easing: 'spring(1, 80, 10, 0)'
            }
        );

        // Stage 2: Heading entrance (starts 300ms)
        motion.animate(
            heading,
            {
                y: [20, 0],
                opacity: [0, 1]
            },
            {
                duration: 0.5,
                easing: [0.16, 1, 0.3, 1],
                delay: 0.3
            }
        );

        // Stage 3: Message text (starts 450ms)
        motion.animate(
            message,
            {
                y: [20, 0],
                opacity: [0, 1]
            },
            {
                duration: 0.5,
                easing: [0.16, 1, 0.3, 1],
                delay: 0.45
            }
        );

        // Stage 4: Button (starts 600ms)
        motion.animate(
            button,
            {
                scale: [0.8, 1],
                opacity: [0, 1]
            },
            {
                duration: 0.5,
                easing: [0.16, 1, 0.3, 1],
                delay: 0.6
            }
        );

        // Stage 5: Confetti effect (starts 200ms, during icon animation)
        this.createConfetti(successIcon);

        // After animation completes (~1.1s), add pulse class for continuous animation
        setTimeout(() => {
            successIcon.classList.add('pulse');
        }, 1100);
    }

    createConfetti(iconElement) {
        const dotCount = 10;
        const colors = ['#115A4E', '#FA692F']; // Teal and orange
        const iconRect = iconElement.getBoundingClientRect();
        const centerX = iconRect.left + iconRect.width / 2;
        const centerY = iconRect.top + iconRect.height / 2;

        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'confetti-dot';
            dot.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: ${colors[i % colors.length]};
                pointer-events: none;
                z-index: 1000;
            `;

            document.body.appendChild(dot);

            // Calculate radial position (360° / dotCount)
            const angle = (i / dotCount) * Math.PI * 2;
            const distance = 60; // px to travel outward
            const translateX = Math.cos(angle) * distance;
            const translateY = Math.sin(angle) * distance;

            // Animate radially outward with fade
            motion.animate(
                dot,
                {
                    x: [0, translateX],
                    y: [0, translateY],
                    opacity: [1, 0],
                    scale: [1, 0.5]
                },
                {
                    duration: 0.8,
                    easing: [0.16, 1, 0.3, 1],
                    delay: 0.2 + (i * 0.03) // Stagger by 30ms
                }
            ).finished.then(() => {
                // Clean up after animation completes
                dot.remove();
            });
        }
    }

    showNotification(message, type = 'warning') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        const colors = {
            success: '#28a745',
            error: '#ff4444',
            warning: '#ff9800'
        };

        notification.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: ${colors[type] || colors.warning};
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideDown 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    smoothScrollTo(selector, offset = 0) {
        const element = document.querySelector(selector);
        if (element) {
            const targetPosition = element.offsetTop + offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language manager first
    window.languageManager = new LanguageManager();

    // Initialize animation manager
    const animationManager = new AnimationManager();
    animationManager.init();
    window.animationManager = animationManager;

    // Initialize scroll reveal animations
    animationManager.observeScrollReveal();

    // Initialize jet selector
    const jetSelector = new JetSelector();

    // Handle standalone contact form
    const standaloneForm = document.getElementById('standaloneContactForm');
    if (standaloneForm) {
        standaloneForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            console.log('Standalone contact form submitted:', data);

            try {
                // Save to Supabase
                const { error } = await supabaseClient
                    .from('contact_submissions')
                    .insert([{
                        name: data.name,
                        email: data.email,
                        phone: data.phone || null,
                        message: data.message,
                        ...getSubmissionMetadata()
                    }]);

                if (error) throw error;

                // Show success notification
                const lang = window.languageManager.getCurrentLang();
                jetSelector.showNotification(translations[lang].notifications.contactSuccess, 'success');
                standaloneForm.reset();

            } catch (error) {
                console.error('Error saving to Supabase:', error);
                jetSelector.showNotification('Er is een fout opgetreden. Probeer het opnieuw.', 'error');
            }
        });
    }

    // Handle callback form
    const callbackForm = document.getElementById('callbackForm');
    if (callbackForm) {
        callbackForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            console.log('Callback form submitted:', data);

            try {
                // Save to Supabase
                const { error } = await supabaseClient
                    .from('callback_requests')
                    .insert([{
                        name: data.name,
                        phone: data.phone,
                        ...getSubmissionMetadata()
                    }]);

                if (error) throw error;

                // Show success notification
                const lang = window.languageManager.getCurrentLang();
                jetSelector.showNotification(translations[lang].notifications.callbackSuccess, 'success');
                callbackForm.reset();

            } catch (error) {
                console.error('Error saving to Supabase:', error);
                jetSelector.showNotification('Er is een fout opgetreden. Probeer het opnieuw.', 'error');
            }
        });
    }

    // Add scroll effect to header
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
        }

        lastScroll = currentScroll;
    });

    // Add animation to elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe option cards
    const cards = document.querySelectorAll('.option-card');
    cards.forEach(card => observer.observe(card));
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }

    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
