const PrimaryBtn = ({ text }) => {
  return (
    <button className='bg-primary-400 dark:bg-primary-50 rounded-lg w-28 md:w-32 h-12 text-typoDark-200 dark:text-typoLight-600 shadow-[1px_4px_16px_rgba(118,71,235,0.2)] dark:shadow-[2px_4px_16px_rgba(195,197,248,0.3)] leading-7 text-lg font-medium z-40'>
      {text}
    </button>
  );
};

export default PrimaryBtn;
