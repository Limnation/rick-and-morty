import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Importing components
import Footer from "./components/Footer";
// Importing Pages
import Nav from "./components/Nav";
import Landing from "./pages/Landing";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Route path={process.env.PUBLIC_URL + "/"}>
          <Landing />
        </Route>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}
