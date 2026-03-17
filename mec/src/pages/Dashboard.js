import { Link } from "react-router-dom"

function Dashboard(){
return(

<div className="container">

<h2>Dashboard</h2>

<div className="dashboard-menu">

<Link to="/add">
<button>Add Sneaker</button>
</Link>

<Link to="/collection">
<button>View My Collection</button>
</Link>

<Link to="/wishlist">
<button>Wishlist Sneakers</button>
</Link>

</div>

</div>

)
}

export default Dashboard