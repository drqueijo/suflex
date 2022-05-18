import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'
import { switchToDark, switchToLight } from '../redux/themeSlice'

export function Count() {
  const count = useSelector((state) => state.counter.value)
  const theme = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="switch"
          onClick={() => dispatch(switchToDark())}
        >
          switch black
        </button>
            {theme}
        <button
          aria-label="switch"
          onClick={() => dispatch(switchToLight())}
        >
          switch white
        </button>
      </div>
    </div>
  )
}

export default Count