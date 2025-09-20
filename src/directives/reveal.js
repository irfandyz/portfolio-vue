const reveal = {
  mounted(el) {
    el.classList.add('reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    observer.observe(el);
  },
};

export default reveal;



