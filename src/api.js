import axios from "axios";

const searchImages = async (searchTerm) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID YVzMICZhbzd6MJ1SbumnHhCgtXfTatIwdeB2NUdROC8",
      },
      params: {
        query: searchTerm,
      },
    });
    return response.data.results;
  } catch (err) {
    console.log(err);
  }
};

export default searchImages;
