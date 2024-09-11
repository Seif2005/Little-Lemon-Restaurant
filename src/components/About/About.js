import "./About.css"

function About(){
    return(
        <>
            <section className="about-container">
                <section className="about-inner-container">
                    <section className="about column">
                        <h1 className="about-title">Little Lemon</h1>
                        <h3 className="about-subtitle">Chicago</h3>
                        <p className="about-text">Little Lemon was founded by Italian brothers Mario and Adrian, who combined family recipes with a modern twist to create a delightful Mediterranean dining experience. Their passion for authentic flavors and warm hospitality has made Little Lemon a beloved spot for locals and visitors alike.</p>
                    </section>
                    <section className="about-column about-image">
                        <img src="src\assets\restauranfood.jpg"/>
                    </section>
                </section>
            </section>
        </>
    )
}
export default About;