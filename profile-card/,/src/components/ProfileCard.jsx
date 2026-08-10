function ProfileCard({name , age}){
    return (
        <>
        <div style={{width : 150,height:150,backgroundColor:'red',display:"flex",flexDirection:'column' , alignItems:'center' , justifyContent:'center'} }>
            <p>Name : {name}</p>
            <p>Age : {age}</p> 
        </div>
        </>
    )
}

export default ProfileCard