import SecondChild from '../SecondChild/SecondChild';
import { useDispatch,useSelector } from 'react-redux';

const Child=()=>{

    const dispach = useDispatch();
    const counter= useSelector(state => state.counter)

    return(
        <div>
        <button onClick={()=>dispach({type:"changeIncrease"})} >increse</button>

        <SecondChild/>
        </div>
    )
}
export default Child;