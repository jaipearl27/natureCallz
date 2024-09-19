const Banner = ({ img = undefined }) => {
    return (
      <div className="">
        <div
          className="h-[45vh] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${img })`
          }}
        >
        </div>
      </div>
    );
  };
  
  export default Banner;