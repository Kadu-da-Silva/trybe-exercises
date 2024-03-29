import React from 'react';
import { connect } from 'react-redux';
// import { actionCreator, clickCounter } from './redux/actions';
import './App.css'

class App extends React.Component {
  render() {
    const { dispatch, countState, clicksCount } = this.props;

    //  const dispatchAll = (add = 1) => {
    //   dispatch(actionCreator(add));
    //   dispatch(clickCounter());
    // };

    const dispatchAll = (add = 1) => {
      return {
        type: 'INCREMENT_ALL',
        payload: {
          increment: add,
          clicks: true
        }
      };
    };

    return (
      <div className='App'>
        <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatch(dispatchAll())}>Incrementa 1</button>
        <button onClick={() => dispatch(dispatchAll(5))}>Incrementa 5</button>
        <h3>Número de clicks: {clicksCount}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.count,
  clicksCount: state.clicks,
});

export default connect(mapStateToProps)(App);