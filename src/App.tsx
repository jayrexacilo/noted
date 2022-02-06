import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NoteList from './layouts/Dashboard/NotesList';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/"><NoteList/></Route>
      </Switch>
    </Router>
  );
}

export default App;
