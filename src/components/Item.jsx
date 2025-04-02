import PropTypes from "prop-types";
import { useState } from "react";

const Item = ({ item, handleDelete, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [editedStatus, setEditedStatus] = useState(item.status);

  const handleSave = () => {
    handleEdit(item.id, editedName, editedStatus);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <>
          <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          <input type="text" value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h1>{item.name}</h1>
          <p>{item.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </>
      )}
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
  handleEdit: PropTypes.func.isRequired,
};

export default Item;
