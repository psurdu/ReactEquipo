import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { MenuElements } from './data/MenuElements';

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <div>
          {MenuElements.map((item) => {
            return (
              <Route
                key={item.id}
                path={item.path}
                exact
                component={item.component}
              />
            );
          })}
      </div>
    </Router>
  );
}
