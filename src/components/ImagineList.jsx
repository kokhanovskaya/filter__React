export default function Imagine({ images }) {
  return (
    <>
      <div className="imagesList">
        {images.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={item.category}
            className="imageList__item"
          />
        ))}
      </div>
    </>
  );
}
