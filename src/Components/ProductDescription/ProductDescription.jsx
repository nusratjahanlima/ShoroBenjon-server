import './ProductDescription.css'

const ProductDescription = () => {

    const Add_Product_Description = async ()=>{
        alert("Product Added")
    }

    return (


        <div className='productDescription'>
            <h2> Product Description</h2>
            <hr />
            <div className="product-description-main">
                <div>
                <label htmlFor="">Product tittle</label>
                <input type="text"  required></input>
                </div>
                <div>
                <label htmlFor="">Product code</label>
                <input type="text"  required></input>
                </div>
                <div>
                <label htmlFor="">Designer name</label>
                <input type="text" required/>
                </div>
                
                <div className='product-description-special'>
                <label htmlFor="">Product description</label>
                <textarea id="description" name="description" required></textarea>
                </div>
                
            </div>

            <div className="product-description-btn">
                <button onClick={()=>{Add_Product_Description()}} className='addproduct-description-btn'>Submit</button>
            </div>
        </div>
    );
};

export default ProductDescription;