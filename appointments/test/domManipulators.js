import ReactDOM from 'react-dom';

export const createContainer = () => {
    const container = document.createElement('div');

    return {
        render: componemt => ReactDOM.render(compnemt, container), 
        container
    };

};