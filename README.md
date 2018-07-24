# react-mui-radio
> Radio for mui

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: noop
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-mui-radio --registry=https://registry.npm.taobao.org
```

```js
import ReactMuiRadio from 'react-mui-radio';
```

```scss
// customize your styles:
$react-mui-radio-options:(
);

@import 'node_modules/react-mui-radio/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-mui-radio --save
// import : import ReactMuiRadio from 'react-mui-radio'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log('checked!', e.target.value);
  };

  render(){
    return (
      <div className="hello-react-mui-radio">
        <ReactMuiRadio onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}

```
