import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// MUI Stuff
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Components
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import PageNotFound from "./pages/pageNotFound.js";

// Pages
import home from "./pages/home";

// Utils Stuff
import themeObjectContent from "./utils/theme";

const theme = createMuiTheme(themeObjectContent);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route component={PageNotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
