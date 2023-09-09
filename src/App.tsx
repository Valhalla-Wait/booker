import { Route, Routes } from "react-router-dom"
import { BookPage } from "./pages/BookPage"
import { ErrorPage } from "./pages/ErrorPage"
import { MainPage } from "./pages/MainPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<BookPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
