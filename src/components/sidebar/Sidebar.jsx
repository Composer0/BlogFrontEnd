import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://www.orionpalmer.com/static/media/orionpalmer.ba51d754.webp" alt=""></img>
        <p>
          lorem ipsum dolor sit amet, consectetur adip lorem lorem. Cum sociis natoque penatibus et justo
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Food</li>
            <li className="sidebarListItem">Code</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-github-square"></i>
            <i className="sidebarIcon fab fa-linkedin"></i>
          </div>
      </div>
    </div>
  )
}
