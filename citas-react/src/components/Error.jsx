const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded">
      <h4>{mensaje}</h4>
    </div>
  );
};

export default Error;
