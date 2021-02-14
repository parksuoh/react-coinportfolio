import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { coinsApiContext } from '../../../App';
import './Home.css'

function Home() {

    const coinsApi = useContext(coinsApiContext)

    const [loading, setLoading] = useState(false);
    const [coins, setCoins] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      
        const getCoins = async() => {
          setLoading(true);
          try {
            const response = await axios.get(coinsApi);
            setCoins(response.data[Math.floor(Math.random() * 100)]);
          } catch (error) {
              setError(error);
          }
          setLoading(false);
        }
      
        getCoins();

    },[])



    // if (loading) {
    //     return <div className="loading"></div>
    // }
    if (!coins) {
        return null;
    }
    if (error) {
        return <div> 에러가 발생했습니다...</div>
    }

    
    return (
        <div className="home-container">
            
            <div className="home-box">
                <div className="home-title-box">
                    <h4 className="home-title"  > 추천 코인 </h4>
                    <button className="home-title-button" onClick={() => window.location.reload()}> 변경 </button>
                </div>
                <div className="home-coin">
                    {loading && <div className="loading"></div>}
                    <img className={loading ? "none" :"home-coin-img"} src={coins.image} alt="coinimage" />
                    <h3 className={loading ? "none" :"home-coin-id"} >{coins.id}</h3>
                    <h4 className={loading ? "none" :"home-coin-symbol"} >({coins.symbol})</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Home
