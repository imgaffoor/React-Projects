function Fri(){
    const friends = ['suresh', 'ramesh', 'naresh'];
    const family_friends = ['lokesh', 'mahesh', 'somesh'];
    const school_friends = ['ganesh', 'mukesh', 'jayesh'];
    const Friends = [...friends, ...family_friends, ...school_friends];
    const listOfFriends = Friends.map((friend,index) =>
                                              (<li key={index}>{friend}</li>)
                                     );
    return(
        <>
        <h1 style={{color:'powderblue'}}>Friends List</h1>
        <ul style={{color:'snow'}}>{listOfFriends}</ul>
        </>
    );
}
export default Fri;