import WinEvtEmitt from '../src';
/**
 * https://developer.mozilla.org/zh-CN/docs/Web/Events/Creating_and_triggering_events
 */

describe('01/basic api worked', () => {
  test('emitter.on one times', (done) => {
    const emitter = new WinEvtEmitt();
    let val = false;

    const res = emitter.on('abc', () => {
      val = true;
      expect(val).toBe(true);
    });

    setTimeout(() => {
      expect(val).toBe(false);
      emitter.emit('abc');
      res.destroy();
      done();
    }, 100);
  });

  test('emitter.on multiple times', (done) => {
    const emitter = new WinEvtEmitt();
    let val = 0;

    const res1 = emitter.on('abc', () => {
      val++;
      expect(val).toBe(1);
    });

    const res2 = emitter.on('abc', () => {
      val++;
      expect(val).toBe(2);
    });

    setTimeout(() => {
      expect(val).toBe(0);
      emitter.emit('abc');
      res1.destroy();
      res2.destroy();
      done();
    }, 100);
  });

  test('emitter.on one time, trigger multple times', (done) => {
    const emitter = new WinEvtEmitt();
    let val = 0;

    const res = emitter.on('abc', () => {
      val++;
    });

    setTimeout(() => {
      expect(val).toBe(0);
      emitter.emit('abc');
      emitter.emit('abc');
      emitter.emit('abc');
      expect(val).toBe(3);
      res.destroy();
      done();
    }, 100);
  });

  test('emitter.off should rm handler', () => {
    const emitter = new WinEvtEmitt();
    let val = false;
    const handler = () => {
      val = true;
    };

    expect(val).toBe(false);
    emitter.on('abc', handler);
    emitter.off('abc', handler);
    expect(val).toBe(false);
  });

  test('emitter.one should only register one time', () => {
    const emitter = new WinEvtEmitt();
    let val = 0;
    emitter.one('abc', () => {
      val++;
    });
    emitter.one('abc', () => {
      val++;
    });
    emitter.one('abc', () => {
      val++;
    });

    emitter.emit('abc');
    expect(val).toBe(1);
  });
});
