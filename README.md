# we-mitt
> Global(window) event emitter.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/we-mitt
```

## usage
```js
import WeEmitt from '@jswork/we-mitt';

const wemiter = new WeEmitt();
// on
const res = wemiter.on('abc', (data)=>{
  console.log('attach abc event', data);
});

// do something...
wemiter.emit('abc', { id: 1, name: 'xx' });

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
Code released under [the MIT license](https://github.com/afeiship/we-mitt/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/we-mitt
[version-url]: https://npmjs.org/package/@jswork/we-mitt

[license-image]: https://img.shields.io/npm/l/@jswork/we-mitt
[license-url]: https://github.com/afeiship/we-mitt/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/we-mitt
[size-url]: https://github.com/afeiship/we-mitt/blob/master/dist/we-mitt.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/we-mitt
[download-url]: https://www.npmjs.com/package/@jswork/we-mitt
