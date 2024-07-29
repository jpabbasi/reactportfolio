import ReactDOM from 'react-dom/client'
import App from './App';
import {ThemeProvider} from './context/theme-context'
import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>
);