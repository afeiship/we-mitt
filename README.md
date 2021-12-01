# winevt-mitt
> Global(window) event emitter.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/winevt-mitt
```

## usage
```js
import WinevtEmit from '@jswork/winevt-mitt';

const wemiter = new WinevtEmit();
// on
const res = wemiter.on('abc', ()=>{
  console.log('attach abc event');
});
// do something...
// detatch
res.destory();
```

## apis
| name | params       | description                          |
| ---- | ------------ | ------------------------------------ |
| on   | name,handler | register an event                    |
| off  | name,handler | unregister an event                  |
| emit | name,obj     | fire an event                        |
| one  | name,obj     | fire an event,only can register once |

## license
Code released under [the MIT license](https://github.com/afeiship/winevt-mitt/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/winevt-mitt
[version-url]: https://npmjs.org/package/@jswork/winevt-mitt

[license-image]: https://img.shields.io/npm/l/@jswork/winevt-mitt
[license-url]: https://github.com/afeiship/winevt-mitt/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/winevt-mitt
[size-url]: https://github.com/afeiship/winevt-mitt/blob/master/dist/winevt-mitt.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/winevt-mitt
[download-url]: https://www.npmjs.com/package/@jswork/winevt-mitt
