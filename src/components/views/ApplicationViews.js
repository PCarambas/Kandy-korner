import { Outlet, Route, Routes } from 'react-router-dom'
import { LocationsList } from '../../locations/LocationsList'
import { ProductsList } from '../products/ProductsList'
import "./ApplicationViews.css"


export const ApplicationViews = () => {
    return (
            
        <Routes>
            <Route path="/" element={ 
            <div className='kandy-header'><h1>Kandy Korner</h1></div>}>
            </Route>
                
            
            
            <Route path="locations" element={<LocationsList />} />
            <Route path="products" element={ <ProductsList />} />
        
        </Routes>
    )
}
            
            
            


                
           

