import './header.css'
import Logos from '../ui/logos';
import keyConceptsImage from '../assets/images/key-concepts.png';

function Header(props) {
  return (
      <header className='App-header'>
        <Logos className='App-logo' src={keyConceptsImage} alt="Medal badge with a star" />
        <h1 className='App-link'>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
  );
}

export default Header;
