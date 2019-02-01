import React, { Component } from 'react';
import Counter from '../components/Counter';
import CounterContainer from '../containers/CounterContainer';

class App extends Component{
    render(){
        return(
            <div>
                <CounterContainer>
                    <Counter />
                </CounterContainer>
            </div>
        );
    }
}

export default App;