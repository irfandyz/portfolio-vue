import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  
  // Fade in from bottom animation
  const fadeInUp = (selector, options = {}) => {
    const defaultOptions = {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1,
      ...options
    }

    gsap.fromTo(selector, 
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
          trigger: selector,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Fade in from left animation
  const fadeInLeft = (selector, options = {}) => {
    const defaultOptions = {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1,
      ...options
    }

    gsap.fromTo(selector, 
      { 
        x: defaultOptions.x, 
        opacity: defaultOptions.opacity 
      },
      {
        x: 0,
        opacity: 1,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Fade in from right animation
  const fadeInRight = (selector, options = {}) => {
    const defaultOptions = {
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.1,
      ...options
    }

    gsap.fromTo(selector, 
      { 
        x: defaultOptions.x, 
        opacity: defaultOptions.opacity 
      },
      {
        x: 0,
        opacity: 1,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Scale in animation
  const scaleIn = (selector, options = {}) => {
    const defaultOptions = {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.1,
      ...options
    }

    gsap.fromTo(selector, 
      { 
        scale: defaultOptions.scale, 
        opacity: defaultOptions.opacity 
      },
      {
        scale: 1,
        opacity: 1,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Rotate in animation
  const rotateIn = (selector, options = {}) => {
    const defaultOptions = {
      rotation: 180,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.1,
      ...options
    }

    gsap.fromTo(selector, 
      { 
        rotation: defaultOptions.rotation, 
        opacity: defaultOptions.opacity 
      },
      {
        rotation: 0,
        opacity: 1,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Slide in with skew animation
  const slideInSkew = (selector, options = {}) => {
    const defaultOptions = {
      x: -100,
      skewX: 15,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.1,
      ...options
    }

    gsap.fromTo(selector, 
      { 
        x: defaultOptions.x, 
        skewX: defaultOptions.skewX,
        opacity: defaultOptions.opacity 
      },
      {
        x: 0,
        skewX: 0,
        opacity: 1,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Parallax effect
  const parallax = (selector, options = {}) => {
    const defaultOptions = {
      yPercent: -50,
      ease: 'none',
      ...options
    }

    gsap.to(selector, {
      yPercent: defaultOptions.yPercent,
      ease: defaultOptions.ease,
      scrollTrigger: {
        trigger: selector,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }

  // Text reveal animation
  const textReveal = (selector, options = {}) => {
    const defaultOptions = {
      duration: 1,
      ease: 'power2.out',
      stagger: 0.05,
      ...options
    }

    gsap.fromTo(selector, 
      { 
        y: 100,
        opacity: 0,
        rotationX: 90
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Counter animation
  const animateCounter = (selector, targetValue, options = {}) => {
    const defaultOptions = {
      duration: 2,
      ease: 'power2.out',
      ...options
    }

    gsap.fromTo(selector, 
      { 
        innerHTML: 0 
      },
      {
        innerHTML: targetValue,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Staggered card animation
  const staggerCards = (selector, options = {}) => {
    const defaultOptions = {
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.15,
      ...options
    }

    gsap.fromTo(selector, 
      { 
        y: defaultOptions.y, 
        opacity: defaultOptions.opacity,
        scale: defaultOptions.scale
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: defaultOptions.duration,
        ease: defaultOptions.ease,
        stagger: defaultOptions.stagger,
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  }

  // Floating animation
  const floating = (selector, options = {}) => {
    const defaultOptions = {
      y: 20,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      ...options
    }

    gsap.to(selector, {
      y: defaultOptions.y,
      duration: defaultOptions.duration,
      ease: defaultOptions.ease,
      repeat: defaultOptions.repeat,
      yoyo: defaultOptions.yoyo
    })
  }

  // Magnetic effect
  const magnetic = (selector, options = {}) => {
    const defaultOptions = {
      strength: 0.3,
      ...options
    }

    const element = document.querySelector(selector)
    if (!element) return

    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(element, {
        x: x * defaultOptions.strength,
        y: y * defaultOptions.strength,
        duration: 0.3,
        ease: 'power2.out'
      })
    })

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      })
    })
  }

  // Initialize all animations
  const initScrollAnimations = () => {
    // Hero section animations
    fadeInUp('.hero .greeting', { delay: 0.2 })
    fadeInUp('.hero .main-title span', { stagger: 0.2, delay: 0.4 })
    fadeInUp('.hero .role', { delay: 0.6 })
    fadeInUp('.hero .description', { delay: 0.8 })
    fadeInUp('.hero .cta-buttons', { delay: 1 })
    fadeInUp('.hero .social-links', { delay: 1.2 })
    scaleIn('.hero .profile-image', { delay: 0.5 })

    // About section animations
    fadeInUp('.about h2', { delay: 0.2 })
    fadeInLeft('.about .card', { stagger: 0.2, delay: 0.4 })
    fadeInRight('.about .skills-grid', { delay: 0.6 })

    // Projects section animations
    fadeInUp('.projects h2', { delay: 0.2 })
    staggerCards('.project-card', { delay: 0.4 })

    // Services section animations
    fadeInUp('.services h2', { delay: 0.2 })
    staggerCards('.service-card', { delay: 0.4 })

    // Contact section animations
    fadeInUp('.contact h2', { delay: 0.2 })
    fadeInLeft('.contact .card', { stagger: 0.2, delay: 0.4 })
    fadeInRight('.contact .contact-form', { delay: 0.6 })

    // Floating elements
    floating('.floating-shape', { delay: 0.5 })
  }

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    rotateIn,
    slideInSkew,
    parallax,
    textReveal,
    animateCounter,
    staggerCards,
    floating,
    magnetic,
    initScrollAnimations
  }
}
