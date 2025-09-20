<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <a href="#home" class="brand" @click="closeMenu">
        <img class="brand-avatar" src="/profile.webp" alt="Irfandy Aziz" width="28" height="28" />
        <span>Irfandy Aziz</span>
      </a>
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
      <div class="actions">
        <ul class="links" :class="{ open: menuOpen }" @click="closeMenu">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li class="only-mobile"><a class="cta" href="#contact">Hire Me</a></li>
        </ul>
        <a class="cta only-desktop" href="#contact">Hire Me</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}
.container {
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  color: var(--color-heading);
  text-decoration: none;
}
.brand-avatar { border-radius: 999px; border: 1px solid var(--color-border); width: 28px; height: 28px; object-fit: cover; }
.actions { display: flex; align-items: center; gap: 0.75rem; }
.cta { padding: 0.45rem 0.8rem; border: 1px solid var(--color-border); border-radius: 8px; text-decoration: none; color: var(--color-text); }
.cta:hover { background: var(--color-border); color: var(--color-background); }
.only-desktop { display: inline-flex; }
.only-mobile { display: none; }
.hamburger {
  display: none;
  background: transparent;
  border: none;
  width: 38px;
  height: 32px;
  padding: 0;
}
.hamburger span { display: block; height: 2px; background: var(--color-text); margin: 7px 0; }
.links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}
.links a {
  color: var(--color-text);
  text-decoration: none;
}
.links a:hover {
  color: var(--color-heading);
}
@media (max-width: 640px) {
  .hamburger { display: block; }
  .links { display: none; position: absolute; top: 56px; left: 0; right: 0; background: var(--color-background); border-bottom: 1px solid var(--color-border); padding: 0.75rem 1rem; flex-direction: column; }
  .links.open { display: flex; }
  .only-desktop { display: none; }
  .only-mobile { display: block; }
}
</style>


