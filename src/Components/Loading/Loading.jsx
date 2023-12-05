import loadingImg from "../../assets/images/loader_gif.gif";
const Loading = () => {
  return (
    <div>
      <h3>Data is Loading...</h3>
      <img style={{ width: "100px" }} src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
