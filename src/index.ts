interface EventResource {
  destroy: () => void;
}

interface EventMitt {
  on(name: string, handler: Function): EventResource;
  one(name: string, handler: Function): EventResource;
  off(name: string, handler: Function): void;
  emit(name: string, data?): void;
}

export default class implements EventMitt {
  private ONE_CACHE = {};

  on(inName, inHandler) {
    const handler = (event: CustomEvent) => {
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

  off(inName, inHandler) {
    return window.removeEventListener(inName, inHandler, false);
  }

  emit(inName, inData?) {
    const event = new CustomEvent(inName, { detail: inData });
    window.dispatchEvent(event);
  }
}
