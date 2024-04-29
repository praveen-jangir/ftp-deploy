import RingLoader from "react-spinners/RingLoader";
import '../../app.css'
export const Loader = ()=>{
    return (
        <div className="loader-container">
          <RingLoader color="#36d7b7" />
        </div>
      );
}