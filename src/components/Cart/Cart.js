import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props; //destructuring object

    // total student section 
    let total = 0;
    for (const school of cart) {
        total = total + school.amountOfStudents;
    }
    return (
        <div>
            <h3 className='text-center mt-3'><i class="fas fa-graduation-cap"></i> School Added: {props.cart.length}</h3>
            <h4 className='text-center mt-3'>Total Students: {total}</h4>
            <h5 className='text-center mt-3 border-bottom'>Schools Name:</h5>
            {/* mapping for school name  */}
            {
                cart.map(name => <p className='mt-3 school-name'>{name.name}</p>)
            }
        </div>
    );
};

export default Cart;