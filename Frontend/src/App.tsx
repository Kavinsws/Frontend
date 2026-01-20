import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateJobContainer from "./containers/CreateJobContainer"
import JobsLayout from "./layouts/JobsLayout"
import JobDashboardContainer from "./containers/JobDashboardContainer"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<JobsLayout/>}>
        <Route path="/" element={<JobDashboardContainer/>}/>
        <Route path="/newJob" element={<CreateJobContainer/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
