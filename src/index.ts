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
  emit(name: string, data?: Record<string, any>): boolean;
}

interface EventMittExtension extends EventMitt {
  /**
   * Attach event, but only can attach one time.
   * @param name
   * @param handler
   */
  one(name: string, handler: Function): DestroyableResource;
}

export default class WeMitt implements EventMittExtension {
  private ONE_CACHE = {};

  on(name, handler) {
    const callback = (event: CustomEvent) => {
      const { detail } = event;
      handler(detail);
    };

    window.addEventListener(name, callback, false);

    return {
      destroy: () => {
        return this.off(name, callback);
      }
    };
  }

  one(name: string, handler: any) {
    if (!this.ONE_CACHE[name]) {
      this.ONE_CACHE[name] = true;
      return this.on(name, handler);
    }

    return {
      destroy: () => {
        delete handler[name];
        this.off(name, handler);
      }
    };
  }

  off(name: string, handler: any) {
    return window.removeEventListener(name, handler, false);
  }

  emit(name: string, data?: any) {
    const payload = typeof data === 'undefined' ? undefined : { detail: data };
    const event = new CustomEvent(name, payload);
    return window.dispatchEvent(event);
  }
}
