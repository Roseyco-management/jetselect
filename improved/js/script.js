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

// Language Manager
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

class JetSelector {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.selections = {
            range: null,
            passengers: null,
            priority: null,
            runway: null,
            budget: null
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateProgress();
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

    handleOptionSelect(card) {
        const step = card.closest('.step-container').dataset.step;
        const value = card.dataset.value;

        // Remove selected class from siblings
        const siblings = card.parentElement.querySelectorAll('.option-card');
        siblings.forEach(sibling => sibling.classList.remove('selected'));

        // Add selected class to clicked card
        card.classList.add('selected');

        // Store selection
        const stepKey = this.getStepKey(parseInt(step));
        this.selections[stepKey] = value;

        // Enable next button
        const nextBtn = document.getElementById('nextBtn');
        nextBtn.disabled = false;

        // Add a slight delay then auto-advance
        setTimeout(() => {
            if (this.currentStep < this.totalSteps) {
                this.nextStep();
            }
        }, 500);
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
        if (this.currentStep < 6) {
            this.currentStep++;
            this.showStep(this.currentStep);
            this.updateProgress();
            this.updateNavigationButtons();

            // If moving to form step, populate summary
            if (this.currentStep === 6) {
                this.populateSummary();
            }

            // Smooth scroll to selector section
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
        // Hide all steps
        const steps = document.querySelectorAll('.step-container');
        steps.forEach(s => s.classList.remove('active'));

        // Show current step
        const currentStepElement = document.querySelector(`.step-container[data-step="${step}"]`);
        if (currentStepElement) {
            currentStepElement.classList.add('active');
        }
    }

    updateProgress() {
        // Update progress bar
        const progressFill = document.getElementById('progressFill');
        const progress = (this.currentStep / this.totalSteps) * 100;
        progressFill.style.width = `${progress}%`;

        // Update step indicators
        const progressSteps = document.querySelectorAll('.progress-step');
        progressSteps.forEach((step, index) => {
            const stepNumber = index + 1;
            if (stepNumber < this.currentStep) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (stepNumber === this.currentStep) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });
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
            nextBtn.style.display = 'none';
        } else if (this.currentStep === 7) {
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
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {
            ...Object.fromEntries(formData),
            selections: this.selections
        };

        // Here you would normally send data to a server
        console.log('Form submitted:', data);

        // Show success message
        this.currentStep = 7;
        this.showStep(7);
        this.updateNavigationButtons();
        this.smoothScrollTo('#selector', -100);

        // In production, you would do something like:
        // fetch('/api/submit', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => {
        //     this.currentStep = 7;
        //     this.showStep(7);
        //     this.updateNavigationButtons();
        //     this.smoothScrollTo('#selector', -100);
        // })
        // .catch(error => {
        //     this.showNotification('Er is een fout opgetreden. Probeer het opnieuw.', 'error');
        // });
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

    // Initialize jet selector
    const jetSelector = new JetSelector();

    // Handle standalone contact form
    const standaloneForm = document.getElementById('standaloneContactForm');
    if (standaloneForm) {
        standaloneForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            console.log('Standalone contact form submitted:', data);

            // Show success notification
            const lang = window.languageManager.getCurrentLang();
            jetSelector.showNotification(translations[lang].notifications.contactSuccess, 'success');
            standaloneForm.reset();
        });
    }

    // Handle callback form
    const callbackForm = document.getElementById('callbackForm');
    if (callbackForm) {
        callbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            console.log('Callback form submitted:', data);

            // Show success notification
            const lang = window.languageManager.getCurrentLang();
            jetSelector.showNotification(translations[lang].notifications.callbackSuccess, 'success');
            callbackForm.reset();
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
