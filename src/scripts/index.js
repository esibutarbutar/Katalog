import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './list-card.js';
import './footer.js';


console.log('Hello Coders! :)');
const drawerButton = document.querySelector('#drawer-button');
const drawerNavigation = document.querySelector('#main-nav');

drawerButton.addEventListener('click', () => {
  drawerNavigation.classList.toggle('open');
});








