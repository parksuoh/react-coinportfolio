import React, { useEffect, useState } from 'react'
import produce from 'immer'
import CoinPlanForm from './CoinPlanForm/CoinPlanForm'
import CoinPlanList from './CoinPlanList/CoinPlanList'
import './CoinPlan.css'

function CoinPlan() {

    const [coinPlans, setCoinPlans] = useState({
        1: {
            id: 1,
            text: '비트코인 시세 4000만원 이하 일때 매수',
            isComplete: false,
        },
        2 : {
            id: 2,
            text: '리플 시세 500원 이상 일때 매도',
            isComplete: false,
        },
        3 : {
            id: 3,
            text: '이더리움 시세 200000원 이상 일때 매도',
            isComplete: false,
        },
    })



    const addCoinPlan = (coinPlanInput) => {
        setCoinPlans(coinPlans => { //이전의 상태
            const updated = {...coinPlans}; //불변성 지키기
            updated[coinPlanInput.id] = coinPlanInput;
            return updated
        })

    }

    const deleteCoinPlan = (coinPlanInput) =>{
        setCoinPlans(coinPlans => {
            const updated = {...coinPlans};
            delete updated[coinPlanInput.id];
            return updated
        })
    }

    const isComplete = coinPlanInput => {


        setCoinPlans(coinPlans => {

            const updated = {...coinPlans};
            updated[coinPlanInput.id] = {id: coinPlanInput.id,
                                        text: coinPlanInput.text,
                                        isComplete: !coinPlanInput.isComplete,}
            return updated

        // immer 사용 잘안됨
        //     const nextArray = produce(coinPlans, draft => {
        //         const coinPlan = draft.coinPlans.find(coinPlan => 
        //             parseInt(Object.keys(coinPlans)) === coinPlanInputId)
        //         coinPlan.isComplete = !coinPlan.isComplete
                
        //     })

            // return nextArray;
            // const updated ={...coinPlans};
            // Object.keys(updated).map(key => { //key 값이 string  coinPlanInput 값은 number
            //     if(parseInt(key) === coinPlanInputId){
            //         updated[parseInt(key)].isComplete = !updated[parseInt(key)].isComplete
            //         return updated[parseInt(key)];
            //     }
            //     return updated[parseInt(key)];
            // })
            // return updated
            //첫클릭은 정상작동하지만 두번째 클릭부터는 작동오류
        //////
        //     return nextArray
        })
        // console.log(coinPlans)
    }

    // useEffect(() => {
    //     console.log(coinPlans)
    //     console.log(Object.keys(coinPlans))
    // }, [coinPlans])
 
    return (
        <div className="coinplan-container">
            <h1 className="coinplan-title">CoinPlan</h1>
            <CoinPlanForm addCoinPlan={addCoinPlan}/>
            <div className="coinplanList-container">
            {
                Object.keys(coinPlans).map(key => <CoinPlanList key={key} 
                    coinPlans={coinPlans[key]} 
                    deleteCoinPlan={deleteCoinPlan}
                    isComplete={isComplete} />)
            }
            </div>
        </div>
    )
}

export default CoinPlan
