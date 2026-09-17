const SingleProfile =async(prope)=>{
    const user = await prope.params
    return(
        <h1>user = {user?.username}</h1>
    )
};

export default SingleProfile;