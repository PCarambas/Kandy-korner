import { useState, useEffect } from "react"
import "./ProductsList.css"




export const ProductsList = () => {
    const [products, setProducts] = useState([])
    const [filteredPrice, setFilteredPrice] = useState([])
    const [toggle, setToggle] = useState(false)


    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)




    useEffect(() => {
        fetch(`http://localhost:8088/products`)
            .then((response) => {
                return response.json()
            })
            .then((productsArray) => {
                setProducts(productsArray)
                return productsArray
                
            })
            .then((productsArray) => {
                if (kandyUserObject.staff) {
                    const filteredPriceObj = productsArray.filter(product => product.price >= 2.00)
                    setFilteredPrice(filteredPriceObj)
                    
                }
            })

    }, [])


   



    return <>

        {
            kandyUserObject.staff
                ? <>
                    <button onClick={() => { setToggle(false) }}>Show All Candy</button>
                    <button onClick={() => { setToggle(true) }}>Top Price</button>
                </>
                : <>
                </>



        }
        {toggle ? <> <div className="products-header">
            <h1>Products</h1>
        </div>

            <div className="products-container">
                {
                    filteredPrice.map(
                        (productObj) => {
                            return <div className="product-card" key={productObj.id}>
                                <div>

                                    <ul>
                                        <ul>{productObj.name}</ul>
                                        <ul>{productObj.price}</ul>
                                    </ul>

                                </div>
                            </div>

                        }

                    )
                }
            </div></> :
            <>
                <div className="products-header">
                    <h1>Products</h1>
                </div>

                <div className="products-container">
                    {
                        products.map(
                            (productObj) => {
                                return <div className="product-card" key={productObj.id}>
                                    <div>

                                        <ul>
                                            <ul>{productObj.name}</ul>
                                            <ul>{productObj.price}</ul>
                                        </ul>

                                    </div>
                                </div>

                            }

                        )
                    }
                </div></>}
    </>
}