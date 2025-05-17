document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('section.upcoming-meetings');
  if (!section) {
    console.error('Section .upcoming-meetings not found');
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Section is visible, adding .visible class');
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  observer.observe(section);
});