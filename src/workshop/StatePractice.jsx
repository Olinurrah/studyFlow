import { useState } from "react";
import { sculptureList } from "./sculptureList";

const StatePractice = () => {
    const [index, setIndex] =useState(0);
    const [showMore,setShowMore]= useState(false);

    let hasprev = index > 0;
    const hasNext = index < sculptureList.length - 1;


    function handleNextClick() {
        if(hasNext) {
            setIndex(index + 1);

        }else{
            setIndex(0);
        }
    }
 function handlePreviusClick(){
    if(hasprev){
        setIndex(index - 1);
    }

 }
    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <div className="flex flex-col w-80">

            <img className="p-5 bg-red-300" src={sculpture.url} alt={sculpture.alt} />
    <div>
        <button className="btn" onClick={handlePreviusClick}> previus</button>
        <button className="btn" onClick={handleNextClick}>Next</button>

    </div>
    <h2 className="btn bg-amber-300">
        <i>{sculpture.name}</i>
        by {sculpture.artist}
    </h2>
    <h3 className="btn bg-pink-400">
          ({index + 1} of {sculptureList.length})
    </h3>
        
    {/* <button className="btn bg-sky-400" onClick={handleMoreClick}>
            {showMore ? 'Hide': 'Show'}details
    </button> */}
            {showMore && <p className="btn bg-lime-400">{sculpture.description}</p>}

        </div>
    );
};

export default StatePractice;