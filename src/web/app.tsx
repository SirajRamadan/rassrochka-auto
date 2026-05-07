import { Route, Switch } from "wouter";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/home";
import AutoPage from "./pages/auto";
import UsloviyaPage from "./pages/usloviya";
import ZayavkaPage from "./pages/zayavka";
import TradeInPage from "./pages/tradein";
import PremiumPage from "./pages/premium";
import VikupPage from "./pages/vikup";
import ContactsPage from "./pages/contacts";

function App() {
  return (
    <Provider>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/auto" component={AutoPage} />
        <Route path="/usloviya" component={UsloviyaPage} />
        <Route path="/zayavka" component={ZayavkaPage} />
        <Route path="/trade-in" component={TradeInPage} />
        <Route path="/premium" component={PremiumPage} />
        <Route path="/vikup" component={VikupPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
      <Footer />
      {import.meta.env.DEV && <AgentFeedback />}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
