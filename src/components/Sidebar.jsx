import { CalendarIcon, ContactIcon, DashboardIcon, KanbanIcon, MessageIcon, ProjectIcon, SettingIcon } from "./icons";
import logo from "../assets/lws-logo-en.svg";
export default function Sidebar() {
    return (
         <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
          <div className="mb-8 flex items-center">
            <div className="flex items-center justify-center rounded-full text-xl font-bold">
              <img src={logo} className="mx-auto h-10 text-center" />
            </div>
          </div>
          <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
            + New Project
          </button>
          <nav>
            <ul className="space-y-4 text-white">
              <li>
                <a href="#" className="flex items-center">
                  <DashboardIcon/>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <ProjectIcon/>
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                 <ContactIcon/>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <KanbanIcon/>
                  Kanban
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                 <CalendarIcon/>
                  Calendar
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                 <MessageIcon/>
                  Messages
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                 <SettingIcon/>
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>
    )
}