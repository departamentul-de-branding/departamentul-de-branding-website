export class ProjectsRenderer {
  constructor(containerId, projects) {
    this.container = document.getElementById(containerId);
    this.projects = projects;
  }
  
  render() {
    if (!this.container || !this.projects.length) return;
    
    const html = this.projects.map(project => this.createProjectCard(project)).join('');
    this.container.innerHTML = html;
  }
  
  createProjectCard(project) {
    return `
      <a href="${project.url}" class="project-card" data-project-id="${project.id}">
        <div class="project-card__image">
          <div class="project-card__placeholder">${project.title}</div>
        </div>
        <div class="project-card__content">
          <div class="project-card__meta">
            <span>${project.year}</span>
            <span>${project.category}</span>
          </div>
          <h3 class="project-card__title">${project.title}</h3>
        </div>
      </a>
    `;
  }
}
