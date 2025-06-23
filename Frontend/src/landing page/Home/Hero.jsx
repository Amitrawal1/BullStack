import frontImg from '../../assets/images/Front.png';
export default function Hero(){
    return(
        <>
        <section className="w-50%  mx-auto py-16 px-4  flex  md:flex-row items-start gap-8">
            <div className="flex-1 space-y-6">
                <h1 className="font-bold text-[#600985] text-5xl md:text-6xl lg:text-7xl font-sans">
                    Smart Investing Starts Here
                </h1>
                <p className="text-[#4b0082] text-xl md:text-2xl lg:text-3xl font-normal font-sans max-w-2xl">
                    BullStack: Stocks, Derivatives, Mutual Funds, ETFs, and Bonds — All in
                    One Platform.
                </p>
            </div>
            <div className="flex-shrink-0 w-50% md:w-auto">
                <img className="w-50%  h-50% object-cover rounded-md"
                    alt="Investment growth illustration"
                    src={frontImg}/>
            </div>
            
        </section>
        
        </>
    )
}


