const Card = ({ image, title, category, text, type }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <img src={image} alt="" />
      <h2>{title}</h2>
      {type == "A" && (
        <>
          <h6>{category}</h6>
          <p>{text}</p>
        </>
      )}
    </div>
  );
};

export default Card;
