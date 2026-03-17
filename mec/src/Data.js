import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Data() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
const waiting = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then ((res)=>res.json())
    .then ((data)=>setUser(data));
}
  if (!user) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
