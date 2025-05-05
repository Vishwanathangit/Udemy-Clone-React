import sale from "../assets/images/Sale image.png"
function Saleimage(){
    return(
        <div className="sale-image">
        <img src={sale} alt="SaleImage"></img>
        <div className="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save.</h2>
            <p>Get the top Courses for just 499. Just one day to save but a lifetime to Learn</p>
        </div>
    </div>
    )
}

export default Saleimage