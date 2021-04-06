import React from 'react'
import "./Product.css"
import StarsIcon from '@material-ui/icons/Stars';
import { useStateValue } from "./StateProvider"

export default function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue()

    // console.log('This is the basket >>>', basket)


    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating"> 
                    {Array(rating).fill().map((_, i) => (
                        <p><StarsIcon /></p>
                    ))}
                </div>
            </div>
                    
            <img 
                src={image}
            />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}
