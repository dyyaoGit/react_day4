export default (state, action) => {
    if(state == undefined){
        state = {
            name: "",
            sex: ""
        }
        return state
    }

    switch (action.type){
        case 'INIT_USER':
            return {
                name: action.name,
                sex: action.sex
            }
        default:
            return state
    }
}