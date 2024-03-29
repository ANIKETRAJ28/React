import './DogTile.css'

function DogTile(props) {
    const dog = "dog";
    const customeStyle = {fontSize: "20px", color: "red"};
    return (
        <div className={dog}>
            <img src={props.image}/>
            <h3 style={customeStyle}>{props.text}</h3>
            {props.children}
        </div>
    )
}

export default DogTile;