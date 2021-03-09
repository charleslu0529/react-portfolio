import React from 'react';
import Container from './components/Container/Container';
import Navigation from './components/Navigation/Navigation';
import Forthcoming from "./components/Forthcoming/Forthcoming";


function App() {
  return (
    <div className="App">
        <Container>
            <Navigation />
            <Container>
                <Forthcoming />
            </Container>
        </Container>
    </div>
  );
}

export default App;
