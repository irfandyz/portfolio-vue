<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const menuOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('home')
const liquidIndicator = ref(null)
const navLinks = ref([])

const toggleMenu = () => { 
  menuOpen.value = !menuOpen.value 
}

const closeMenu = () => { 
  menuOpen.value = false 
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
  
  // Update active section based on scroll position
  const sections = ['home', 'about', 'projects', 'services', 'contact']
  const scrollPosition = window.scrollY + 100
  
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
        activeSection.value = section
        break
      }
    }
  }
}

// Liquid indicator animation
const animateLiquidIndicator = (targetElement) => {
  if (!liquidIndicator.value || !targetElement) return
  
  const targetRect = targetElement.getBoundingClientRect()
  const indicatorRect = liquidIndicator.value.getBoundingClientRect()
  const navbarRect = document.querySelector('.navbar').getBoundingClientRect()
  
  const targetX = targetRect.left + targetRect.width / 2 - navbarRect.left
  const targetY = targetRect.top + targetRect.height / 2 - navbarRect.top
  const targetWidth = targetRect.width + 20
  const targetHeight = targetRect.height + 10
  
  gsap.to(liquidIndicator.value, {
    x: targetX - indicatorRect.width / 2,
    y: targetY - indicatorRect.height / 2,
    width: targetWidth,
    height: targetHeight,
    duration: 0.6,
    ease: "power2.out"
  })
}

// Liquid ripple effect
const createLiquidRipple = (event) => {
  const ripple = document.createElement('div')
  ripple.className = 'liquid-ripple'
  
  const rect = event.currentTarget.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2
  
  ripple.style.width = ripple.style.height = size + 'px'
  ripple.style.left = x + 'px'
  ripple.style.top = y + 'px'
  
  event.currentTarget.appendChild(ripple)
  
  gsap.fromTo(ripple, 
    { scale: 0, opacity: 0.6 },
    { 
      scale: 1, 
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => ripple.remove()
    }
  )
}

// Liquid morphing effect
const morphToLiquid = (element) => {
  gsap.to(element, {
    scaleX: 1.2,
    scaleY: 1.1,
    borderRadius: "25px",
    duration: 0.4,
    ease: "power2.out"
  })
}

const morphToNormal = (element) => {
  gsap.to(element, {
    scaleX: 1,
    scaleY: 1,
    borderRadius: "12px",
    duration: 0.4,
    ease: "power2.out"
  })
}

// Initialize liquid effects
const initLiquidEffects = () => {
  nextTick(() => {
    navLinks.value = document.querySelectorAll('.nav-link')
    
    navLinks.value.forEach((link, index) => {
      // Mouse enter effect
      link.addEventListener('mouseenter', (e) => {
        animateLiquidIndicator(link)
        morphToLiquid(link)
        createLiquidRipple(e)
      })
      
      // Mouse leave effect
      link.addEventListener('mouseleave', () => {
        morphToNormal(link)
      })
      
      // Click effect
      link.addEventListener('click', (e) => {
        createLiquidRipple(e)
      })
    })
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  initLiquidEffects()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled }">
    <!-- Animated background elements -->
    <div class="navbar-bg">
      <div class="bg-shape shape-1"></div>
      <div class="bg-shape shape-2"></div>
      <div class="bg-shape shape-3"></div>
    </div>
    
    <div class="container">
      <!-- Futuristic Logo -->
      <a href="#home" class="brand" @click="closeMenu">
        <div class="logo-container">
          <div class="logo-glow"></div>
          <img class="brand-avatar" src="/profile-new.png" alt="Irfandy Aziz" />
          <div class="logo-ring"></div>
        </div>
        <div class="brand-text">
          <span class="brand-name">Irfandy Aziz</span>
          <span class="brand-title">Fullstack Developer</span>
        </div>
      </a>

      <!-- Navigation Links -->
      <div class="nav-links" :class="{ open: menuOpen }">
        <!-- Liquid Indicator -->
        <div ref="liquidIndicator" class="liquid-indicator"></div>
        
        <a 
          href="#home" 
          class="nav-link" 
          :class="{ active: activeSection === 'home' }"
          @click="closeMenu"
        >
          <span class="nav-icon">🏠</span>
          <span class="nav-text">Home</span>
        </a>
        <a 
          href="#about" 
          class="nav-link" 
          :class="{ active: activeSection === 'about' }"
          @click="closeMenu"
        >
          <span class="nav-icon">👨‍💻</span>
          <span class="nav-text">About</span>
        </a>
        <a 
          href="#projects" 
          class="nav-link" 
          :class="{ active: activeSection === 'projects' }"
          @click="closeMenu"
        >
          <span class="nav-icon">🚀</span>
          <span class="nav-text">Projects</span>
        </a>
        <a 
          href="#services" 
          class="nav-link" 
          :class="{ active: activeSection === 'services' }"
          @click="closeMenu"
        >
          <span class="nav-icon">⚡</span>
          <span class="nav-text">Services</span>
        </a>
        <a 
          href="#contact" 
          class="nav-link" 
          :class="{ active: activeSection === 'contact' }"
          @click="closeMenu"
        >
          <span class="nav-icon">📧</span>
          <span class="nav-text">Contact</span>
        </a>
      </div>

      <!-- CTA Button -->
      <a href="#contact" class="cta-button" @click="closeMenu">
        <span class="cta-text">Let's Talk</span>
        <div class="cta-glow"></div>
      </a>

      <!-- Mobile Menu Button -->
      <button 
        class="mobile-toggle" 
        :class="{ active: menuOpen }"
        @click="toggleMenu" 
        aria-label="Toggle navigation"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-overlay" :class="{ open: menuOpen }" @click="closeMenu"></div>
  </nav>
</template>

<style scoped>
/* Navbar Base */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Dark mode navbar */
@media (prefers-color-scheme: dark) {
  .navbar {
    background: rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .navbar.scrolled {
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
}

/* Animated Background */
.navbar-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--color-primary), var(--color-accent));
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 60px;
  height: 60px;
  top: -30px;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 40px;
  height: 40px;
  top: -20px;
  right: 20%;
  animation-delay: 2s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  top: -40px;
  right: 10%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Container */
.container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Futuristic Logo */
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.brand:hover {
  transform: translateY(-2px);
}

.logo-container {
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-glow {
  position: absolute;
  inset: -5px;
  background: linear-gradient(45deg, var(--color-primary), var(--color-accent));
  border-radius: 50%;
  opacity: 0;
  filter: blur(10px);
  transition: opacity 0.3s ease;
}

.brand:hover .logo-glow {
  opacity: 0.3;
}

.brand-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.brand:hover .brand-avatar {
  transform: scale(1.1);
  border-color: var(--color-primary);
}

.logo-ring {
  position: absolute;
  inset: -8px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--color-primary), var(--color-accent)) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.brand:hover .logo-ring {
  opacity: 1;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.brand-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-heading);
  line-height: 1;
}

.brand-title {
  font-size: 0.75rem;
  color: var(--color-primary);
  font-weight: 500;
  opacity: 0.8;
}

/* Navigation Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
}

/* Liquid Indicator */
.liquid-indicator {
  position: absolute;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 25px;
  opacity: 0.2;
  z-index: 1;
  pointer-events: none;
  filter: blur(1px);
  box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  z-index: 2;
  will-change: transform, border-radius;
}

/* Liquid ripple effect */
.liquid-ripple {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%);
  pointer-events: none;
  z-index: 1;
}

/* Liquid morphing background */
.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  opacity: 0;
  border-radius: inherit;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.nav-link:hover::before {
  opacity: 0.1;
}

/* Liquid shimmer effect */
.nav-link::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
  z-index: 1;
}

.nav-link:hover::after {
  left: 100%;
}

.nav-link:hover {
  color: var(--color-primary);
  transform: translateY(-2px) scale(1.05);
}

.nav-link.active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.nav-link:hover .nav-icon {
  transform: scale(1.3) rotate(5deg);
  filter: drop-shadow(0 0 8px rgba(14, 165, 233, 0.5));
}

.nav-text {
  font-size: 0.9rem;
  z-index: 2;
  transition: all 0.3s ease;
}

.nav-link:hover .nav-text {
  transform: translateX(2px);
}

/* CTA Button */
.cta-button {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
  will-change: transform, border-radius;
}

.cta-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(14, 165, 233, 0.4);
  border-radius: 30px;
}

.cta-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.cta-button:hover .cta-glow {
  left: 100%;
}

/* Liquid wave effect for CTA */
.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.8s ease;
}

.cta-button:hover::before {
  transform: translateX(100%);
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1001;
  overflow: hidden;
  will-change: transform, border-radius;
}

.mobile-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
  border-radius: 12px;
}

.mobile-toggle.active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  transform: scale(1.1);
  border-radius: 12px;
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: var(--color-text);
  margin: 2px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 1px;
  will-change: transform, opacity;
}

.mobile-toggle.active .hamburger-line {
  background: white;
}

.mobile-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.mobile-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Liquid ripple for mobile toggle */
.mobile-toggle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  opacity: 0;
}

.mobile-toggle:active::before {
  width: 100px;
  height: 100px;
  opacity: 1;
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-overlay.open {
  opacity: 1;
  visibility: visible;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .container {
    padding: 1rem 1.5rem;
  }
  
  .nav-links {
    gap: 0.25rem;
  }
  
  .nav-link {
    padding: 0.5rem 0.75rem;
  }
  
  .nav-text {
    display: none;
  }
  
  .nav-icon {
    font-size: 1.2rem;
  }
}

@media (max-width: 768px) {
  .brand-text {
    display: none;
  }
  
  .logo-container {
    width: 40px;
    height: 40px;
  }
  
  .brand-avatar {
    width: 32px;
    height: 32px;
  }
  
  .cta-button {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 640px) {
  .mobile-toggle {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
    transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    overflow: hidden;
  }
  
  .nav-links.open {
    right: 0;
  }
  
  .nav-links.open .liquid-indicator {
    display: none;
  }
  
  .nav-link {
    width: 100%;
    justify-content: flex-start;
    padding: 1rem;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
  }
  
  .nav-link::before {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
    opacity: 0.1;
  }
  
  .nav-link:hover::before {
    opacity: 0.2;
  }
  
  .nav-text {
    display: block;
    font-size: 1rem;
  }
  
  .nav-icon {
    font-size: 1.2rem;
  }
  
  .cta-button {
    display: none;
  }
  
  /* Dark mode mobile */
  @media (prefers-color-scheme: dark) {
    .nav-links {
      background: rgba(0, 0, 0, 0.95);
    }
  }
}
</style>


