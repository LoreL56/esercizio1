import './concept.css'
//import Logos from '../ui/logos';

function Concept(props) {
  return (
      <li className="Concept">
        <img className="Concept-logo" src={props.item.image} alt={props.item.title} />
        <h2>{props.item.title}</h2>
        <p>{props.item.description}</p>
      </li>
  );
}

export default Concept;
