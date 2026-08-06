import { useParams } from "react-router-dom";
const users = [
  { id: 1, name: "Rabeeh", age: 19 },
  { id: 2, name: "John", age: 22 },
  { id: 3, name: "Sara", age: 21 },
];

function UserDetails() {
  const params = useParams();
  const { id } = useParams();
  const user = users.find((el)=> el.id === Number(id))
  console.log(id);
  return(
    <>
    <h1>Welcome {user.name} with age : {user.age}</h1>
    </>
  )
}

export default UserDetails;
