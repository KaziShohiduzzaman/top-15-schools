import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SchoolDetails from '../SchoolDetails/SchoolDetails';
import './Ranking.css'
const Ranking = () => {
    // state declare for school and cart 
    const [schools, setSchools] = useState([]);
    const [cart, setCart] = useState([])

    // side effect zone data loading 
    useEffect(() => {
        fetch('./schools.JSON')
            .then(res => res.json())
            .then(data => setSchools(data))
    }, [])
    // School count section 
    const handleAddToCart = (items) => {
        const newCart = [...cart, items]
        setCart(newCart);
    }
    return (
        <div className='ranking-container'>
            <div className='row'>
                <div className='col-md-9'>
                    <div className='row'>
                        {/* map for all object  */}
                        {
                            schools.map(school => <SchoolDetails key={school.key} school={school} handleAddToCart={handleAddToCart}></SchoolDetails>)
                        }
                    </div>
                </div>
                {/* cart section  */}
                <div className='col-md-3 cart-bg'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Ranking;