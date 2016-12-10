const postComment= (state =[], action)=>{
    switch (action.type) {
        case "ADD_COMMENT" :
            const {text,user,}= action;
            return [...state, {text, user}];
        case "REMOVE_COMMENT" :
            const {index} = action;
            return [...state.slice(0, index),...state.slice(index+1)];
        default:
            return state;
    }
}


const commentsReducer = (state= [], action)=> {
    const { postId} = action;

    if(typeof postId!== undefined)
    {
        //console.log({...state});
        return{
            // take the current state
            ...state,
            //overwrite this post with a new one
            [postId]: postComment(state[postId], action)
        };
    }

}
export default commentsReducer;