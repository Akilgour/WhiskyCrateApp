import "./distillery.css";
import { useState } from "react";
 

const Distillery = ({ distillery }) => {
  const [inquiryShown, setInquiryShown] = useState(false);
  const inquiryClick = () => {
    setInquiryShown(!inquiryShown);
  };
  return (
    <div>
      <div className="row mt-2">
        <h5 className="col-md-12">{distillery.name}</h5>
      </div>
      <div className="row">
        <h3 className="col-md-12">{distillery.currentlyoperating}</h3>
      </div>
       
        <div className="col-md-5">
          <p className="price">{distillery.region}</p>
     
       
           
        </div>
      </div>
     
  );
};

export default Distillery;


  