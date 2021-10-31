import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './views';
import ChoiceBread from './views/ChoiceBread'
import './App.css'
import MeatChoice from './views/MeatChoice'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/choice-bread' component={ChoiceBread} />
      <Route exact path='/choice-meat' component={MeatChoice} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
