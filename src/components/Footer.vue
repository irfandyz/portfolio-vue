<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="dot"></span>
        <p class="footer-text">
          © {{ new Date().getFullYear() }} <span class="name">Irfandy Aziz</span> · Fullstack Developer
        </p>
      </div>
      <ul class="links">
        <li>
          <a href="https://github.com/irfandy" target="_blank" rel="noopener" class="footer-link">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/irfandy" target="_blank" rel="noopener" class="footer-link">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 3rem;
  padding: 2.5rem 1.5rem 2.75rem;
  background:
    radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.14), transparent 55%),
    radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.12), transparent 55%),
    linear-gradient(135deg, #f9fafb 0%, #e5e7eb 40%, #e5e7eb 100%);
  border-top: 1px solid rgba(209, 213, 219, 0.9);
}

.footer-inner {
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  color: #0f172a;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.dot {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 0%, #22c55e, #16a34a);
  box-shadow:
    0 0 0 4px rgba(34, 197, 94, 0.25),
    0 0 20px rgba(34, 197, 94, 0.75);
}

.footer-text {
  margin: 0;
  font-size: 0.9rem;
  color: #4b5563;
}

.name {
  color: #111827;
  font-weight: 600;
}

.links {
  display: flex;
  gap: 0.9rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  position: relative;
  font-size: 0.9rem;
  color: #6b7280;
  text-decoration: none;
  padding-bottom: 0.1rem;
  transition: color 0.2s ease;
}

.footer-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.15rem;
  width: 0%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, #3b82f6, #ec4899);
  transition: width 0.22s ease;
}

.footer-link:hover {
  color: #111827;
}

.footer-link:hover::after {
  width: 100%;
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (prefers-color-scheme: dark) {
  .footer {
    background:
      radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.22), transparent 55%),
      radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.18), transparent 55%),
      linear-gradient(135deg, #020617 0%, #020617 35%, #020617 100%);
    border-top: 1px solid rgba(51, 65, 85, 0.9);
  }

  .footer-inner {
    color: #e5e7eb;
  }

  .footer-text {
    color: #9ca3af;
  }

  .name {
    color: #e5e7eb;
  }

  .footer-link {
    color: #9ca3af;
  }

  .footer-link:hover {
    color: #e5e7eb;
  }
}
</style>

