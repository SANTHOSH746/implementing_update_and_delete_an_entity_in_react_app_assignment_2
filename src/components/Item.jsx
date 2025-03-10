import PropTypes from "prop-types";

const Item = ({ item, handleDelete }) => {
  return (
    <>
      <h1>{item.name}</h1>
      <p>{item.status}</p>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </>
  );
};


Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Item;
