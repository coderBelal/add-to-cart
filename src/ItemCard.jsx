import React from "react";
import { useCart } from "react-use-cart";
const ItemCard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-3">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <h4 className="card-text">{props.price}</h4>
          <p className="card-text">{props.desc}</p>
          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
