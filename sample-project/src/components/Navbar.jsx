import NavItems from "./NavMenus";

function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-white">
      <nav className="flex items-center justify-between gap-8">
        <a href="./">
          <img className="w-auto h-5" src="../dribbble-logo.svg" alt="" />
        </a>
        <NavItems />
      </nav>

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
