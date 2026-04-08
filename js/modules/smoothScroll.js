export class SmoothScroll {
  constructor(options = {}) {
    this.offset = options.offset || 80;
    
    this.init();
  }
  
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => this.handleClick(e));
    });
  }
  
  handleClick(e) {
    const href = e.currentTarget.getAttribute('href');
    if (!href || href === '#') return;
    
    const target = document.querySelector(href);
    if (!target) return;
    
    e.preventDefault();
    this.scrollTo(target);
  }
  
  scrollTo(element) {
    const top = element.getBoundingClientRect().top + window.scrollY - this.offset;
    
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
}
