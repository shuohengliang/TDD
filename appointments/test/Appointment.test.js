import React from 'react';
import ReactDOM from 'react-dom';

import { Appointment, AppointmentsDayView } from '../src/Appointments';

describe('Appointment', () => {  
    let container; 
    let customer;

    beforeEach(() => {
        container = document.createElement('div');
    });
    const render = component => ReactDOM.render(component, container); 

    it('renders the customer first name', () => {  
        customer = {firstName: 'Jordon'};
        render(<Appointment customer={customer}/>);
        expect(container.textContent).toMatch('Jordon');
    }); 
    
});

describe("AppointmentsDayView", () => {
    let container; 
    
    beforeEach(() => {
        container = document.createElement("div");
    });

    const render = component => ReactDOM.render(component, container);

    it("renders a div with the right id", () => {
        const today = new Date();
        const appointments = [
            {startsAt: today.setHours(12, 0)},
            {startsAt: today.setHours(13, 0)}
        ]
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelector('ol').children).toHaveLength(2);
        expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
    });
    
});