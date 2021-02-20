import { useContext } from "react";
import { Context } from "../../App"

function Counter10(props){
    
    const {countByTen} = useContext(Context);

    return (
        <div className="container">
            <div className="item">                
                <button className="btn" onClick={
                    () => {
                        countByTen();                        
                    }
                }>count by ten</button>
            </div>
        </div>
    )
}

export default  Counter10