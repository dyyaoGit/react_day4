
export default (state, action) => {
    if(state==undefined){
        state = {
            goods: [

            ]
        }
    }
    
    switch (action.type) {
        case 'INIT_GOODS':
            return {
                ...state,
                goods: action.data
            }
        case 'ADD':
            return {
                ...state,
                goods: state.goods.map(good => {
                    if(good.id==action.id){
                        good.count ++;
                        return good
                    }
                    return good
                })
            }
        case 'REDUCE':
            return {
                ...state,
                goods: state.goods.map(good => {
                    if(good.id == action.id){
                        good.count --;
                        return good
                    }
                    return good
                })
            }
        default:
            return state
    }
}