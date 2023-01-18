const ButtonLoadMore = ({ ...props }) => {
  return (
    <div className="text-center py-3">
      <button
        className="bg-[#0369a1] hover:bg-[#52525b] w-1/3 rounded-full text-black hover:text-white font-bold"
        onClick={props.onClick}
      >
        Load More
      </button>
    </div>
  );
};
export default ButtonLoadMore;
