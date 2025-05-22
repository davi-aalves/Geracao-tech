const Card = (title, category, text) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>{title}</h2>
      <h5>{category}</h5>
      <p>{text}</p>
    </div>
  );
};

export default Card;
