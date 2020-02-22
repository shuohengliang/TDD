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
    
    const today = new Date();
    const appointments = [
        {startsAt: today.setHours(12, 0), customer: {firstName: "Ashley"}},
        {startsAt: today.setHours(13, 0), customer: {firstName: "Jordan"}}
    ]

    beforeEach(() => {
        container = document.createElement("div");
    });

    const render = component => ReactDOM.render(component, container);

    it("renders a div with the right id", () => {
        
        
        render(<AppointmentsDayView appointments={appointments} />);
        expect(container.querySelector('ol').children).toHaveLength(2);
        expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
    });
    
    it("initally shows a message saying there are no appointments today", () =>{
        render(<AppointmentsDayView appointments={[]} />);
        expect(container.testContent).toMatch("There are no appointments today");
    });
    
    it("select the first appointment by default", () => {
        render(<AppointmentsDayView appointments={appointments}/>);
        expect(container.testContent).toMatch('Ashley');

    });
});