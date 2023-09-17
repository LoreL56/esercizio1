import './logos.css';

function Logos(props) {

  const classes = 'App-logo ' + props.className;
  return (
      <img className={classes} src={props.src} alt={props.alt} /> 
  );
}

export default Logos;
