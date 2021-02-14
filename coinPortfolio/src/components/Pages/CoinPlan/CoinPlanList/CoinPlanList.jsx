import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import './CoinPlanList.css'

function CoinPlanList({deleteCoinPlan, coinPlans, isComplete}) {
    return (
        <div className="coinplanlist-item">
            <h4 className={coinPlans.isComplete ? 'coinplanlist-item-text active' : 'coinplanlist-item-text'} onClick={() => isComplete(coinPlans)}>{coinPlans.text}</h4>
            <div className="coinplanlist-item-icons">
                <RiCloseCircleLine 
                    onClick={() => deleteCoinPlan(coinPlans)} 
                    className='coinplanlist-item-icon' />
            </div>
        </div>
    )
}

export default CoinPlanList
