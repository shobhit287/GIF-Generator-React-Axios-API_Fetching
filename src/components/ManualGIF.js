import './ManualGIF.css';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';

function ManualGIF(){
    const [tag, setTag] = useState('');
    const { source, loader, fetchdata } = useGif();

    const handleGenerate = () => {
        fetchdata(tag);
    };

    return(
        <div className="manual_gif">
            <h3 className='manual_heading'>Manual GIF Generator</h3>
            {loader ? <Spinner/> : <img src={source} alt="imggif" className='random_img'/>}
            <input type="text" onChange={(event) => { setTag(event.target.value) }} />
            <button onClick={handleGenerate}>Generate</button>
        </div>
    );
}

export default ManualGIF;
