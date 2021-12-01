/**
 * https://developer.mozilla.org/zh-CN/docs/Web/Events/Creating_and_triggering_events
 */
import EventMitt from '@jswork/event-mitt';

export default class {
  private emitter;
  private _events;

  constructor() {
    this.emitter = Object.assign(this, EventMitt);
  }

  on(inName, inHandler) {
    const handler = (event: any) => {
      const { detail } = event;
      inHandler(detail);
    };

    window.addEventListener(inName, handler, false);
    const res = this.emitter.on(inName, handler);

    return {
      destroy: () => {
        res.destroy();
        return this.off(inName, handler);
      }
    };
  }

  off(inName, inHandler) {
    this.emitter.on(inName, inHandler);
    return window.removeEventListener(inName, inHandler, false);
  }

  emit(inName, inData?) {
    const event = new CustomEvent(inName, { detail: inData });
    window.dispatchEvent(event);
    this.emitter.emit(inName, inData);
  }

  one(inName, inHandler) {
    var map = (this._events = this._events || {});
    var listeners = map[inName];
    if (!listeners?.length) {
      return this.on(inName, inHandler);
    }
    return {
      destroy: () => {
        this.off(inName, inHandler);
      }
    };
  }
}
