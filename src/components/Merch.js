import Product from "./Product"

const Merch = () => {
    return (
        <div className="Merch">
            <Product image="/shirt.jpg" name="Thinking Club Shirt" price="$13.99"/>
            <Product image="/hoodie.jpg" name="Thinking Club Hoodie" price="$23.99" />
            <Product image="/hat.jpg" name="Thinking Club Hat" price="$7.99" />
        </div>
    )
}

export default Merch