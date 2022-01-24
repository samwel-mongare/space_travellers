import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar> </Navbar>
        <h1>let&apos;s get started Partner..haha</h1>
      </div>
    </Provider>

  );
}

export default App;
