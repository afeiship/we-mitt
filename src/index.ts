interface DestroyableResource {
  destroy: () => void;
}

interface EventMitt {
  /**
   * Attach event and return the event resource.
   * @param name
   * @param handler
   */
  on(name: string, handler: Function): DestroyableResource;
  /**
   * Detach event.
   * @param name
   * @param handler
   */
  off(name: string, handler: Function): void;
  /**
   * Trigger event by name.
   * @param name
   * @param data
   */
  emit(name: string, data?): void;
}

interface EventMittExtension {
  /**
   * Attach event, but only can attach one time.
   * @param name
   * @param handler
   */
  one(name: string, handler: Function): DestroyableResource;
}

export default class implements EventMitt, EventMittExtension {
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
