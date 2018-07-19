import axios from "axios";

export const add = (id) => ({
    type: 'ADD',
    id
})

export const reduce = (id) => ({
    type: 'REDUCE',
    id
})


export const initUser = (sex,name) => ({
    type: 'INIT_USER',
    sex,
    name
})

// export const initGoods = (data) => {
//     return {
//         type: 'INIT_GOODS',
//         data
//     }
// }

export const initGoods = () =>{
    return (dispatch,getState) => {
        let address = 'http://localhost:9000/item-lists'
        axios.get(address)
            .then(res => {
                let data = res.data.map(item => {
                    return {
                        ...item,
                        count: 0
                    }
                })
            dispatch({
                type: 'INIT_GOODS',
                data
            })
        })
    }
}