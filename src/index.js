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

  const recordCount = () => {
    let el = document.querySelector("#results");
    let foo = document.createElement('p');
    foo.innerText = count
    el.prepend(foo)
  }

  return (
    <div className="App">
      <h2>Buttons</h2>
      <div>
      <Button integer={1} onClickFunction={changeCount} />
      <Button integer={10} onClickFunction={changeCount} />
      </div>
      <div>
      <Button integer={-1} onClickFunction={changeCount} />
      <Button integer={-10} onClickFunction={changeCount} />
      </div>
      <div>
      <Button integer="Reset" onClickFunction={resetCount} />
      <Button integer="Save" onClickFunction={recordCount} />
      </div>
      <div>
        <p>Count: {count}</p>
      </div>
      <hr/>
      <hr/>
      <h2>Results</h2>
      <div id="results"></div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
