import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/header";
import Main from "./pages/main";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API

  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Container
          fluid
          style={{
            backgroundColor: "black",
          }}
        >
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>

          <Row>
            <Col>
              <Route exact path="/">
                <Main />
              </Route>
            </Col>
          </Row>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
