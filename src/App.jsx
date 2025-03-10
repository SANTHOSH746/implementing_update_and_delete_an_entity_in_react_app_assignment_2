import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);

  // Fetch data from API when component mounts
  useEffect(() => {
    fetch(API_URI)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched items:", data); // Debugging
        setItems(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to delete an item
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return <ItemList items={items} handleDelete={handleDelete} />;
}

export default App;
