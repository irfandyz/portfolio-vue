<script setup>
import { ref, computed, onMounted } from 'vue'
import projects from '@/data/projects'
import { useScrollAnimations } from '@/composables/useScrollAnimations'

const { fadeInUp, staggerCards, scaleIn } = useScrollAnimations()

const selectedCategory = ref('All')
const selectedProject = ref(null)

const categories = ['All', 'Frontend', 'Backend', 'Full Stack']

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})

const openProjectModal = (project) => {
  selectedProject.value = project
}

const closeProjectModal = () => {
  selectedProject.value = null
}

onMounted(() => {
  // Animasi scroll ringan untuk section Projects
  fadeInUp('.projects h2', { delay: 0.15 })
  fadeInUp('.projects p', { delay: 0.25 })
  fadeInUp('.projects .w-24', { delay: 0.35 })
  staggerCards('.project-card', { delay: 0.3, stagger: 0.12 })
})
</script>

<template>
  <section id="projects" class="section projects py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            My Projects
          </h2>
          <p class="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
            A showcase of my recent work and projects. Each project represents a unique challenge 
            and solution, built with modern technologies and best practices.
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-all duration-300',
              selectedCategory === category
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-card group cursor-pointer"
            @click="openProjectModal(project)"
          >
            <div class="project-image">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-48 object-cover rounded-t-xl"
              />
              <div class="project-overlay">
                <div class="project-status" :class="project.status.toLowerCase().replace(' ', '-')">
                  {{ project.status }}
                </div>
                <div class="project-actions">
                  <button class="action-btn">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="project-year">{{ project.year }}</span>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-tech">
                <span
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" class="tech-more">
                  +{{ project.technologies.length - 3 }} more
                </span>
              </div>
              
              <div class="project-links"></div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center">
          <div class="card bg-gradient-to-r from-primary-500 to-accent-500 text-white max-w-2xl mx-auto">
            <h3 class="text-2xl font-serif font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p class="text-primary-100 mb-6">
              I'm always excited to take on new projects and challenges. 
              Let's discuss how I can help bring your ideas to life.
            </p>
            <a href="#contact" class="btn-primary bg-white text-primary-600 hover:bg-neutral-100">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <div
      v-if="selectedProject"
      class="modal-overlay fixed inset-0 bg-neutral-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      @click="closeProjectModal"
    >
      <div
        class="project-modal relative bg-white dark:bg-neutral-800 rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto border border-neutral-200 dark:border-neutral-700 shadow-2xl"
        @click.stop
      >
        <!-- Sticky Header -->
        <div class="sticky top-0 z-10 bg-white/85 dark:bg-neutral-800/85 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-700 p-6 rounded-t-2xl">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-50 mb-1">
                {{ selectedProject.title }}
              </h3>
              <div class="flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <span class="project-category">{{ selectedProject.category }}</span>
                <span class="project-year">{{ selectedProject.year }}</span>
                <span class="project-status" :class="selectedProject.status.toLowerCase().replace(' ', '-')">
                  {{ selectedProject.status }}
                </span>
              </div>
            </div>
            <button
              @click="closeProjectModal"
              class="close-btn w-10 h-10 inline-flex items-center justify-center rounded-full text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Close"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Body -->
        <div class="p-6 lg:p-8">
          <!-- Project Image -->
          <div class="mb-6 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <img
              :src="selectedProject.image"
              :alt="selectedProject.title"
              class="w-full aspect-video object-cover"
            />
          </div>

          <!-- Project Details -->
          <div class="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Project Overview</h4>
              <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {{ selectedProject.longDescription }}
              </p>
            </div>

            <div>
              <h4 class="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">Technologies Used</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in selectedProject.technologies"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Project Links -->
          <div class="flex flex-wrap gap-3 mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
            <a
              v-if="selectedProject.githubUrl"
              :href="selectedProject.githubUrl"
              target="_blank"
              rel="noopener"
              class="btn-secondary"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  position: relative;
  background: transparent;
  overflow: hidden;
}

.project-card {
  @apply rounded-2xl overflow-hidden transition-all duration-300 relative;
  background:
    radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.12), transparent 60%),
    linear-gradient(145deg, rgba(248, 250, 252, 0.98), rgba(229, 231, 235, 0.98));
  box-shadow:
    0 20px 52px rgba(15, 23, 42, 0.34),
    0 0 0 1px rgba(148, 163, 184, 0.35);
}

@media (prefers-color-scheme: dark) {
  .project-card {
    background:
      radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.38), transparent 60%),
      linear-gradient(145deg, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 1));
    box-shadow:
      0 24px 64px rgba(0, 0, 0, 0.75),
      0 0 0 1px rgba(30, 64, 175, 0.6);
  }
}

.project-image {
  @apply relative overflow-hidden;
}

.project-overlay {
  @apply absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center;
}

.project-status {
  @apply absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium;
}

.project-status.completed {
  @apply bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200;
}

.project-status.in-progress {
  @apply bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200;
}

.project-actions {
  @apply flex gap-2;
}

.action-btn {
  @apply w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300;
}

.project-content {
  @apply p-6 relative;
}

.project-header {
  @apply flex justify-between items-start mb-4;
}

.project-title {
  @apply text-xl font-serif font-semibold text-neutral-900 dark:text-neutral-50;
}

.project-year {
  @apply text-sm text-neutral-500 dark:text-neutral-400;
}

.project-description {
  @apply text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed;
}

.project-tech {
  @apply flex flex-wrap gap-2 mb-4;
}

.tech-tag {
  @apply px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full;
}

.tech-more {
  @apply px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs font-medium rounded-full;
}

.project-links {
  @apply flex gap-3;
}

.project-link {
  @apply flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors;
}

.project-category {
  @apply px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded;
}

.card {
  @apply p-8;
}

/* Modal enhancements */
.modal-overlay {
  animation: overlayFade 200ms ease-out;
}

.project-modal {
  transform-origin: center;
  animation: modalIn 220ms ease-out;
}

.close-btn {
  box-shadow: 0 0 0 0 rgba(0,0,0,0);
}
.close-btn:hover {
  box-shadow: 0 4px 14px rgba(0,0,0,0.12);
}

@keyframes overlayFade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modalIn {
  from { opacity: 0; transform: translateY(8px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
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


