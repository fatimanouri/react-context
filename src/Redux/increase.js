const Increase = (state= 0,action)=>{
    switch (action.type) {
        case "changeIncrease":
            return state + 1;
            
    
    
        default:
            return state;
    }
}
export default Increase;