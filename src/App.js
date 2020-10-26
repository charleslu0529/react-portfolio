import React from 'react';
import './App.css';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div className="App">
        <Container>
            <Navigation />
            <Container>
                Hello World! This is where content will be!
            </Container>
        </Container>
    </div>
  );
}

export default App;
