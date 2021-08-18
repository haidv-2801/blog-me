import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import BlogPage from './pages/BlogPage';
import AuthPage from './pages/AuthPage';
import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackGroundVideo from './components/common/BackGroundVideo';
import BlogDetail from './components/pages/blog/BlogDetail';
import AddNewBlog from './components/pages/blog/AddNewBlog';
import { AuthContext } from './contexts/auth-context';
import { useContext } from 'react';

const Main: React.FC = (props) => {
  return <div className="main">{props.children}</div>;
};

const backGroundVideo = <BackGroundVideo />;
const backDropElement = document.getElementById('backdrop') as HTMLElement;

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      {ReactDOM.createPortal(backGroundVideo, backDropElement)}

      <Header />

      <Main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          <Route path="/home" exact>
            <HomePage />
          </Route>

          <Route path="/blog">
            <BlogPage />
          </Route>

          <Route path="/detail">
            <BlogDetail />
          </Route>

          <Route path="/about">
            <AboutPage />
          </Route>

          <Route path="/contact">
            <ContactPage />
          </Route>

          {authCtx.isLoggedIn && (
            <Route path="/add-new-blog">
              <AddNewBlog />
            </Route>
          )}

          <Route path="/auth">
            <AuthPage />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Main>

      <Footer />
    </Layout>
  );
}

export default App;
