import React from 'react';


export const CustomerForm = ({firstName}) => (
    <form id="customer">
        <label htmlFor="firstName">First Name: </label>
        <input readOnly type="text" name = "firstName" value={firstName} id="firstName"></input>
    </form>
);