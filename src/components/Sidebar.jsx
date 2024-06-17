export default function Sidebar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sidebar-container">
      <div onClick={handleToggleModal} className="bg-overlay"></div>
      <div className="sidebar-content">
        <h2>{data?.title}</h2>
        <div>
          <h2>{data?.date}</h2>
          <p> {data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
