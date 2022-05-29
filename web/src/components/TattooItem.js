import './TattooItem.css'

//
function TattooItem(props) {

    //props received tattoo object
    const{tattoo, onTattooClicked} = props;
    return(
        <div className="tattoo-item">
            <img src={tattoo.thumbnailUrl} onClick={() => {onTattooClicked(tattoo)}}/>
            <h4>{tattoo.title}</h4>
        </div>
    )
}

export default TattooItem;