import { TextRotate } from './modules/textRotate.js';
import { ProjectsRenderer } from './modules/projectsRenderer.js';
import { BlogRenderer } from './modules/blogRenderer.js';
import { Navigation } from './modules/navigation.js';
import { SmoothScroll } from './modules/smoothScroll.js';

class App {
  constructor() {
    this.content = null;
    this.init();
  }
  
  async init() {
    await this.loadContent();
    this.initComponents();
  }
  
  async loadContent() {
    try {
      const response = await fetch('./data/content.json');
      this.content = await response.json();
    } catch (error) {
      console.error('Failed to load content:', error);
      this.content = this.getFallbackContent();
    }
  }
  
  initComponents() {
    new Navigation();
    new SmoothScroll({ offset: 80 });
    
    if (this.content) {
      this.initTextRotate();
      this.initProjects();
      this.initBlog();
    }
  }
  
  initTextRotate() {
    const element = document.getElementById('text-rotate');
    if (element && this.content.hero?.rotatingWords) {
      new TextRotate(element, this.content.hero.rotatingWords, {
        interval: 3000,
        animationDuration: 400
      });
    }
  }
  
  initProjects() {
    if (this.content.projects) {
      const renderer = new ProjectsRenderer('projects-grid', this.content.projects);
      renderer.render();
    }
  }
  
  initBlog() {
    if (this.content.blog?.posts) {
      const renderer = new BlogRenderer('blog-list', this.content.blog.posts);
      renderer.render();
    }
  }
  
  getFallbackContent() {
    return {
      hero: {
        rotatingWords: ['no-code websites', 'software interfaces']
      },
      projects: [
        { id: 'project1', year: '2023', category: 'Design', title: 'Project 1', url: '#' }
      ],
      blog: {
        posts: [
          { id: 'post1', title: 'Blog Post', date: '2024', url: '#' }
        ]
      }
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
