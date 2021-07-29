import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";

const SearchResults = ({  allDistilleries }) => {
  const { region } = useParams();
  const filteredDistilleries = allDistilleries.filter((h) => h.region === region);

  return (
    <div className="mt-2">
      <h4>Results for {region}:</h4>
      <table className="table table-hover">
        <tbody>
          {filteredDistilleries.map((d) => (
            <SearchResultsRow key={d.id} distillery={d} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
