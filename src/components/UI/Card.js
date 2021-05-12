import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className; // this space should be there
    return <div className ={classes}>{props.children}</div>
}

export default Card;