import "./imageList.css";
function ImageShow({ image }) {
  return (
    <div className="effect">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
export default ImageShow;
