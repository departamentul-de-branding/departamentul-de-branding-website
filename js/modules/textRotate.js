export class TextRotate {
  constructor(element, words, options = {}) {
    this.element = element;
    this.words = words;
    this.currentIndex = 0;
    this.options = {
      interval: options.interval || 3000,
      animationDuration: options.animationDuration || 500,
    };
    
    this.init();
  }
  
  init() {
    if (!this.element || !this.words.length) return;
    
    this.element.textContent = this.words[0];
    this.element.style.transition = `opacity ${this.options.animationDuration}ms ease`;
    
    this.startRotation();
  }
  
  startRotation() {
    this.intervalId = setInterval(() => {
      this.rotate();
    }, this.options.interval);
  }
  
  rotate() {
    this.element.style.opacity = '0';
    
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
      this.element.textContent = this.words[this.currentIndex];
      this.element.style.opacity = '1';
    }, this.options.animationDuration);
  }
  
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
