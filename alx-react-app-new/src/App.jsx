import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter'; // Import Counter component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Counter /> {/* Add the Counter component here */}
        <Footer />
      </div>
    </>
  );
}

export default App;

