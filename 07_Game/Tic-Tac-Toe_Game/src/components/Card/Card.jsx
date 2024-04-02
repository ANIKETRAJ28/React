import Icon from "../Icons/Icon"
import './Card.css'
function Card({onPlay, player, index}) {
    let icon = <Icon/>
    if(player == 'X') {
        icon = <Icon name={'Cross'}/>
    } else if(player == 'O') {
        icon = <Icon name={'Circle'}/>
    }
    return(
        <div className="card" onClick={() => onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;