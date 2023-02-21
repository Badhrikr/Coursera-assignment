import "./NavMenus.css";

function NavItems() {
  return (
    <div className="flex items-center justify-between gap-8 navigation-menus">
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="m-1 ">
          Inspiration
        </label>
        <ul
          tabIndex={0}
          className="p-2 shadow w-96 rounded-xl dropdown-content menu bg-base-100"
        >
          <li className="grid grid-flow-col auto-cols-max ">
            <div className="hover:bg-none">
              <i className="px-2 py-1 text-2xl rounded-md fa-solid fa-pencil bg-slate-100"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Certified Product Design Course</p>
              <span className="block text-sm">
                Learn product design in just 16 weeks...
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-desktop"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Introduction to UI Design</p>
              <span className="block text-sm">
                Learn UI Design Basics and Figma Fundamentals...
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-gear"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Design Systems Course</p>
              <span className="block text-sm">
                Scale Design Systems in 8 weeks...
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-bullseye"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Design Career Prep Course</p>
              <span className="block text-sm">
                Land your dream job! You'll have a career support specialist to
                review your portfolio...
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-video"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Browse our courses & workshops</p>
              <span className="block text-sm">
                Level up your skills with our interactive courses and workshops…
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="m-1 ">
          Find Work
        </label>
        <ul
          tabIndex={0}
          className="p-2 shadow w-96 rounded-xl dropdown-content menu bg-base-100"
        >
          <li className="grid grid-flow-col auto-cols-max ">
            <div className="hover:bg-none">
              <i className="px-2 py-1 text-2xl rounded-md fa-solid fa-paper-plane bg-slate-100"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Job Board</p>
              <span className="block text-sm">Find your dream design job</span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-mug-hot"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">
                Freelance Projects
                <span className="px-1 ml-2 text-xs font-semibold text-white bg-pink-500 border border-none rounded-md">
                  PRO+
                </span>
              </p>
              <span className="block text-sm">
                An exclusive list for contract work
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-envelope"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Want freelance design projects?</p>
              <span className="block text-sm">
                Get new leads in your inbox every day
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-mobile-screen-button"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">
                Personalize your profile with video
              </p>
              <span className="block text-sm">
                Introduce yourself to new clients with Pitch
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="m-1 ">
          Learn Design
        </label>
        <ul
          tabIndex={0}
          className="p-2 shadow w-96 rounded-xl dropdown-content menu bg-base-100"
        >
          <li className="grid grid-flow-col auto-cols-max ">
            <div className="hover:bg-none">
              <i className="px-2 py-1 text-2xl rounded-md fa-solid fa-pencil bg-slate-100"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Certified Product Design Course</p>
              <span className="block text-sm">
                Learn product design in just 16 weeks...
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-desktop"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Introduction to UI Design</p>
              <span className="block text-sm">
                Learn UI Design Basics and Figma Fundamentals...
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-gear"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Design Systems Course</p>
              <span className="block text-sm">
                Scale Design Systems in 8 weeks...
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-bullseye"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Design Career Prep Course</p>
              <span className="block text-sm">
                Land your dream job! You'll have a career support specialist to
                review your portfolio...
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-video"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Browse our courses & workshops</p>
              <span className="block text-sm">
                Level up your skills with our interactive courses and workshops…
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="m-1 ">
          Go Pro
        </label>
        <ul
          tabIndex={0}
          className="p-2 shadow w-96 rounded-xl dropdown-content menu bg-base-100"
        >
          <li className="grid grid-flow-col auto-cols-max ">
            <div className="hover:bg-none">
              <i className="px-2 py-1 text-2xl rounded-md fa-solid fa-pen-nib bg-slate-100"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">For Designers</p>
              <span className="block text-sm">
                Portfolio creation made easy
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-brush"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">For Freelancers</p>
              <span className="block text-sm">
                Fresh leads in your inbox every day
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-solid fa-user-group"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">For Teams</p>
              <span className="block text-sm">
                Build your team's pipeline or profile
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="m-1 ">
          Hire Designers
        </label>
        <ul
          tabIndex={0}
          className="p-2 shadow w-96 rounded-xl dropdown-content menu bg-base-100"
        >
          <li className="grid grid-flow-col auto-cols-max ">
            <div className="hover:bg-none">
              <i className="px-2 py-1 text-2xl rounded-md fa-regular fa-heart bg-slate-100"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Designer Search</p>
              <span className="block text-sm">
                Find, contact, and hire designers
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-regular fa-plus"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">List my Job Opening</p>
              <span className="block text-sm">
                The #1 job board for creatives
              </span>
            </div>
          </li>
          <li className="grid grid-flow-col auto-cols-max">
            <div>
              <i className="px-2 py-1 text-2xl rounded-md bg-slate-100 fa-regular fa-plus"></i>
            </div>
            <div className="flex flex-col items-start justify-center dropdown-options">
              <p className="font-semibold">Post a Freelance Project</p>
              <span className="block text-sm">
                Board for freelance & contract work
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavItems;
