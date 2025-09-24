// index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
// import './assets/vendor/glightbox/css/glightbox.min.css';
// import './assets/vendor/swiper/swiper-bundle.min.css';
import '@fontsource/roboto';
import '@fontsource/ubuntu';
import '@fontsource/nunito';
import './assets/css/main.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
