//libraries
import React from 'react';
//components
import Header from './Header';
import Map from './Map';
import Company from './Company';
import Route from './Route';

const App = () => {
    return (
        <div className='app-container'>
            <Header/>
            <Route path='/'>
                <Map/>
            </Route>
            <Route path='/company-x'>
                <Company companyName='x'/>
            </Route>
            <Route path='/company-y'>
                <Company companyName='y'/>
            </Route>
        </div>
    );
};

export default App;