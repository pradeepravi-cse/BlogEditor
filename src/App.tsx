import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connectedEditotWindow as EditorWindow } from "./EditorWindow/EditorWindow";
import { Provider } from "react-redux";
import "./App.scss";
import { connectedPostView as PostView } from "./PostView/PostView";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={PostView} />
          <Route path="/editDoc" component={EditorWindow} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
