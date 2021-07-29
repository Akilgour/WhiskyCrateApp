import { useHistory } from "react-router-dom";
import "./search-results.css";

const SearchResultsRow = ({   distillery }) => {
  const history = useHistory();

  // const setActive = () => {
  //   history.push(`/house/${distillery.id}`);
  // };

  return (
    <tr >
      <td>{distillery.name}</td>
      <td>{distillery.currentlyoperating}</td>
      <td>{distillery.region}</td>
    </tr>
  );
};

export default SearchResultsRow;
