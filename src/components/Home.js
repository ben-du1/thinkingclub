import Front from "./Front"
import Help from "./Help"
import Join from "./Join"
import Images from "./Images"

const Home = () => {
    return (
        <div className="home">
            <Front />
            <Images />
            <Join />
            <Help />
        </div>
    )
}

export default Home