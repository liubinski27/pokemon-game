import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import background1 from './img/bg1.jpg';
import background2 from './img/bg2.jpg';

function App() {
  return (
    <div className="App">
      <Header
        title="It is a Header!"
        descr="description"
      />
      <Layout
        title="Hello!"
        descr="My name is Kostia!"
        urlBg={ background1 }
      />
      <Layout
        title="I want"
        descr="to learn React!"
        colorBg="#4fc9ea"
      />
      <Layout
        title="title"
        descr="text :)"
        urlBg={ background2 }
      />
      <Footer />
    </div>
  );
}

export default App;
