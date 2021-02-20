import { useContext } from "react";
import { Context } from "../../App"

function Counter1(props) {   
    const {countByOne} = useContext(Context);
    return (
        <div className="container">
            <div className="item">
               
                <button className="btn" onClick={
                    () => {
                        countByOne();                       
                    }
                }>count by one</button>
            </div>
        </div>
    )
}

export default Counter1