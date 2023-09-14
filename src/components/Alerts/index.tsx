import { Alert } from "@mui/material"
import { useSelector } from "react-redux"
import "./style.scss"

const Alerts = () => {
  const alerts = useSelector((state: any) => state.alert.alerts)

  return (
    <div className="Alerts">
      {alerts.map((alert: any) => (
        <Alert key={alert.id} className="alert shake-animation" severity={alert.type}>
          {alert.title}
        </Alert>
      ))}
    </div>
  )
}

export default Alerts
