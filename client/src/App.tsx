import { Suspense } from "react"
import { ReactRouter } from "./routes"

function App() {

  return (
    <>
      <Suspense fallback={<div></div>}>
        <ReactRouter />
      </Suspense>
    </>
  )
}

export default App
