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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus ac felis nec volutpat. Pellentesque gravida sollicitudin sapien dignissim suscipit. Phasellus finibus quis purus et pretium. Quisque eget ex ut nibh tristique scelerisque. Phasellus non mauris id elit finibus hendrerit. Vestibulum a nibh consequat, mattis diam vitae, facilisis felis. Mauris convallis justo eget massa ullamcorper, non molestie nibh convallis. Sed porttitor nulla sit amet eros porta, eu pretium lorem euismod. Quisque vel diam vitae odio bibendum vulputate. Cras euismod velit felis, et congue enim fringilla sagittis. Vestibulum consectetur turpis mi, finibus efficitur elit tempor sit amet. Proin pellentesque leo sapien, at sagittis ex aliquet sit amet. Sed nec nisl vel metus fermentum finibus. Praesent aliquam mattis magna, non pretium mi eleifend eget. Mauris tincidunt sapien eget nunc malesuada, consequat maximus augue sodales. Curabitur imperdiet condimentum euismod.</p>
                </div>
            </div>
        </div>
    )
}

export default About;