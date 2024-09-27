import Product from "./Product"

const Merch = () => {
    return (
        <div className="Merch">
            <Product image="/shirt.jpg" name="Thinking Club Shirt" price="$13.99"/>
            <Product image="/hoodie.jpg" name="Thinking Club Hoodie" price="$23.99" />
            <Product image="/hat.jpg" name="Thinking Club Hat" price="$7.99" />
            <Product image="/ball.jpg" name="Thinking Ball" price="$199.99" />
            <Product image="/banner.jpg" name="Thinking Club Banner" price="$29.99" />
            <Product image="/vinyl.jpg" name="Thinking Club Vinyl" price="$99.99" />
        </div>
    )
}

export default Merch