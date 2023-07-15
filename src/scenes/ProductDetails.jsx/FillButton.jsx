
const FillButton = ({ name, onClick }) => {
  return (
    <button
      className='bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm py-5 mr-2 px-14 mb-2 w-full'
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default FillButton;