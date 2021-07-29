import "./distillery.css";
import { useState } from "react";
import tasteIcon from "./dram.jpg";
import Inquiry from "./Inquiry";

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
     
     
      
          <img
            src={tasteIcon}
            height="50"
            alt="inquiry"
            onClick={inquiryClick}
          />
          {inquiryShown && <Inquiry distillery={distillery} />}



           
        </div>
      </div>
     
  );
};

export default Distillery;


  