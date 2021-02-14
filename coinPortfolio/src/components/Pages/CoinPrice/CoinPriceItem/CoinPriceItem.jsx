import React from 'react'
import './CoinPriceItem.css'
import { FaWonSign } from "react-icons/fa";

function CoinPriceItem({image, name, symbol, price, priceChange}) {
    return (
        <div className="coinprice-item-container">
            <div className="coinprice-item-img-container">
                <img className="coinprice-item-img" src={image} alt="crypto"/>
            </div>
            <div className="coinprice-item-container-1">
                <h4 className="coinprice-item-name">{name}</h4>
                <h4 className="coinprice-item-symbol">({symbol})</h4>
            </div>
            <div className="coinprice-item-container-2">
                <h4 className="coinprice-item-price">{price}</h4>
                <FaWonSign className="coinprice-item-icon" />
                {priceChange < 0 ?
                (<p className="coinprice-item-percent red">{priceChange.toFixed(2)}%</p>) 
                : (<p className="coinprice-item-percent green">{priceChange.toFixed(2)}%</p>)}
            </div>
        </div>
    )
}

export default CoinPriceItem
