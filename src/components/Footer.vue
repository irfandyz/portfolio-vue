<template>
  <footer class="footer">
    <div class="container">
      <p>© {{ new Date().getFullYear() }} Irfandy Aziz · Fullstack Developer</p>
      <ul class="links">
        <li><a href="https://github.com/irfandy" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/irfandy" target="_blank" rel="noopener">LinkedIn</a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 3rem;
  padding: 2rem 1rem;
  border-top: 1px solid var(--color-border);
}
.container {
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.links { display: flex; gap: 1rem; list-style: none; padding: 0; margin: 0; }
.links a { color: var(--color-text); text-decoration: none; }
.links a:hover { color: var(--color-heading); }
</style>


