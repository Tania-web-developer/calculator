import { useContext } from "react";
import { Context } from "../../App"

function CounterSq(){
   
    const {countRootSq} = useContext(Context);

    return (
        <div className="container">
            <div className="item">                
                <button className="btn" onClick={
                    () => {
                        countRootSq();                        
                    }
                }>count rootSq</button>
            </div>
        </div>
    )
}

export default  CounterSq