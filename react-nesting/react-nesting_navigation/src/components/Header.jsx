import { Navigation } from "./Navigation";

export const Header = ({ children, logo, avatar }) => {
  return (
    <>
      <header className="header">
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
        <Navigation></Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
      </header>
    </>
  );
};
