

const NumberSelector = ({setError, error, selectedNumber,setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  }
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
    }}>
      <p style={{
        color: "red",
      }}>{error}</p>
      <div style={{
        display: "flex",
        gap: "24px",
      }}>
        {arrNumber.map((value, i) => (
          <div
            key={i}
            onClick={()=> numberSelectorHandler(value)}
            style={{
              height: "72px",
              width: "72px",
              border: "1px solid black",
              display: "grid",
              placeItems: "center",
              fontSize: "24px",
              fontWeight: 700, 
              backgroundColor: value === selectedNumber ? "black" : "white",
              color: value === selectedNumber ? "white" : "black",
              cursor: "pointer",
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <p style={{
        fontSize: "24px",
        fontWeight: 700,
        marginTop: "10px", // Added margin-top for better spacing
      }}>Select number</p>
    </div>
  );
};

export default NumberSelector;
