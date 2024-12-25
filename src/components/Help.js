import SERVER_PATH from "../lib/server"

const Help = () => {
    return (
        <div className="Help">
            <h1>Spread Propaganda. Bring to ASB room first.</h1>
            <br />
            <a href={SERVER_PATH+"/api/poster"} target="_blank"><img  src="thinkingclubflyer.png"/></a>
        </div>
    )
}

export default Help