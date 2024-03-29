import "./Banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <img width={152} height={100} src="../img/Avengers.png" alt="avengers" />
      <h2 className="banner__title">
        New comics every week!
        <br />
        Stay tuned!
      </h2>
      <img width={133} height={100} src="../img/Avengers logo.png" alt="logo" />
    </div>
  );
}
