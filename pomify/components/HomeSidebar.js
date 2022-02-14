import { FaClipboardList, FaRegChartBar, FiUser } from "react-icons/fa";
import { IoHomeOutline, IoSettingsOutline, IoGameControllerOutline } from 'react-icons/io5';
import { FiLogOut } from "react-icons/fi";

function HomeSidebar() {
  return (
    <div>
      <div>
        <button>
          <IoHomeOutline />
          <p>Home</p>
        </button>
      </div>
      <div>
        <button>
          <FaRegChartBar />
          <p>Progress</p>
        </button>
      </div>
      <div>
        <button>
          <IoGameControllerOutline />
          <p>Break</p>
        </button>
      </div>
      <div>
        <button>
          <IoSettingsOutline />
          <p>Settings</p>
        </button>
      </div>
      <div>
        <button>
          <FiLogOut />
          <p>Logout</p>
        </button>
      </div>
    </div>
  )
}

export default HomeSidebar