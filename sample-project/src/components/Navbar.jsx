import "./Navbar.css";

function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-white">
      <div className="flex items-center justify-between gap-8">
        <img className="w-auto h-5" src="public\dribbble-logo.svg" alt="" />
        {/* <nav>
          <ul className="flex items-center justify-between gap-6 nav-lists">
            <li className="nav-items hover:cursor-pointer">Inspiration</li>
            <li className="nav-items hover:cursor-pointer">Find Work</li>
            <li className="nav-items hover:cursor-pointer">Learn Design</li>
            <li className="nav-items hover:cursor-pointer">Go Pro</li>
            <li className="nav-items hover:cursor-pointer">Hire Designers</li>
          </ul>
        </nav> */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="m-1 ">
            Inspiration
          </label>
          <ul
            tabIndex={0}
            className="p-2 shadow rounded-xl dropdown-content menu bg-base-100 w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="m-1 ">
            Find Work
          </label>
          <ul
            tabIndex={0}
            className="p-2 shadow rounded-xl dropdown-content menu bg-base-100 w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="m-1 ">
            Learn Design
          </label>
          <ul
            tabIndex={0}
            className="p-2 shadow rounded-xl dropdown-content menu bg-base-100 w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="m-1 ">
            Go Pro
          </label>
          <ul
            tabIndex={0}
            className="p-2 shadow rounded-xl dropdown-content menu bg-base-100 w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="m-1 ">
            Hire Designers
          </label>
          <ul
            tabIndex={0}
            className="p-2 shadow rounded-xl dropdown-content menu bg-base-100 w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 search-menu nav-lists">
        <i className="fa-solid fa-magnifying-glass"></i>
        <button className="text-base font-normal normal-case btn btn-ghost">
          Sign in
        </button>
        <button className="text-base font-normal normal-case btn btn-secondary">
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Navbar;
