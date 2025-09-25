<script setup>
import { onMounted, ref } from 'vue'
import { useAnimations } from '@/composables/useAnimations'
import { useScrollAnimations } from '@/composables/useScrollAnimations'

const { animateHero, animateFloatingShapes } = useAnimations()
const { initScrollAnimations, floating } = useScrollAnimations()
const imageLoaded = ref(false)
const imageError = ref(false)

// Use the correct path for Vite
const imageSrc = '/profile-new.png'

const handleImageLoad = () => {
  imageLoaded.value = true
  console.log('Profile image loaded successfully')
  
  // Ensure image stays visible after loading
  setTimeout(() => {
    const img = document.querySelector('.profile-image')
    if (img) {
      img.style.opacity = '1'
      img.style.visibility = 'visible'
      img.style.display = 'block'
      img.classList.add('animated')
    }
  }, 100)
}

const handleImageError = (event) => {
  console.error('Failed to load profile image')
  imageError.value = true
  // Use a simple fallback
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjE2MCIgcj0iMTAwIiBmaWxsPSIjRTVFN0VCIi8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEzMCIgcj0iNDAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEwMCAyMDBDMTAwIDE2NS4zIDEyNS4zIDE0MCAxNjAgMTQwQzE5NC43IDE0MCAyMjAgMTY1LjMgMjIwIDIwMEwyMDAgMjAwTDE2MCAyMDBMMTAwIDIwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
}

onMounted(() => {
  // Disable complex animations - keep only simple ones
  // animateHero()
  // animateFloatingShapes()
  // initScrollAnimations()
  
  // Floating animation for background shapes - disabled
  // floating('.floating-shape')
  
  // Ensure image stays visible
  const img = document.querySelector('.profile-image')
  if (img) {
    img.style.opacity = '1'
    img.style.visibility = 'visible'
    img.style.display = 'block'
    img.classList.add('animated')
  }
})
</script>

<template>
  <section id="home" class="hero min-h-screen flex items-center relative overflow-hidden">
        <!-- Background Elements - Simplified -->
        <div class="absolute inset-0 -z-10">
          <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
          </div>
        </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="hero-content grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Image Content - Mobile First -->
        <div class="image-container relative order-1 lg:order-2" style="opacity: 1; visibility: visible;">
          <div class="image-wrapper relative">
            <img 
              class="profile-image w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary-200 dark:border-primary-800 shadow-2xl mx-auto lg:mx-0" 
              :src="imageSrc" 
              alt="Irfandy Aziz - Fullstack Developer"
              @error="handleImageError"
              @load="handleImageLoad"
              style="opacity: 1; visibility: visible;"
            />
            <div class="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-accent-400 rounded-full opacity-20"></div>
            <div class="absolute -bottom-4 -left-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-400 rounded-full opacity-30"></div>
          </div>
        </div>

        <!-- Text Content -->
        <div class="text-content space-y-6 order-2 lg:order-1 text-center lg:text-left">
          <div class="greeting text-accent-500 font-medium text-lg mb-2">
            <span class="inline-block">Hello, I'm</span>
          </div>
          
          <h1 class="main-title text-6xl lg:text-7xl font-serif font-bold leading-tight">
            <span class="block text-gray-900 dark:text-white" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">Irfandy</span>
            <span class="block text-gray-900 dark:text-white" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">Aziz</span>
          </h1>
          
          <div class="role-container">
            <h2 class="role text-2xl lg:text-3xl font-medium text-primary-600 dark:text-primary-400 mb-4">
              Fullstack Developer
            </h2>
            <div class="typing-animation text-xl text-neutral-700 dark:text-neutral-300">
              <span class="typing-text">Crafting elegant, performant web applications</span>
            </div>
          </div>
          
          <p class="description text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            I specialize in building scalable, maintainable web applications using modern technologies. 
            With expertise in both frontend and backend development, I bring ideas to life with clean code and beautiful design.
          </p>
          
          <div class="cta-buttons flex flex-wrap gap-4">
            <a href="#projects" class="btn-primary group">
              <span>View My Work</span>
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            <a href="#contact" class="btn-secondary group">
              <span>Get In Touch</span>
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </a>
          </div>
          
          <!-- Social Links -->
          <div class="social-links flex gap-4">
            <a href="https://github.com/irfandyz" target="_blank" rel="noopener" class="social-link group">
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/irfandy-aziz" target="_blank" rel="noopener" class="social-link group">
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://wa.me/6289687186597" target="_blank" rel="noopener" class="social-link group">
              <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--color-neutral-50) 0%, var(--color-neutral-100) 100%);
}

@media (prefers-color-scheme: dark) {
  .hero {
    background: linear-gradient(135deg, var(--color-neutral-900) 0%, var(--color-neutral-800) 100%);
  }
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--color-primary), var(--color-accent));
  opacity: 0.05;
  /* Animation disabled for better performance */
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
}

.main-title {
  color: var(--color-neutral-900);
}

@media (prefers-color-scheme: dark) {
  .main-title {
    color: var(--color-neutral-50);
  }
}

.typing-animation {
  position: relative;
  overflow: hidden;
}

.typing-text::after {
  content: '|';
  /* Blinking animation disabled for better performance */
}

.social-link {
  @apply text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors;
}

.cta-buttons .btn-primary,
.cta-buttons .btn-secondary {
  @apply flex items-center;
}

.image-container {
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
}

.profile-image {
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
  position: relative !important;
  z-index: 1 !important;
}

/* Override any GSAP animations that might hide the image */
.profile-image.animated {
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
}

@media (prefers-color-scheme: dark) {
  .profile-image {
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
  }
}

/* Mobile First Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    @apply text-center gap-8;
  }
  
  .main-title {
    @apply text-5xl;
  }
  
  .profile-image {
    @apply w-64 h-64 mx-auto;
  }
  
  .image-container {
    @apply mb-8;
  }
}

@media (max-width: 768px) {
  .hero-content {
    @apply gap-6;
  }
  
  .main-title {
    @apply text-4xl;
  }
  
  .profile-image {
    @apply w-56 h-56;
  }
  
  .image-container {
    @apply mb-6;
  }
  
  .text-content {
    @apply space-y-4;
  }
}

@media (max-width: 640px) {
  .main-title {
    @apply text-3xl;
  }
  
  .role {
    @apply text-xl;
  }
  
  .description {
    @apply text-base;
  }
  
  .cta-buttons {
    @apply justify-center flex-col sm:flex-row;
  }
  
  .profile-image {
    @apply w-48 h-48;
  }
  
  .image-container {
    @apply mb-4;
  }
  
  .greeting {
    @apply text-base;
  }
  
  .typing-animation {
    @apply text-lg;
  }
}

@media (max-width: 480px) {
  .main-title {
    @apply text-2xl;
  }
  
  .profile-image {
    @apply w-40 h-40;
  }
  
  .image-container {
    @apply mb-3;
  }
  
  .text-content {
    @apply space-y-3;
  }
  
  .cta-buttons {
    @apply gap-3;
  }
  
  .cta-buttons .btn-primary,
  .cta-buttons .btn-secondary {
    @apply text-sm px-4 py-2;
  }
}
</style>


