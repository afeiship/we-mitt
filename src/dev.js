import './dev.scss';
import ReactMuiRadio from './main';

/*===example start===*/

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
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
