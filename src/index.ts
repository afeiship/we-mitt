/**
 * https://developer.mozilla.org/zh-CN/docs/Web/Events/Creating_and_triggering_events
 */
export default class {
  on(inName, inHandler) {
    const handler = (event) => {
      const { detail } = event;
      inHandler(detail);
    };

    window.addEventListener(inName, handler, false);

    return {
      destroy: () => {
        return this.off(inName, handler);
      }
    };
  }
  off(inName, inHandler) {
    return window.removeEventListener(inName, inHandler, false);
  }
  emit(inName, inData?) {
    const event = new CustomEvent(inName, { detail: inData });
    window.dispatchEvent(event);
  }
}
