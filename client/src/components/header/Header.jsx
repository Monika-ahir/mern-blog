import "./header.css";
import headerImg from "../../images/headerImg.png";

export default function Header() {
  return (
    <div className="header">
      <div className="intro">
        <h1>Welcome to my</h1>
      </div>
      <div className="headerTitles">
        <span className="headerTitleLg">Blog</span>
      </div>
      <div className="intro scn">
        <h1>Where story unfold</h1>
      </div>
      <img className="headerImg" src={headerImg} alt="main-bg" />
    </div>
  );
}
