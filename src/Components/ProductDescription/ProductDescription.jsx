import './ProductDescription.css'

const ProductDescription = () => {
    return (


        <div className='productDescription'>
            <h3> Product Description</h3>
            <hr />
            <div className="product-description-main">
                <div>
                <p>Product tittle</p>
                <input type="text" />
                </div>
                <div>
                <p>Designer name</p>
                <input type="text" />
                </div>
                <div className='product-description-special'>
                <p>Product description</p>
                <input type="text" />
                </div>
                
            </div>

            <div className="product-description-btn">
                <button>Submit</button>
            </div>
        </div>
    );
};

export default ProductDescription;