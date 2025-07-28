import React from "react"
import {positions} from "../data/data"

export default function Positions(){
    return(
        <>
        <h1>Positions</h1>

        <div className="order-table">
                    <h1>Holdings ({positions.length})</h1>
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Instruments</th>
                            <th>Qty. </th>
                            <th>Avg. </th>
                            <th>LTP</th>
                            <th>P&L</th>
                            <th>chg.</th>
                            
                        </tr>
                        
        
                        {positions.map((stock, index)=>{
                            const currValue = stock.price * stock.qty;
                            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                            const profClass = isProfit? "Profit" : "Loss";
                            const dayClass = stock.isLoss ? "Loss" : "Profit";
        
                            return(
                                <tr key={index} className="">
                                    <td>{stock.product}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.avg.toFixed(2)}</td>
                                    <td>{stock.price.toFixed(2)}</td>
                                   
                                    <td>{(currValue - stock.avg *stock.qty).toFixed(2)}</td>
                                    
                                    <td>{stock.day}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
        </>
    )
}