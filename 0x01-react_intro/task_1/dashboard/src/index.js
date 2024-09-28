import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notify from './Notifications';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App />
        <div className='root-notifications'>
            <Notify />
        </div>
    </StrictMode>
)


