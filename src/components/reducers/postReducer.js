const initialState={
    items:[],
    post:[]
}
const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case "GET_DATA":
        return{
            ...state,
            items:action.payload
        }
        case "POST_DATA":
        return {
            ...state,
            post:[...state.post,action.payload]
        }
        default:
        return state;
    }
}
export default postReducer;