<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
// ScrollToTop removed

</script>

<template>
  <div id="app" class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
    <!-- Vertical Navigation -->
    <Navbar />

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
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Animation classes */

</style>
