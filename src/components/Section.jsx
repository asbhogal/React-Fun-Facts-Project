import reactBackGroundLogo from "../mockups/reactjs-icon-2.png";

const Section = () => {
    return (
        <section className="Section">
            <h2 className="FunFactsTitle">
                Fun facts about React
            </h2>
            <div className="BulletPoints">
                <span className="BulletPoint BulletPoint-1"></span>
                <span className="BulletPoint BulletPoint-2"></span>
                <span className="BulletPoint BulletPoint-3"></span>
                <span className="BulletPoint BulletPoint-4"></span>
                <span className="BulletPoint BulletPoint-5"></span>
            </div>
            <ul className="FunFactsList">
                <li className="FunFactsListItem FunFactsListItem-1">Was first released in 2013</li>
                <li className="FunFactsListItem FunFactsListItem-2">Was originally created by Jordan Walke</li>
                <li className="FunFactsListItem FunFactsListItem-3">Has well over 100K starts on GitHub</li>
                <li className="FunFactsListItem FunFactsListItem-4">Is maintained by Facebook</li>
                <li className="FunFactsListItem FunFactsListItem-5">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img className="ReactBackgroundLogo" src={ reactBackGroundLogo } alt="React logo"></img>
        </section>
    )
}

export default Section