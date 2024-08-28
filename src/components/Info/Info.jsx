import s from "./Info.module.css";

const Info = () => {
  return (
    <div className={s.mainDiv}>
      <p className={s.text}>
        Welcome to [Restaurant Victory], where the rich traditions of Ukrainian
        cuisine meet the vibrant flavors of sushi and pizza! Our menu features a
        delightful array of authentic Ukrainian dishes, crafted with love and
        the freshest ingredients. From hearty borscht to creative sushi rolls,
        we offer a unique dining experience that celebrates diverse culinary
        influences. Enjoy our delicious offerings knowing that 20% of every
        purchase supports the Ukrainian military. Thank you for dining with us
        and contributing to a noble cause!
      </p>
      <div className={s.backgroundPhoto1}></div>
    </div>
  );
};

export default Info;
