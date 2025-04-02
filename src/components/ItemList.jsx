import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = ({ items, handleDelete, handleEdit }) => {
  return (
    <>
      {items.length > 0 ? (
        items.map((item) => (
          <Item key={item.id} item={item} handleDelete={handleDelete} handleEdit={handleEdit} />
        ))
      ) : (
        <p>No items found</p>
      )}
    </>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default ItemList;
