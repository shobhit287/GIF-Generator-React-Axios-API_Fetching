import './randomgif.css';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
  function RandomGIF(){
    const {loader,source,fetchdata}=useGif();
    return(
        <div className="random_gif">
        <h3 className='random_heading'>Random GIF Generator</h3>
         {loader?(<Spinner/>):(<img src={source} alt="imggif" className='random_img'/>)}
        <button onClick={()=>{fetchdata()}}>Generate</button>
        </div>
    )
}
export default RandomGIF;