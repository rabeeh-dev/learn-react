import UserCard from "./UserCard";

const users = [
  { id: 1, name: "Rabeeh", role: "Developer" },
  { id: 2, name: "John", role: "Designer" },
  { id: 3, name: "Sara", role: "Developer" },
];

function UserList() {
  return (
    <>
      {users.map((el) => {
        return (
          <UserCard
            key={el.id}
            name={el.name}
            role={el.role}
          />
        );
      })}
    </>
  );
}

export default UserList;