// import styles
import '../scss/app.scss';

// import modules
import './modules/isDarkTheme';

// import classes
import Header from './class/Header';
import Menu from './class/Menu';
import Modal from './class/Modal';
import Dropdown from './class/Dropdown';

let dropdowns = document.querySelectorAll('.dropdown-trigger');

if (dropdowns) {
    dropdowns.forEach((selector) => {
        const dropdown = new Dropdown(selector, { method: 'hover' });
    });
}

