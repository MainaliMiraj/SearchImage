import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
      <div className="footer">
        By:
        <a href="https://github.com/MainaliMiraj" target="blank">
          Miraj Mainali
        </a>
      </div>
    </div>
  );
}
export default App;
