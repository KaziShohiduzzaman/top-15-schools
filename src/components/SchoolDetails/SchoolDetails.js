import React from 'react';
import Rating from 'react-rating';
import './SchoolDetails.css'
const SchoolDetails = (props) => {
    // destructuring object 
    const { name, established, image, location, amountOfStudents, rating } = props.school;
    return (
        // all card with bootstrap 
        <div className="col-md-4 g-4">
            <div className="row g-2">
                <div className="card card-size">
                    <img src={image} className="card-img-top img-size" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Established:{established}</p>
                        <p className="card-text">Location:{location}</p>
                        <p className="card-text">Students:{amountOfStudents}</p>
                        <p><Rating
                            initialRating={rating}
                            emptySymbol="far fa-star star rating-color"
                            fullSymbol="fas fa-star star rating-color"
                            readonly
                        /></p>
                        {/* onclick handler for button  */}
                        <button onClick={() => props.handleAddToCart(props.school)} className='btn btn-success'><i class="fas fa-school"></i> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SchoolDetails;