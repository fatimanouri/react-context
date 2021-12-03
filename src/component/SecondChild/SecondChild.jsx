import { useSelector } from "react-redux";

const SecondChild=()=>{
    const counter= useSelector(store => store?.counter)

    return(
        <div style={{backgroundColor:"red"}}>
        <h4>{counter}</h4>
        </div>
    )
}
export default SecondChild;