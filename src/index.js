import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const changeCount = integer => {
    setCount(count + integer)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <Button integer={1} onClickFunction={changeCount} />
      <Button integer={10} onClickFunction={changeCount} />
      <Button integer="Reset" onClickFunction={resetCount} />
      <Button integer={-1} onClickFunction={changeCount} />
      <Button integer={-10} onClickFunction={changeCount} />
      <div>{count}</div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
