import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <>
      {/* Same as */}
      {/* Your app content */}
    </>
  );
};

export default App;
