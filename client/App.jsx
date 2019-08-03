import React, { Component } from 'react';
import Wrapper from './components/Wrapper.jsx'


class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Wrapper />
            </div>
        )
    }
}

export default App;