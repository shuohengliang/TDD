import React from 'react';

const appointmentTimeOfDay = statrsAt => {
	const [h, m] = new Date(statrsAt).toTimeString().split(':');
	return `${h}:${m}`;
}



export const Appointment = ({customer}) => <div>{customer.firstName}</div>;
export const AppointmentsDayView = ({appointments}) => {
	<div id="appointmentsDayView">
		<ol>
      		{appointments.map(appointments => (
        		<li key={appointments.startsAt}>{appointmentTimeOfDay(appointments.startsAt)}</li>
      		))}
    	</ol>
  	</div>

	return (
		<div id="appointmentsDayView">
			<ol>
				{appointments.map(appointments => (
					<li key={appointments.startsAt}>{appointmentTimeOfDay(appointments.startsAt)}</li>
				))}
			</ol>
			{appointments.length === 0 ? (
				<p>There are no appointments today</p>
			) : (
				<Appointment {...appointments[0]} />	
			)}
		</div>
	);
};
