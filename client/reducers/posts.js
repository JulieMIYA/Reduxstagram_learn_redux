const postsReducer = (state= [], action)=>{
    switch(action.type){
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes+10 },
                ...state.slice(i + 1)
            ]
        default :
            return state;
    }
    return state;
};
export default postsReducer;