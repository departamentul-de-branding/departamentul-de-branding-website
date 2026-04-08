export class BlogRenderer {
  constructor(containerId, posts) {
    this.container = document.getElementById(containerId);
    this.posts = posts;
  }
  
  render() {
    if (!this.container || !this.posts.length) return;
    
    const html = this.posts.map(post => this.createBlogPost(post)).join('');
    this.container.innerHTML = html;
  }
  
  createBlogPost(post) {
    return `
      <a href="${post.url}" class="blog-post" data-post-id="${post.id}">
        <span class="blog-post__title">${post.title}</span>
        <span class="blog-post__date">${post.date}</span>
      </a>
    `;
  }
}
