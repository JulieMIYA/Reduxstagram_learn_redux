//increment
export const increment = (index)=>{
    return {
        type: "INCREMENT_LIKES",
        index
    }
}
//add comment
export const addComment = (postId, user, text)=>{
    return {
        type: "ADD_COMMENT",
        postId,
        user,
        text
    }
}

//remove comment
export const removeComment = (postId, index)=>{
    return {
        type: "REMOVE_COMMENT",
        postId,
        index
    }
}