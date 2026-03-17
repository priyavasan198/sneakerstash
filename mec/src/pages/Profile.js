function Profile(){

const user = JSON.parse(localStorage.getItem("user"))

return(

<div className="center-box">
  <div className="box">

    <h2>My Profile</h2>

    {user ? (
      <>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
      </>
    ) : (
      <p>No user data found</p>
    )}

  </div>
</div>

)

}

export default Profile