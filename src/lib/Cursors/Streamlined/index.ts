export type CursorPositionType = {
  clientX: number,
  clientY: number,
};

export type CursorState = {
  x: number,
  y: number,
  width: number,
  height: number,
  radius: string,
}

export class Cursor {
  currentElement: HTMLElement | null;
  cursor: HTMLElement | null;

  constructor () {
    this.currentElement = null;
    this.cursor = document.getElementById('cursor');
  }

  updateProperties (state: CursorState) {
    this.cursor?.style.setProperty('--x', `${ state.x }px`)
    this.cursor?.style.setProperty('--y', `${ state.y }px`)
    this.cursor?.style.setProperty('--width', `${ state.width }px`)
    this.cursor?.style.setProperty('--height', `${ state.height }px`)
    this.cursor?.style.setProperty('--radius', state.radius)
  }

  getDefaultState ({ clientX, clientY }: CursorPositionType) {
    return {
      x: clientX,
      y: clientY,
      width: 42,
      height: 42,
      radius: '100px'
    };
  }

  getComputedState () {
    if (this.currentElement != null) {
      const { top, left, width, height } = this.currentElement.getBoundingClientRect()
      const radius = window.getComputedStyle(this.currentElement).borderTopLeftRadius
      return {
        x: left + width / 2,
        y: top + height / 2,
        width,
        height,
        radius,
        scale: 1,
      }
    } else {
      return {};
    }
  }

  createState (e: MouseEvent) {
    const defaultState = this.getDefaultState(e);
    const computedState = this.getComputedState();

    return {
      ...defaultState,
      ...computedState
    }
  }

  setCurrentElement (elem: HTMLElement) {
    this.currentElement = elem;
  }

  updateCursor (e: MouseEvent) {
    const state = this.createState(e);
    this.updateProperties(state)
  }
}
