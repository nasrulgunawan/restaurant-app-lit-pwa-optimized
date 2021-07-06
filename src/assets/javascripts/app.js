import 'regenerator-runtime';
import '../stylesheets/app.css';
import './components/navbar/navbar';
import './components/hero/hero';
import './components/content/content';
import './components/footer/footer';
import App from './views/app';
import swRegister from './utils/sw-register';
import webSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  webSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
