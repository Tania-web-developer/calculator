
import { useContext  } from "react"
import { Context } from "../../App"


function Result(probs){
    const {result} = useContext(Context);    
    return(
     <div>result: {result}</div>
    )
}

export default Result