import { useEffect } from "react";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <div>
      <h1>Page not found 😢</h1>
    </div>
  );
};

export default PageNotFound;
