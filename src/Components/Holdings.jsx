
import {holdings} from "../data/data";

export default function Holdings(){
    return(
        <>
        <div className="order-table">
            <h1>Holdings ({holdings.length})</h1>
            <table>
                <tr>
                    <th>Instruments</th>
                    <th>Qty. </th>
                    <th>Avg. cost</th>
                    <th>LTP</th>
                    <th>Cur. val</th>
                    <th>P&L</th>
                    <th>Net chg.</th>
                    <th>Day chg.</th>
                </tr>
                

                {holdings.map((stock, index)=>{
                    const currValue = stock.price * stock.qty;
                    const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                    const profClass = isProfit? "Profit" : "Loss";
                    const dayClass = stock.isLoss ? "Loss" : "Profit";

                    return(
                        <tr key={index} className="">
                            <td>{stock.name}</td>
                            <td>{stock.qty}</td>
                            <td>{stock.avg.toFixed(2)}</td>
                            <td>{stock.price.toFixed(2)}</td>
                            <td>{currValue.toFixed(2)}</td>
                            <td>{(currValue - stock.avg *stock.qty).toFixed(2)}</td>
                            <td>{stock.net}</td>
                            <td>{stock.day}</td>
                        </tr>
                    )
                })}
            </table>
        </div>


        <div className="row">
            <div className="col">
                <h5>
                    29,875.<span>55</span>{" "}
                </h5>
                <p>Total Investment</p>
                <div className="col">
                    <h5>
                    31,485.<span>95</span>{" "}
                    </h5>
                    <p>Current Value</p>
                </div>
                <div className="col">
                    <h5>
                    1553.40 (+5.20%){" "}
                    </h5>
                    <p>P&L</p>
                </div>

            </div>
        </div>


        </>
    )
}