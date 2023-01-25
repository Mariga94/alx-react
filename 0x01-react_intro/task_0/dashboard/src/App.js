import "./App.css";
import logo from "./holberton-logo.jpg";


export default function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} alt="holberton-logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}
