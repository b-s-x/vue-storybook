export const lerp: any = (a: number, b: number, n: number) => (1 - n) * a + n * b;

export class Cursor {
  raf: any

  constructor(
    public target?: any,
    public cursor?: any,
    public speed?: number,
  ) {
    this.target = target || { x: 0.5, y: 0.5 };
    this.cursor = cursor || { x: 0.5, y: 0.5 };
    this.speed = speed || 0.2;
    this.init();
  }
  bindAll() {
    ["onMouseMove", "render"].forEach((fn: any): any => {
      this[fn] = this[fn].bind(this);
    });
  }
  onMouseMove(e: any) {
    //get normalized mouse coordinates [0, 1]
    this.target.x = e.clientX / window.innerWidth;
    this.target.y = e.clientY / window.innerHeight;
    // trigger loop if no loop is active
    if (!this.raf) this.raf = requestAnimationFrame(this.render);
  }
  render() {
    //calculate lerped values
    this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
    this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
    document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
    document.documentElement.style.setProperty("--cursor-y", this.cursor.y);
    //cancel loop if mouse stops moving
    const delta = Math.sqrt(
      Math.pow(this.target.x - this.cursor.x, 2) +
        Math.pow(this.target.y - this.cursor.y, 2)
    );
    if (delta < 0.001) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
      return;
    }
    //or continue looping if mouse is moving
    this.raf = requestAnimationFrame(this.render);
  }
  init() {
    this.bindAll();
    window.addEventListener("mousemove", this.onMouseMove);
    this.raf = requestAnimationFrame(this.render);
  }
}
