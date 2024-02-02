
export default function Tile({value,onClick,playerTurn}) {
    let hoverClass = null;
    if(value == null && playerTurn != null){
        hoverClass =`${playerTurn.toLowerCase()}`
    }
    return<>
        <div onClick={onClick} className={`tile ${hoverClass}-hover`}>
            {value}
        </div>
    </>
}
