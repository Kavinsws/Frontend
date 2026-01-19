import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateJobContainer from "./containers/CreateJobContainer"
import JobsLayout from "./layouts/JobsLayout"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<JobsLayout/>}>
        <Route path="/jobs" element={<CreateJobContainer/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
