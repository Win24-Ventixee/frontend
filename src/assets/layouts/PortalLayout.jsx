import { Outlet } from "react-router-dom"

const PortalLayout = () => {
  return (
    <div className="portal-wrapper">
      <Outlet />
    </div>
  )
}
export default PortalLayout