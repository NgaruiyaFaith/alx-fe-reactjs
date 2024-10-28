import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header /> {/* Include Header component */}
        <MainContent /> {/* Include MainContent component */}
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Footer /> {/* Include Footer component */}
      </div>
    </>
  );
}

export default App;
