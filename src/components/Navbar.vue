<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')
// Auto-hide disabled - navbar always visible

// Navigation items
const navItems = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'about', label: 'About', icon: 'user' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'services', label: 'Services', icon: 'settings' },
  { id: 'contact', label: 'Contact', icon: 'mail' }
]

// Scroll detection
const handleScroll = () => {
  const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
  
  let current = ''
  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id')
    }
  })
  
  if (current) {
    activeSection.value = current
  }
}

// Smooth scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Auto-hide functionality removed - navbar always visible

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="vertical-navbar">
    <div class="navbar-container">

      <!-- Navigation Items -->
      <div class="navbar-items">
        <div 
          v-for="item in navItems" 
          :key="item.id"
          class="nav-item"
          :class="{ 'active': activeSection === item.id }"
          @click="scrollToSection(item.id)"
        >
          <div class="nav-icon">
            <svg class="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <!-- Home Icon -->
              <path v-if="item.icon === 'home'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              <!-- User Icon -->
              <path v-else-if="item.icon === 'user'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              <!-- Folder Icon -->
              <path v-else-if="item.icon === 'folder'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              <!-- Settings Icon -->
              <path v-else-if="item.icon === 'settings'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path v-else-if="item.icon === 'settings'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <!-- Mail Icon -->
              <path v-else-if="item.icon === 'mail'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
    </div>
          <div class="nav-label">
            {{ item.label }}
        </div>
          <div class="nav-indicator"></div>
        </div>
      </div>

      <!-- Progress Indicator -->
      <div class="progress-container">
        <div class="progress-bar" :style="{ height: `${(navItems.findIndex(item => item.id === activeSection) + 1) * (100 / navItems.length)}%` }"></div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.vertical-navbar {
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  z-index: 1000;
  /* Auto-hide disabled - navbar always visible */
}

.navbar-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 1.5rem 1rem;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-height: 400px;
  position: relative;
}

/* Brand */
.navbar-brand {
  margin-bottom: 0.5rem;
}

.brand-circle {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #0369a1, #eab308);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(3, 105, 161, 0.3);
  transition: all 0.3s ease;
}

.brand-circle:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 25px rgba(3, 105, 161, 0.4);
}

.brand-text {
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
}

/* Navigation Items */
.navbar-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 60px;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-5px);
}

.nav-item.active {
  background: linear-gradient(135deg, rgba(3, 105, 161, 0.2), rgba(234, 179, 8, 0.2));
  border: 1px solid rgba(3, 105, 161, 0.3);
}

.nav-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.icon-svg {
  width: 100%;
  height: 100%;
  color: #6b7280;
  transition: all 0.3s ease;
}

.nav-item.active .icon-svg {
  color: #0369a1;
  transform: scale(1.1);
}

.nav-item:hover .icon-svg {
  color: #0369a1;
  transform: scale(1.05);
}

.nav-label {
  font-size: 0.7rem;
  font-weight: 500;
  color: #6b7280;
  text-align: center;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.nav-item.active .nav-label {
  color: #0369a1;
  font-weight: 600;
}

.nav-indicator {
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  background: linear-gradient(135deg, #0369a1, #eab308);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item.active .nav-indicator {
  height: 20px;
}

/* Progress Container */
.progress-container {
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 80%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  overflow: hidden;
}

.progress-bar {
  width: 100%;
  background: linear-gradient(180deg, #0369a1, #eab308);
  border-radius: 1px;
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 10px rgba(3, 105, 161, 0.5);
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .navbar-container {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .nav-label {
    color: #9ca3af;
  }

  .nav-item.active .nav-label {
    color: #60a5fa;
  }

  .nav-item:hover {
    background: rgba(255, 255, 255, 0.05);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .vertical-navbar {
    right: 1.5rem;
  }
  
  .navbar-container {
    padding: 1rem 0.75rem;
    min-height: 350px;
  }
  
  .nav-item {
    padding: 0.6rem;
    min-width: 50px;
  }
  
  .nav-icon {
    width: 20px;
    height: 20px;
  }
  
  .nav-label {
    font-size: 0.65rem;
  }
}

@media (max-width: 768px) {
  .vertical-navbar {
    right: 1rem;
  }
  
  .navbar-container {
    padding: 0.75rem 0.5rem;
    min-height: 300px;
  }
  
  .brand-circle {
    width: 40px;
    height: 40px;
  }
  
  .brand-text {
    font-size: 1rem;
  }
  
  .nav-item {
    padding: 0.5rem;
    min-width: 45px;
  }
  
  .nav-icon {
    width: 18px;
    height: 18px;
  }
  
  .nav-label {
    font-size: 0.6rem;
  }
}

@media (max-width: 640px) {
  .vertical-navbar {
    position: fixed;
    top: auto;
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
    transform: none;
    width: auto;
  }
  
  /* Auto-hide disabled - navbar always visible */
  
  .navbar-container {
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem;
    min-height: auto;
    border-radius: 20px;
  }
  
  .navbar-items {
    flex-direction: row;
    gap: 0.25rem;
    flex: 1;
    justify-content: space-around;
  }
  
  .nav-item {
    flex-direction: column;
    padding: 0.5rem 0.25rem;
    min-width: auto;
    flex: 1;
  }
  
  .nav-icon {
    width: 16px;
    height: 16px;
  }
  
  .nav-indicator {
    left: 50%;
    top: -8px;
    transform: translateX(-50%);
    width: 20px;
    height: 0;
  }
  
  .nav-item.active .nav-indicator {
    height: 3px;
  }
  
  .progress-container {
    display: none;
  }
  
  .navbar-brand {
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
  
  .brand-circle {
    width: 35px;
    height: 35px;
  }
  
  .brand-text {
    font-size: 0.9rem;
  }
}
</style>
