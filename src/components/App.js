import React from 'react';
//import Header from './Header';

export default class App extends React.Component {

    state = {
        
    };

    render() {
        const subtitle = 'put yr life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}/>
            </div>
        )
    };
}
