import {
  useState,
  useMemo,
  useCallback,
  memo,
} from "react";

const Child = memo(({ products, onDelete }) => {
  console.log("Child Render");

  return (
    <>
      {products.map((p) => (
        <div key={p.id}>
          {p.name}

          <button onClick={() => onDelete(p.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
});

export default function App() {
  const [count, setCount] = useState(0);

  const products = useMemo(
    () => [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Phone" },
    ],
    []
  );

  const handleDelete = useCallback((id) => {
    console.log(id);
  }, []);

  return (
    <>
      <button
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>

      <Child
        products={products}
        onDelete={handleDelete}
      />
    </>
  );
}