

export const Link = (children, href, ) => {
    return(
        <>
        <a className="navigation__link" href={href}>
        Home
      </a>
      <a className="navigation__link" href="#about">
        About
      </a>
      <a className="navigation__link" href="#impressum">
        Impressum
      </a>
      </>
    )
}