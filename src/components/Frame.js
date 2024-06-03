const Frame = ({ children }) => {
  return (
    <div className="w-full h-fit flex select-none justify-center relative overflow-x-hidden mt-20">
      <div className="w-full max-w-[600px] h-full">{children}</div>
    </div>
  );
};

export default Frame;
