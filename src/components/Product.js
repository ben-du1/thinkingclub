const Product = ({name,price,image}) => {
    return (
        <div className="Product">
            <img src={image} />
            <h3>
                {name}
                <br/>
                <div className="price">
                    {price}
                </div>
            </h3>
        </div>
    )
}

export default Product