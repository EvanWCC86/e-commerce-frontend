
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from 'react-icons/fa';
const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  const title = item.title
  const subtitle = title.substring(0,30)
  return (
    <div className="cartItem">
      <Link to={`/product/${item._id}`} className="cartItem__image">
        
          <img src={item.image} alt={item.title} />
        
      </Link>
      <div className="cartItem__content">
       
          <p className="cartItem__title">{subtitle}</p>
        
        <p className="cartitem__price">${item.price}</p>
        <select
          value={item.qty}
          onChange={(e) => qtyChangeHandler(item._id, e.target.value)}
          className="cartItem__select"
        >
          {[...Array(item.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <button
          className="cartItem__deleteBtn"
          onClick={() => removeHandler(item._id)}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
