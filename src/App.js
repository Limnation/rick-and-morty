import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Importing components
import Footer from "./components/Footer";
// Importing Pages
import Nav from "./components/Nav";
import Landing from "./components/Landing";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Route exact path="/">
          <Landing />
        </Route>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}
