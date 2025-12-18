import { Routes, Route, Link } from "react-router-dom"
import "./App.css"

function Home() {
  return (
    <div className="home">
      <h1>Weird Moments</h1>
      <p>Select a subject to explore strange experiences</p>

      <div className="cards">
        <Link to="/electrical" className="card">Electrical</Link>
        <Link to="/electronics" className="card">Electronics</Link>
        <Link to="/physics" className="card">Physics</Link>
      </div>
    </div>
  )
}

function Electrical() {
  return (
    <div className="page">
      <h2>Electrical – Weird Experiences</h2>

      <ul>
        <li>
          <strong>Fuse usage in AC and DC:</strong><br />
          In DC circuits, two fuses are used—one in the positive and one in the negative—
          because there is no neutral reference.  
          In AC circuits, only one fuse is used in the live (phase) wire since the neutral
          remains near zero potential.
        </li>
      </ul>
    </div>
  )
}

function Electronics() {
  return (
    <div className="page">
      <h2>Electronics – Weird Experiences</h2>

      <ul>
        <li>
          <strong>Capacitor polarity mistake:</strong><br />
          Connecting an electrolytic capacitor in reverse can cause it to bulge or even explode.
        </li>
      </ul>

    </div>
  )
}


function Physics() {
  return (
    <div className="page">
      <h2>Physics – Weird Experiences</h2>
      <p>Points will be added one by one.</p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/electrical" element={<Electrical />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/physics" element={<Physics />} />
    </Routes>
  )
}
