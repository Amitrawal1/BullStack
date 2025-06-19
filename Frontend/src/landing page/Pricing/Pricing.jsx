import './Pricing.css'
export default function Pricing(){
    return(
        <>
        <div className="pricing">
            <div className="sections">
                <h4>$</h4>
                <h1>0</h1>
                <h2>Account Maintenance Charges </h2>
                <p>No account maintenance charges for the first year. ₹299/year from the second year onwards.</p>
            </div>
            <div className="sections">
            <h4>$</h4>
                <h1>0</h1>
                <h2>Brokerage on Mutual Funds and IPOs  </h2>
                <p>Invest in Mutual Funds and IPOs with absolutely zero brokerage.</p>
            </div>
            <div className="sections">
            <h1>20</h1>
                <h2>Brokerage Charges</h2>
                <p>Maximum ₹20 per executed order or 0.03% (whichever is lower) for Intraday, Futures & Options trades.</p>
            </div>
        </div>
        <p>See more --</p>
        </>
    )
}