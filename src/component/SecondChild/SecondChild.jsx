import { useContext }from 'react';
import { Context } from '../../App';

const SecondChild=()=>{

    const {counter,setCounter}=useContext(Context);

    return(
        <div style={{backgroundColor:"red"}}>
        <h4>{counter}</h4>
        </div>
    )
}
export default SecondChild;