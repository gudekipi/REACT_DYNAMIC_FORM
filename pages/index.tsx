import { Provider } from 'react-redux';
import Form from '../components/Form';
import Layout from '../components/Layout'
import Loader from '../components/Loader';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <Layout>
      <Loader />
      <Form/>
    </Layout>
  </Provider>
);

export default App;


