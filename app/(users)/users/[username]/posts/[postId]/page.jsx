const SingleProfilePost =async(prope)=>{
    const user = await prope.params
    console.log(user)
    return(
        <h1>user : {user?.username}, PostID : {user?.postId} {" "}</h1>
    )
};

export default SingleProfilePost;