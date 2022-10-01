import './About.css';

function About() {
    return(
        <div className="About">
            <div className='About-container'>
                <div className='About-container-img'>
                    <img src={require('../imgs/me2.jpg')}alt='Jose Antonio' />
                </div>
                <div className='About-text'>
                    <h1>About me</h1>
                    <p>Hello! My name is José Antônio! I am 21 years old. I am a web developer but I have a huge passion for photograpy as well! </p>
                    <p>So here is a little bit about my background as a programmer. My journey as a developer has started a few years ago, in 2017, when I started studying Python. Back then I didn't have a lot of knowlage about programming, but in 2019 I got into Computer Science at Federal University of São João del-Rei, and that is where my true love for programming started. At first I was learning algorithms and data structures using C language, but not long after that I discovered the amazing universe of web development and instantly fell in love with it. Learning how to develop websites was a fantastic experience, and this passion for learning, developing and creating something new keep growing everyday. I got an internship as a fullstack developer at university and I keep learning more every single day with the goal to become the best developer I can be, to aggregate a lot to this field.</p>
                    <p>Now a little about my personal life and hobbies. I live in São João Del Rei with my beautiful fiánce and our two cats. I am at my 6th semester out of 8 at university. When I am not studying and programming I like to play games, watch movies, TV shows, YouTube videos and livestreams. I also like cooking, reading books, walking and of course I love photograpy.</p>
                </div>
            </div>
        </div>
    )
}

export default About;