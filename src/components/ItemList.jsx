import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = ({ items, handleDelete }) => {
  return (
    <>
      {items.length > 0 ? (
        items.map((item) => <Item key={item.id} item={item} handleDelete={handleDelete} />)
      ) : (
        <p>No items found</p>
      )}
    </>
  );
};

// Prop validation
ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ItemList;
