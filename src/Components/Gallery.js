import { useRef, useState } from 'react';
import photos from './photos';
import Filter from '../Filter';
import { motion, AnimatePresence } from "framer-motion";
import './Gallery.css';

function Gallery() {

  const [model, setModel] = useState(false);
  const [tempPic, setTempPic] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  const getImg = (pic) => {
    setTempPic(pic);
    setModel(true);
  }

  const picRef = useRef(null);

  const scrollToImage = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
      <>
        <Filter 
          photos={photos}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          setFiltered={setFiltered}
        />

        <div className={model ? 'open-model' : 'model'}>
            <img ref={picRef} src={tempPic} alt='' />
          <span className='close-btn' onClick={() => setModel(false)}>x</span>
        </div>

        <div className="Gallery">

          <AnimatePresence>

          {filtered.map((p, i) => (
            <motion.div layout className='Gallery-card' key={i}>
              <motion.div 
                className='Gallery-img'
                animate={{opacity: 1}} 
                initial={{opacity: 0}} 
                exit={{opacity: 0}} 
                layout
                onClick={() => {
                  getImg(p.picture)
                  scrollToImage(picRef);
                }}
                >
                    
                <img src={p.picture} alt={p.description} />
              </motion.div>
            </motion.div>
          ))}

          </AnimatePresence>
        </div>
      </>
    );
}

export default Gallery;