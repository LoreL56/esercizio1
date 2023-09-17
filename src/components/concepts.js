import Concept from './concept';
import './concepts.css';

function Concepts(props) {
  return (
    <ul id="concepts" className="Concepts">
      <Concept item={props.items[0]}/>
      <Concept item={props.items[1]}/>
      <Concept item={props.items[2]}/>
    </ul>
  );
}

export default Concepts;
