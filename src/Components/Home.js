import Header from './Header';
import Gallery from './Gallery';
import '../App.css';

function Home() {
    return(
        <>
            <div className='App-container'>
                <Header />
                <Gallery />
            </div>
        </>
    )
}

export default Home;