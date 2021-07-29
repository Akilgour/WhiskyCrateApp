import { useState } from "react";

const Inquiry = () => {
  const [tastingInfo, setTastingInfo] = useState({
    whiskyid: "",
    tastingnotes: "",
  });

  const onChange = (e) => {
    setTastingInfo({ ...tastingInfo, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(tastingInfo);
    //send
  };
  return (
    <form className="mt-2">
      <div className="form-group">
        <label htmlFor="whiskyid">whiskyid</label>
        <input
          type="text"
          className="form-control"
          placeholder="whiskyid"
          id="whiskyid"
          value={tastingInfo.whiskyid}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="tastingnotes">Tasting Notes</label>
        <input
          type="text"
          id="tastingnotes"
          className="form-control"
          placeholder="What did it taste like"
          value={tastingInfo.tastingnotes}
          onChange={onChange}
        />
      </div>
       
      <button
        className="btn btn-primary mt-2"
        disabled={!tastingInfo.whiskyid || !tastingInfo.tastingnotes}
        onClick={onSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Inquiry;
