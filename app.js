
document.addEventListener('DOMContentLoaded', () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const progress = document.querySelector('.progress');
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            loaderWrapper.classList.add('fade-out');
            setTimeout(() => {
                loaderWrapper.style.display = 'none';
            }, 500);
        } else {
            width += Math.random() * 25;
            if (width > 100) width = 100;
            progress.style.width = width + '%';
        }
    }, 500);
});

particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#C5832B'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.9,
            random: false
        },
        size: {
            value: 4,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#C5832B',
            opacity: 0.7,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

ScrollReveal().reveal('.reveal', {
    delay: 200,
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom'
});




function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; 
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); 











