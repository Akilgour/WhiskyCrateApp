import { useHistory } from "react-router-dom";
import "./search-results.css";

const SearchResultsRow = ({   distillery }) => {
  const history = useHistory();

  const setActive = () => {
    history.push(`/distillery/${distillery.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{distillery.name}</td>
      <td>{distillery.currentlyoperating}</td>
      <td>{distillery.region}</td>
    </tr>
  );
};

export default SearchResultsRow;
