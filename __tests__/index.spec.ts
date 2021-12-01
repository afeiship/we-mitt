import WinEvtEmitt from '../src';

describe('01/basic api worked', () => {
  test('emitter.on one times', (done) => {
    const emitter = new WinEvtEmitt();
    let ifeabc = false;

    const res = emitter.on('abc', () => {
      ifeabc = true;
      expect(ifeabc).toBe(true);
    });

    setTimeout(() => {
      expect(ifeabc).toBe(false);
      emitter.emit('abc');
      res.destroy();
      done();
    }, 100);
  });

  test('emitter.on multiple times', (done) => {
    const emitter = new WinEvtEmitt();
    let counter = 0;

    const res1 = emitter.on('abc', () => {
      counter++;
      expect(counter).toBe(1);
    });

    const res2 = emitter.on('abc', () => {
      counter++;
      expect(counter).toBe(2);
    });

    setTimeout(() => {
      expect(counter).toBe(0);
      emitter.emit('abc');
      res1.destroy();
      res2.destroy();
      done();
    }, 100);
  });

  test('emitter.on one time, trigger multple times', (done) => {
    const emitter = new WinEvtEmitt();
    let counter = 0;

    const res = emitter.on('abc', () => {
      counter++;
    });

    setTimeout(() => {
      expect(counter).toBe(0);
      emitter.emit('abc');
      emitter.emit('abc');
      emitter.emit('abc');
      expect(counter).toBe(3);
      res.destroy();
      done();
    }, 100);
  });
});
