import App from "../App";
export default function FilterList({ onSelectFilter, filters, selected }) {
  return (
    <>
      <div className="toolbarButtons">
        {" "}
        {filters.map((filter) => (
          <button
            key={filter}
            className={`toolbarButtons__button ${
              selected === filter ? "toolbarButtons__button--active" : ""
            }`}
            onClick={() => onSelectFilter(filter)}
          >
            {" "}
            {filter}{" "}
          </button>
        ))}{" "}
      </div>
    </>
  );
}
