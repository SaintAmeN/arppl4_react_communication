import logo from './assets/logo.svg';
import classes from './App.module.css';
import Navigator from "./components/Navigator";
import PageBody from "./components/PageBody";

function App() {
    return (
        <div className={classes.App}>
            <Navigator/>
            <PageBody/>
        </div>
    );
}

export default App;
