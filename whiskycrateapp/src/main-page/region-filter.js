import { useHistory } from "react-router-dom";

const RegionFilter = ({ allDistilleries  }) => {
  const history = useHistory();

  const regions = allDistilleries
    ? Array.from(new Set(allDistilleries.map((d) => d.region)))
    : [];
  regions.unshift(null);

  const onSearchChange = (e) => {
    const region = e.target.value;
    history.push(`/searchresults/${region}`);
  };

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for distilleries in region:
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {regions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RegionFilter;
