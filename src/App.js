import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Importing components
import Footer from "./components/Footer";
// Importing Pages
import Landing from "./pages/Landing";
// Importing a CSS file
import "./css/landing.css";

import App from "./App";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navtop />
        <Route exact path="/">
          <Landing />
        </Route>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}
