import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="container">
    <header className="header">
      <h1 className="title">Cool To do List</h1>
    </header>
    <main className="main">
      <App />
    </main>
    <footer className="footer">
      <p className="footer-text">Powered by Josseph Downs</p>
    </footer>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
