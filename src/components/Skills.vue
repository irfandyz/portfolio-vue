<template>
  <section id="skills" class="section">
    <div class="container">
      <h2>Skills</h2>
      <div class="grid">
        <div class="card">
          <h3>Frontend</h3>
          <ul>
            <li>Vue, React</li>
            <li>TypeScript, JavaScript (ESNext)</li>
            <li>Vite, Webpack</li>
            <li>HTML5, CSS3, Tailwind</li>
          </ul>
        </div>
        <div class="card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js, Express, NestJS</li>
            <li>REST APIs, WebSockets</li>
            <li>Authentication & Authorization</li>
          </ul>
        </div>
        <div class="card">
          <h3>Data & Infra</h3>
          <ul>
            <li>PostgreSQL, MySQL</li>
            <li>Prisma, Sequelize, Knex</li>
            <li>Docker, CI/CD</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section { padding: 3rem 0; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 1rem; }
h2 { margin: 0 0 1rem; color: var(--color-heading); }
.grid { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1rem; }
.card { border: 1px solid var(--color-border); border-radius: 8px; padding: 1rem; }
h3 { margin: 0 0 0.5rem; color: var(--color-heading); }
ul { margin: 0; padding-left: 1.2rem; color: var(--color-text); }
@media (min-width: 768px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
</style>


