import type { CSSProperties } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const styledDiv: CSSProperties = {
  width: "1240px",
  margin: "auto",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "50px",
};
const styledButton: CSSProperties = {
  background: "none",
  border: "none",
  color: "blue",
  textDecoration: "underline",
  cursor: "pointer",
  fontSize: "inherit",
};

const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <div style={styledDiv}>
      <h1>Page not found 😢</h1>
      <button onClick={() => navigate(-1)} style={styledButton}>
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
