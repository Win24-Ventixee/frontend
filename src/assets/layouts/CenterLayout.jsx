import { Outlet } from "react-router-dom"

const CenterLayout = () => {
  return (
    <div className="center-wrapper">
      <Outlet />
    </div>
  )
}
export default CenterLayout