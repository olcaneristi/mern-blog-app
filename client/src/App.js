import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PostsList from './components/PostsList';
/* import AddPostForm from './components/AddPostForm';*/
import PostDetails from './components/PostDetails';
import Header from './components/Header';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/posts" component={PostsList} />
          <Route exact path="/posts/:id" component={PostDetails} />
          <Redirect from="/" to="/posts" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
