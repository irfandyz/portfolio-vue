<script setup>
import { ref, onMounted } from 'vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('nav a')
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu)
  })
})
</script>

<template>
  <div id="app" class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <!-- Navigation -->
    <header class="fixed top-0 left-0 right-0 z-50 glass">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a href="#home" class="logo text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            IA
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#services" class="nav-link">Services</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            :class="{ 'bg-neutral-100 dark:bg-neutral-800': isMenuOpen }"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </nav>

        <!-- Mobile Navigation Menu -->
        <div
          v-if="isMenuOpen"
          class="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 shadow-lg"
        >
          <div class="px-4 py-4 space-y-2">
            <a href="#home" class="mobile-nav-link" @click="closeMenu">Home</a>
            <a href="#about" class="mobile-nav-link" @click="closeMenu">About</a>
            <a href="#projects" class="mobile-nav-link" @click="closeMenu">Projects</a>
            <a href="#services" class="mobile-nav-link" @click="closeMenu">Services</a>
            <a href="#contact" class="mobile-nav-link" @click="closeMenu">Contact</a>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </main>

    <!-- Footer -->
    <footer class="bg-neutral-900 dark:bg-neutral-950 text-neutral-300 py-8">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm">
          © 2024 Irfandy Aziz. All rights reserved. Built with Vue.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.glass {
  backdrop-filter: saturate(180%) blur(10px);
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

@media (prefers-color-scheme: dark) {
  .glass {
    background: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
}

.logo {
  @apply text-2xl font-bold text-neutral-900 dark:text-neutral-50 no-underline;
  font-family: 'Playfair Display', serif;
}

.nav-link {
  @apply text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300 relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-nav-link {
  @apply block px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors duration-300;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-neutral-100);
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-dark);
}

/* Animation classes */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
</style>
