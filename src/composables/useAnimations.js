import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export function useAnimations() {
  const animateOnScroll = (element, options = {}) => {
    const defaultOptions = {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1,
      ...options
    }

    gsap.fromTo(element, 
      { 
        y: defaultOptions.y, 
        opacity: defaultOptions.opacity 
      },
      {
        y: 0,
        opacity: 1,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  const animateHero = () => {
    const tl = gsap.timeline()
    
    tl.from('.hero .greeting', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    })
    .from('.hero .main-title span', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2
    }, '-=0.3')
    .from('.hero .role', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.hero .description', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    .from('.hero .cta-buttons', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.2')
    .from('.hero .social-links', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.1')
    .from('.hero .profile-image', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
  }

  const animateFloatingShapes = () => {
    gsap.to('.shape', {
      y: -20,
      duration: 3,
      ease: 'power1.inOut',
      stagger: 0.5,
      repeat: -1,
      yoyo: true
    })
  }

  const animateTyping = (element, text, speed = 100) => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)
  }

  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter')
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'))
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        counter.textContent = Math.floor(current)
      }, 16)
    })
  }

  const animateCards = () => {
    gsap.fromTo('.card', 
      { 
        y: 50, 
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.card',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  const animateProjectCards = () => {
    gsap.fromTo('.project-card', 
      { 
        y: 60, 
        opacity: 0,
        rotationY: 15
      },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  const animateContactForm = () => {
    gsap.fromTo('.contact-item', 
      { 
        x: -30, 
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.contact-item',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  const initAnimations = () => {
    // Animate hero section on page load
    animateHero()
    
    // Animate floating shapes
    animateFloatingShapes()
    
    // Animate cards
    animateCards()
    
    // Animate project cards
    animateProjectCards()
    
    // Animate contact form
    animateContactForm()
    
    // Animate counters if they exist
    animateCounters()
  }

  return {
    animateOnScroll,
    animateHero,
    animateFloatingShapes,
    animateTyping,
    animateCounters,
    animateCards,
    animateProjectCards,
    animateContactForm,
    initAnimations
  }
}
