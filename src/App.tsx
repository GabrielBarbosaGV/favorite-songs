import { Provider } from 'react-redux';
import store from './redux/store';
import StubView from './views/StubView';

function App() {
  return (
    <Provider store={store}>
      <StubView />
    </Provider>
  );
}

export default App
