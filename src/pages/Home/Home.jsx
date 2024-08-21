import s from "./Home.module.css";

// eslint-disable-next-line react/prop-types
const Home = ({ children }) => {
  return (
    <>
      <div className={s.upSide}>{children}</div>
    </>
  );
};

export default Home;
