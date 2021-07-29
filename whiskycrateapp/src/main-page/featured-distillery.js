import Distillery from "../distillery";

const FeaturedDistillery = ({ distillery }) => {
  if (distillery)
    return (
      <div>
        <div className="row featuredDistillery">
          <h3 className="col-md-12 text-center">Featured distillery</h3>
        </div>
        <Distillery distillery={distillery} />
      </div>
    );
  return <div>No featured distillery at this time</div>;
};

export default FeaturedDistillery;
