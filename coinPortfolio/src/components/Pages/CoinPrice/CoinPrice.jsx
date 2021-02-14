import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import CoinPriceItem from './CoinPriceItem/CoinPriceItem';
import './CoinPrice.css'
import { coinsApiContext } from '../../../App';

function CoinPrice() {

    const coinsApi = useContext(coinsApiContext)

    const [loading, setLoading] = useState(false);
    const [coins, setCoins] = useState([]);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState('');

    useEffect(() => {
        
        const getCoins = async() => {
            setLoading(true);
            try {
              const response = await axios.get(coinsApi);
              setCoins(response.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
          }
        getCoins();
        // axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        // .then(res => {
        //     setCoins(res.data)
        //     console.log(res.data)
        // }).catch(error => console.log(error));

    },[])

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
    )
    

    if (loading) {
        return <div className="loading"></div>
    }
    if (!coins) {
        return null;
    }
    if (error) {
        return <div> 에러가 발생했습니다...</div>
    }

    return (
        <div className="coinprice-container">
            <div className="coin-search">
                <h1 className="coin-text">Coin Current Price</h1>
                <form>
                    <input type="text" placeholder="거래량 순위 top 100 영문 입력" className="coin-input" onChange={handleChange}/>
                </form>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <CoinPriceItem 
                    key={coin.id}
                    name={coin.name}
                    image={coin.image} 
                    symbol={coin.symbol}
                    price={coin.current_price}
                    priceChange={coin.market_cap_change_percentage_24h}/>
                )
            })}
        </div>
    )
}

export default CoinPrice
