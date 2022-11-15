const Section = () => {
    return (
        <section className="Section">
            <h2 className="FunFactsTitle">
                Fun facts about React
            </h2>
            <ul className="FunFactsList">
                <li className="FunFactsListItem">                <span className="BulletPoint"></span>Was first released in 2013</li>
                <span className="BulletPoint"></span>
                <li className="FunFactsListItem">Was originally created by Jordan Walke</li>
                <span className="BulletPoint"></span>
                <li className="FunFactsListItem">Has well over 100K starts on GitHub</li>
                <span className="BulletPoint"></span>
                <li className="FunFactsListItem">Is maintained by Facebook</li>
                <span className="BulletPoint"></span>
                <li className="FunFactsListItem">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </section>
    )
}

export default Section