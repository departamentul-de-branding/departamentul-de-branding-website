export class Navigation {
  constructor() {
    this.toggle = document.getElementById('nav-toggle');
    this.mobileNav = null;
    this.isOpen = false;
    
    this.init();
  }
  
  init() {
    if (!this.toggle) return;
    
    this.createMobileNav();
    this.bindEvents();
  }
  
  createMobileNav() {
    const nav = document.createElement('nav');
    nav.className = 'mobile-nav';
    nav.id = 'mobile-nav';
    nav.innerHTML = `
      <ul class="mobile-nav__list">
        <li><a href="/projects" class="mobile-nav__link">projects</a></li>
        <li><a href="/about" class="mobile-nav__link">about</a></li>
        <li><a href="/blog" class="mobile-nav__link">notes</a></li>
        <li><a href="/contact" class="mobile-nav__link">contact</a></li>
        <li><a href="https://framer.link/MvMdlCP" class="btn btn--primary" style="margin-top: 1rem;">get template</a></li>
      </ul>
    `;
    
    document.body.appendChild(nav);
    this.mobileNav = nav;
  }
  
  bindEvents() {
    this.toggle.addEventListener('click', () => this.toggleMenu());
    
    if (this.mobileNav) {
      this.mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });
    }
    
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && this.isOpen) {
        this.closeMenu();
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });
  }
  
  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }
  
  openMenu() {
    this.isOpen = true;
    this.toggle.classList.add('active');
    this.mobileNav?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  closeMenu() {
    this.isOpen = false;
    this.toggle.classList.remove('active');
    this.mobileNav?.classList.remove('active');
    document.body.style.overflow = '';
  }
}
