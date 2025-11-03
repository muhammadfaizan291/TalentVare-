


const ScreenContainer = ({ children, style, className }) => {
  

  return (
    <div className={`max-w-[1344px] w-full 2xl:px-0 px-[15px]  mx-auto ${className}`} style={style}>
      {children}
    </div>
  );
  
};

export default ScreenContainer;
