import './App.css';
import { Container } from 'react-bootstrap'

import TextArea from './components/TextArea';
function App() {
  return (
    <Container className='App d-flex flex-column justify-content-center'>
      <TextArea/>
    </Container>
  );
}

export default App;
