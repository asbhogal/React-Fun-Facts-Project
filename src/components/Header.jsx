import reactLogo from "../mockups/React-icon.svg"

const Header = () => {
    return (
        <div className="Header">
            <span className="ReactFactsTitle">React Facts</span>
            <h1 className="ProjectTitle">React Course - Project 1</h1>
            <img className="ReactLogo" src={ reactLogo } alt="React logo"></img>
        </div>
    )
}

export default Header;