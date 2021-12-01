export default class {
  private ONE_CACHE = {};

  on(inName, inHandler) {
    const handler = (event: any) => {
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

  one(inName, inHandler) {
    if (!this.ONE_CACHE[inName]) {
      this.ONE_CACHE[inName] = true;
      return this.on(inName, inHandler);
    }

    return {
      destroy: () => {
        delete inHandler[inName];
        this.off(inName, inHandler);
      }
    };
  }
}
