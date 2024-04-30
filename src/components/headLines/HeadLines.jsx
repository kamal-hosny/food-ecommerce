

const HeadLines = ({ title, subtitle }) => {
  return (
    <div className="headlines">
      <p>{subtitle}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default HeadLines;
