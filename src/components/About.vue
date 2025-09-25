<script setup>
import { onMounted } from 'vue'
import { useScrollAnimations } from '@/composables/useScrollAnimations'

const { fadeInUp, fadeInLeft, fadeInRight, staggerCards } = useScrollAnimations()

onMounted(() => {
  // Animate About section elements
  fadeInUp('.about h2', { delay: 0.2 })
  fadeInLeft('.about .card', { stagger: 0.2, delay: 0.4 })
  fadeInRight('.about .skills-grid', { delay: 0.6 })
  staggerCards('.skill-tag', { delay: 0.8 })
  staggerCards('.experience-item', { delay: 1.0 })
})
</script>

<template>
  <section id="about" class="section py-20 bg-neutral-50 dark:bg-neutral-900">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            About Me
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Personal Story -->
          <div class="space-y-6">
            <div class="card">
              <h3 class="text-2xl font-serif font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                My Story
              </h3>
              <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                I'm <strong class="text-primary-600 dark:text-primary-400">Irfandy Aziz</strong>, a Full-stack Developer expert in leveraging Laravel and Vue.js to build modern, scalable web applications. My primary focus is transforming complex ideas into high-performance digital solutions. I prioritize Clean Code; to me, a solid technical foundation is key to creating projects that are efficient, easily maintainable, and reliable long-term.
              </p>
              <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                I believe great code must be supported by an outstanding User Experience (UX). My commitment is to consistently deliver an elegant aesthetic with seamless interaction, ensuring the final product is not only fast behind the scenes but also a delight to use. I'm passionate about contributing to projects that expertly balance technical excellence with sophisticated, user-centric design.
              </p>
            </div>

            <!-- Work Experience -->
            <div class="card">
              <h3 class="text-2xl font-serif font-semibold text-neutral-900 dark:text-neutral-50 mb-6">
                Work Experience
              </h3>
              <div class="space-y-6">
                <div class="experience-item border-l-4 border-primary-500 pl-4">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      Internship - Junior Web Developer
                    </h4>
                    <span class="text-sm text-neutral-500 dark:text-neutral-400">2019 - 2020</span>
                  </div>
                  <p class="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                    CV. Orbit Indonesia Persada
                  </p>
                  <p class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    Following the implementation of socialization of the results of the application program to clients. The programming language used is Laravel.
                  </p>
                </div>

                <div class="experience-item border-l-4 border-accent-500 pl-4">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      Full-stack Developer
                    </h4>
                    <span class="text-sm text-neutral-500 dark:text-neutral-400">2021 - 2022</span>
                  </div>
                  <p class="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                    PT. Java Genius All Technology
                  </p>
                  <p class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    Results-driven developer with experience building integrated applications across sectors including school operations (tuition, laundry, store, grading, attendance), HR and employee management (payroll, leave, onboarding, performance), cooperative/microfinance, and employee portals. Developed modular, secure, user-centric systems that streamline processes, support scalability, and drive adoption.
                  </p>
                </div>

                <div class="experience-item border-l-4 border-neutral-400 pl-4">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      Full-stack Developer
                    </h4>
                    <span class="text-sm text-neutral-500 dark:text-neutral-400">2022 - Present</span>
                  </div>
                  <p class="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                    Rittercoding
                  </p>
                  <p class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    I have extensive experience as a backend developer, where I predominantly utilized PHP in conjunction with the Laravel framework.
                  </p>
                </div>

                <div class="experience-item border-l-4 border-red-500 pl-4">
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      Internship - IT Engineer
                    </h4>
                    <span class="text-sm text-neutral-500 dark:text-neutral-400">August 2025 - November 2025</span>
                  </div>
                  <p class="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                    PT. Uniteda Arkato
                  </p>
                  <p class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    Saya membantu membuatkan aplikasi untuk operasional perusahaan yang dinamakan TMS (Transport Management System), dan men support kebutuhan it untuk pengembangan aplikasi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills & Technologies -->
          <div class="space-y-6">
            <!-- Technical Skills -->
            <div class="card">
              <h3 class="text-2xl font-serif font-semibold text-neutral-900 dark:text-neutral-50 mb-6">
                Technical Skills
              </h3>
              
              <!-- Frontend Skills -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-3 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Frontend Development
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span class="skill-tag">Vue.js</span>
                  <span class="skill-tag">React</span>
                  <span class="skill-tag">Flutter</span>
                  <span class="skill-tag">JavaScript</span>
                  <span class="skill-tag">HTML5</span>
                  <span class="skill-tag">CSS3</span>
                  <span class="skill-tag">Tailwind CSS</span>
                  <span class="skill-tag">Vite</span>
                </div>
              </div>

              <!-- Backend Skills -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-3 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
                  </svg>
                  Backend Development
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span class="skill-tag">Node.js</span>
                  <span class="skill-tag">Express.js</span>
                  <span class="skill-tag">REST APIs</span>
                  <span class="skill-tag">Laravel</span>
                  <span class="skill-tag">CodeIgniter</span>
                  <span class="skill-tag">PHP</span>
                </div>
              </div>

              <!-- Database & Tools -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-3 flex items-center">
                  <svg class="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                  </svg>
                  Database & Tools
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span class="skill-tag">MySQL</span>
                  <span class="skill-tag">Git</span>
                  <span class="skill-tag">GitHub</span>
                  <span class="skill-tag">VPS</span>
                  <span class="skill-tag">Linux</span>
                </div>
              </div>
            </div>

            <!-- Soft Skills -->
            <div class="card">
              <h3 class="text-2xl font-serif font-semibold text-neutral-900 dark:text-neutral-50 mb-6">
                Soft Skills
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                  <div class="text-2xl mb-2">🤝</div>
                  <h4 class="font-semibold text-neutral-900 dark:text-neutral-50">Team Collaboration</h4>
                </div>
                <div class="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                  <div class="text-2xl mb-2">💡</div>
                  <h4 class="font-semibold text-neutral-900 dark:text-neutral-50">Problem Solving</h4>
                </div>
                <div class="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                  <div class="text-2xl mb-2">📚</div>
                  <h4 class="font-semibold text-neutral-900 dark:text-neutral-50">Continuous Learning</h4>
                </div>
                <div class="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                  <div class="text-2xl mb-2">⏰</div>
                  <h4 class="font-semibold text-neutral-900 dark:text-neutral-50">Time Management</h4>
                </div>
              </div>
            </div>

            <!-- Call to Action -->
            <div class="card bg-gradient-to-r from-primary-500 to-accent-500 text-white">
              <h3 class="text-xl font-serif font-semibold mb-3">
                Let's Work Together
              </h3>
              <p class="text-primary-100 mb-4">
                I'm always excited to take on new challenges and collaborate on interesting projects. 
                Whether you need a full website, a web application, or consultation, I'm here to help.
              </p>
              <a href="#contact" class="btn-secondary bg-white text-primary-600 hover:bg-neutral-100">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-tag {
  @apply px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full border border-primary-200 dark:border-primary-700;
}

.experience-item {
  position: relative;
}

.experience-item::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 0;
  width: 12px;
  height: 12px;
  background: currentColor;
  border-radius: 50%;
  border: 3px solid var(--color-background);
}

@media (prefers-color-scheme: dark) {
  .experience-item::before {
    border-color: var(--color-neutral-900);
  }
}

.card {
  @apply bg-white dark:bg-neutral-800 shadow-lg rounded-xl p-6 border border-neutral-200 dark:border-neutral-700;
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


