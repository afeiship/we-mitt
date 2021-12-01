/**
 * https://developer.mozilla.org/zh-CN/docs/Web/Events/Creating_and_triggering_events
 */
export default class {
  public suffix: string = Math.random().toString(36);

  on(inName, inHandler) {
    const handler = (event) => {
      const { detail } = event;
      inHandler(detail);
    };

    window.addEventListener(inName, handler, false);
    return {
      destroy: () => {
        this.off(inName, handler);
      }
    };
  }
  off(inName, inHandler) {
    return window.addEventListener(inName, inHandler, false);
  }
  emit(inName, inData?) {
    const event = new CustomEvent(inName, { detail: inData });
    window.dispatchEvent(event);
  }

  private name(inName) {
    return inName + this.suffix;
  }
}
