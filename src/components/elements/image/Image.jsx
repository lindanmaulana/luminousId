const Image = (props) => {
  const { image1, image2 } = props;
  return (
    <>
      <div
        className="w-[110px] h-[200px] border-2 bg-cover bg-center rounded-tl-2xl rounded-br-2xl lg:w-[150px] lg:h-[240px]"
        style={{backgroundImage: `url(${image1})`}}
      ></div>
      <div
        className="w-[110px] h-[200px] border-2 bg-cover bg-center rounded-tl-2xl rounded-br-2xl mt-16 lg:w-[150px] lg:h-[240px]"
        style={{backgroundImage: `url(${image2})`}}
      ></div>
    </>
  );
};
export default Image;
