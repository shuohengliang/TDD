import React from 'react';
import ReactDOM from 'react-dom';

import { Appointment } from '../src/Appointment';

describe('Appointment', () => {  
//     let container; 
//     let customer;

//     beforeEach(() => {
//         container = document.createElement('div');
//     });

//     const render = component => ReactDOM.render(component, container); 

it('renders the customer first name', () => {
    
    expect(document.body.textContent).toMatch('Ashley');
});
    // it('renders the customer first name', () => {  
    //     customer = {firstName: 'Jordon'};
    //     render(<Appointment customer={customer}/>);
    //     espect(container.textContent).toMatch('Jordon');
    // }); 
    
});
