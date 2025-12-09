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
  <div id="app" class="min-h-screen page-bg">
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
    <footer class="footer-global">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm">
          © {{ new Date().getFullYear() }} Irfandy Aziz. All rights reserved. Built with Vue.js and Tailwind CSS.
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

.page-bg {
  background:
    radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.16), transparent 55%),
    radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.12), transparent 55%),
    linear-gradient(135deg, #f9fafb 0%, #e5e7eb 40%, #e5e7eb 100%);
  color: #0f172a;
}

@media (prefers-color-scheme: dark) {
  .page-bg {
    background:
      radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.22), transparent 55%),
      radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.18), transparent 55%),
      linear-gradient(135deg, #020617 0%, #020617 35%, #020617 100%);
    color: #e5e7eb;
  }
}

.footer-global {
  margin-top: 3rem;
  padding: 2.5rem 1.5rem 2.75rem;
  background: transparent;
  border-top: 1px solid rgba(148, 163, 184, 0.35);
  color: inherit;
}

@media (prefers-color-scheme: dark) {
  .footer-global {
    border-top: 1px solid rgba(51, 65, 85, 0.8);
  }
}
</style>
