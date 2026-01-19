import { BrowserRouter, Route, Routes } from "react-router-dom"
import JobDashboardContainer from "./containers/JobDashboardContainer"
import CreateJobContainer from "./containers/CreateJobContainer"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobDashboardContainer/>}/>
        <Route path="/newJob" element={<CreateJobContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
