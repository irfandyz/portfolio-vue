<script setup>
import { onMounted } from 'vue'
import { useScrollAnimations } from '@/composables/useScrollAnimations'

const { fadeInUp, staggerCards, scaleIn } = useScrollAnimations()

onMounted(() => {
  // Animate Services section elements
  fadeInUp('.services h2', { delay: 0.2 })
  fadeInUp('.services p', { delay: 0.4 })
  fadeInUp('.services .w-24', { delay: 0.6 })
  staggerCards('.service-card', { delay: 0.8 })
  scaleIn('.service-card', { delay: 1.0 })
})
</script>

<template>
  <section id="services" class="section py-20 bg-white dark:bg-neutral-800">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            My Services
          </h2>
          <p class="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            I offer comprehensive web development services to help bring your ideas to life. 
            From concept to deployment, I'm here to support your digital journey.
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-6"></div>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Web Development -->
          <div class="service-card group">
            <div class="service-icon">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="service-title">Web Development</h3>
            <p class="service-description">
              Custom websites and web applications built with modern technologies. 
              Responsive, fast, and optimized for all devices.
            </p>
            <ul class="service-features">
              <li>Custom Website Design</li>
              <li>Responsive Development</li>
              <li>Performance Optimization</li>
              <li>Cross-browser Compatibility</li>
            </ul>
            <div class="service-price">
              <span class="price">Starting at $500</span>
            </div>
          </div>

          <!-- E-commerce Solutions -->
          <div class="service-card group">
            <div class="service-icon">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h3 class="service-title">E-commerce Solutions</h3>
            <p class="service-description">
              Complete online store development with payment integration, 
              inventory management, and admin dashboard.
            </p>
            <ul class="service-features">
              <li>Online Store Setup</li>
              <li>Payment Gateway Integration</li>
              <li>Inventory Management</li>
              <li>Order Processing System</li>
            </ul>
            <div class="service-price">
              <span class="price">Starting at $1,200</span>
            </div>
          </div>

          <!-- API Development -->
          <div class="service-card group">
            <div class="service-icon">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="service-title">API Development</h3>
            <p class="service-description">
              RESTful APIs and GraphQL endpoints for your applications. 
              Secure, scalable, and well-documented.
            </p>
            <ul class="service-features">
              <li>REST API Development</li>
              <li>GraphQL Implementation</li>
              <li>API Documentation</li>
              <li>Authentication & Security</li>
            </ul>
            <div class="service-price">
              <span class="price">Starting at $800</span>
            </div>
          </div>

          <!-- Database Design -->
          <div class="service-card group">
            <div class="service-icon">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
              </svg>
            </div>
            <h3 class="service-title">Database Design</h3>
            <p class="service-description">
              Efficient database architecture and optimization for your applications. 
              PostgreSQL, MySQL, MongoDB expertise.
            </p>
            <ul class="service-features">
              <li>Database Architecture</li>
              <li>Query Optimization</li>
              <li>Data Migration</li>
              <li>Performance Tuning</li>
            </ul>
            <div class="service-price">
              <span class="price">Starting at $600</span>
            </div>
          </div>

          <!-- Maintenance & Support -->
          <div class="service-card group">
            <div class="service-icon">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="service-title">Maintenance & Support</h3>
            <p class="service-description">
              Ongoing maintenance, updates, and technical support to keep your 
              applications running smoothly.
            </p>
            <ul class="service-features">
              <li>Regular Updates</li>
              <li>Bug Fixes</li>
              <li>Security Patches</li>
              <li>24/7 Support</li>
            </ul>
            <div class="service-price">
              <span class="price">Starting at $200/month</span>
            </div>
          </div>

          <!-- Consultation -->
          <div class="service-card group">
            <div class="service-icon">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h3 class="service-title">Technical Consultation</h3>
            <p class="service-description">
              Expert advice on technology choices, architecture decisions, 
              and development strategies for your projects.
            </p>
            <ul class="service-features">
              <li>Technology Stack Advice</li>
              <li>Architecture Planning</li>
              <li>Code Review</li>
              <li>Project Planning</li>
            </ul>
            <div class="service-price">
              <span class="price">$100/hour</span>
            </div>
          </div>
        </div>

        <!-- Process Section -->
        <div class="process-section">
          <h3 class="text-3xl font-serif font-bold text-center text-neutral-900 dark:text-neutral-50 mb-12">
            My Development Process
          </h3>
          <div class="grid md:grid-cols-4 gap-8">
            <div class="process-step">
              <div class="step-number">1</div>
              <h4 class="step-title">Discovery</h4>
              <p class="step-description">
                Understanding your requirements, goals, and target audience through detailed consultation.
              </p>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <h4 class="step-title">Planning</h4>
              <p class="step-description">
                Creating detailed project plans, wireframes, and technical specifications.
              </p>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <h4 class="step-title">Development</h4>
              <p class="step-description">
                Building your solution with clean, maintainable code and regular updates.
              </p>
            </div>
            <div class="process-step">
              <div class="step-number">4</div>
              <h4 class="step-title">Deployment</h4>
              <p class="step-description">
                Launching your project and providing ongoing support and maintenance.
              </p>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="cta-section text-center mt-16">
          <div class="card bg-gradient-to-r from-primary-500 to-accent-500 text-white max-w-4xl mx-auto">
            <h3 class="text-3xl font-serif font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p class="text-xl text-primary-100 mb-8">
              Let's discuss your ideas and create something amazing together. 
              I'm here to help you achieve your digital goals.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" class="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
                Get Free Quote
              </a>
              <a href="#projects" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-card {
  @apply bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2;
}

.service-card:hover {
  @apply border-primary-300 dark:border-primary-600;
}

.service-icon {
  @apply w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300;
}

.service-title {
  @apply text-xl font-serif font-semibold text-neutral-900 dark:text-neutral-50 mb-4;
}

.service-description {
  @apply text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed;
}

.service-features {
  @apply space-y-2 mb-6;
}

.service-features li {
  @apply text-sm text-neutral-700 dark:text-neutral-300 flex items-center;
}

.service-features li::before {
  content: '✓';
  @apply text-primary-500 font-bold mr-2;
}

.service-price {
  @apply text-center;
}

.price {
  @apply text-2xl font-bold text-primary-600 dark:text-primary-400;
}

.process-section {
  @apply bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-12;
}

.process-step {
  @apply text-center;
}

.step-number {
  @apply w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4;
}

.step-title {
  @apply text-xl font-serif font-semibold text-neutral-900 dark:text-neutral-50 mb-3;
}

.step-description {
  @apply text-neutral-600 dark:text-neutral-400 leading-relaxed;
}

.cta-section .card {
  @apply p-12;
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
