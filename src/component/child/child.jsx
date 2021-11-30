import {useContext} from 'react';
import { Context } from '../../App';
import SecondChild from '../SecondChild/SecondChild';
const Child=()=>{

    const {counter,setCounter} = useContext(Context);

    return(
        <div>
        <button onClick={()=> setCounter(counter+1)}>increse</button>
        <SecondChild/>
        </div>
    )
}
export default Child;