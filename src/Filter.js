import { useEffect } from "react";
import './Filter.css';

function Filter({ photos, activeFilter, setActiveFilter, setFiltered }) {

    useEffect(() => {
        if(activeFilter === "All") {
            setFiltered(photos);
            return
        }

        const filtered = photos.filter((pic) => pic.tag.includes(activeFilter));

        setFiltered(filtered);

    }, [activeFilter])

    return(
        <div className="Filter">
            <button
                className={activeFilter === "All" ? "Filter-selected" : ""} 
                onClick={() => setActiveFilter("All")}>All
            </button>

            <button 
                className={activeFilter === "Sky" ? "Filter-selected" : ""}
                onClick={() => setActiveFilter("Sky")}>Sky
            </button>

            <button 
                className={activeFilter === "Nature" ? "Filter-selected" : ""} 
                onClick={() => setActiveFilter("Nature")}>Nature
            </button>

            <button 
                className={activeFilter === "Sunset" ? "Filter-selected" : ""} 
                onClick={() => setActiveFilter("Sunset")}>Sunset
            </button>

            <button 
                className={activeFilter === "Road" ? "Filter-selected" : ""} 
                onClick={() => setActiveFilter("Road")}>Road
            </button>

            <button 
                className={activeFilter === "Cat" ? "Filter-selected" : ""} 
                onClick={() => setActiveFilter("Cat")}>Cat
            </button>

        </div>
    );
}

export default Filter;