<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const isVisible = ref(false)
const buttonRef = ref(null)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

const animateButton = () => {
  if (buttonRef.value) {
    gsap.fromTo(buttonRef.value, 
      { 
        scale: 0, 
        opacity: 0,
        y: 20
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        delay: 0.2
      }
    )
  }
}

const animateHover = () => {
  if (buttonRef.value) {
    gsap.to(buttonRef.value, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const animateLeave = () => {
  if (buttonRef.value) {
    gsap.to(buttonRef.value, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const animateClick = () => {
  if (buttonRef.value) {
    gsap.to(buttonRef.value, {
      scale: 0.9,
      duration: 0.1,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  animateButton()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-0 translate-y-4"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-0 translate-y-4"
  >
    <button
      v-if="isVisible"
      ref="buttonRef"
      @click="scrollToTop"
      @mouseenter="animateHover"
      @mouseleave="animateLeave"
      @mousedown="animateClick"
      class="scroll-to-top-btn"
      aria-label="Scroll to top"
    >
      <!-- Outer Glow -->
      <div class="outer-glow"></div>
      
      <!-- Bubble Background -->
      <div class="bubble-bg">
        <!-- Gradient Overlay -->
        <div class="gradient-overlay"></div>
        
        <!-- Shine Effect -->
        <div class="shine-effect"></div>
      </div>
      
      <!-- Arrow Icon -->
      <svg 
        class="arrow-icon" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2.5" 
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      
      <!-- Ripple Effect -->
      <div class="ripple-effect"></div>
      
      <!-- Floating Particles -->
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

/* Outer Glow */
.outer-glow {
  position: absolute;
  inset: -8px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 50%;
  opacity: 0;
  filter: blur(12px);
  transition: all 0.3s ease;
  z-index: -2;
}

.scroll-to-top-btn:hover .outer-glow {
  opacity: 0.4;
  transform: scale(1.1);
}

/* Bubble Background */
.bubble-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 50%;
  box-shadow: 
    0 8px 25px rgba(14, 165, 233, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
}

.scroll-to-top-btn:hover .bubble-bg {
  box-shadow: 
    0 12px 35px rgba(14, 165, 233, 0.4),
    0 6px 16px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.scroll-to-top-btn:active .bubble-bg {
  transform: scale(0.95);
}

/* Gradient Overlay */
.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    transparent 50%, 
    rgba(255, 255, 255, 0.05) 100%);
  border-radius: 50%;
  transition: all 0.3s ease;
}

/* Shine Effect */
.shine-effect {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, 
    transparent 30%, 
    rgba(255, 255, 255, 0.2) 50%, 
    transparent 70%);
  transform: rotate(-45deg) translateX(-100%);
  transition: transform 0.6s ease;
}

.scroll-to-top-btn:hover .shine-effect {
  transform: rotate(-45deg) translateX(100%);
}

/* Arrow Icon */
.arrow-icon {
  width: 24px;
  height: 24px;
  color: white;
  position: relative;
  z-index: 3;
  transition: all 0.3s ease;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
}

.scroll-to-top-btn:hover .arrow-icon {
  transform: translateY(-2px);
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
}

/* Ripple Effect */
.ripple-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  opacity: 0;
  z-index: 1;
}

.scroll-to-top-btn:active .ripple-effect {
  width: 120px;
  height: 120px;
  opacity: 1;
}

/* Floating Particles */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}

.particle-1 {
  top: 20%;
  left: 20%;
  animation: particle-float 3s ease-in-out infinite;
}

.particle-2 {
  top: 70%;
  right: 20%;
  animation: particle-float 3s ease-in-out infinite 1s;
}

.particle-3 {
  bottom: 20%;
  left: 60%;
  animation: particle-float 3s ease-in-out infinite 2s;
}

@keyframes particle-float {
  0%, 100% { 
    transform: translateY(0px) scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: translateY(-10px) scale(1.2);
    opacity: 1;
  }
}

/* Floating animation */
@keyframes float {
  0%, 100% { 
    transform: translateY(0px); 
  }
  50% { 
    transform: translateY(-5px); 
  }
}

.scroll-to-top-btn {
  animation: float 3s ease-in-out infinite;
}

/* Pulse animation */
@keyframes pulse {
  0%, 100% { 
    transform: scale(1);
  }
  50% { 
    transform: scale(1.05);
  }
}

.scroll-to-top-btn:hover {
  animation: pulse 2s ease-in-out infinite;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .scroll-to-top-btn {
    bottom: 1.5rem;
    left: 1.5rem;
    width: 50px;
    height: 50px;
  }
  
  .arrow-icon {
    width: 20px;
    height: 20px;
  }
  
  .particle {
    width: 3px;
    height: 3px;
  }
}

@media (max-width: 480px) {
  .scroll-to-top-btn {
    bottom: 1rem;
    left: 1rem;
    width: 45px;
    height: 45px;
  }
  
  .arrow-icon {
    width: 18px;
    height: 18px;
  }
  
  .particle {
    width: 2px;
    height: 2px;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .bubble-bg {
    box-shadow: 
      0 8px 25px rgba(14, 165, 233, 0.4),
      0 4px 12px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  
  .scroll-to-top-btn:hover .bubble-bg {
    box-shadow: 
      0 12px 35px rgba(14, 165, 233, 0.5),
      0 6px 16px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }
  
  .outer-glow {
    opacity: 0.2;
  }
  
  .scroll-to-top-btn:hover .outer-glow {
    opacity: 0.5;
  }
}
</style>
