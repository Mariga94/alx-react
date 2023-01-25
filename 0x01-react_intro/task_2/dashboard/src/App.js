import "./App.css";
import logo from "./holberton-logo.jpg";
import { getFooterCopy, getFullYear } from "./utils";

export default function App() {
  return (
    <div>
      <div className="App-header">
        <img src={logo} alt="holberton-logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:
            <input type="email" name="email" id="email"/>
          </label>
          <label htmlFor="password">Password:
            <input type="password" name="password" id="password"/>
          </label>
          <button>OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}
