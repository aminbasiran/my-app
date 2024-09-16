import React from 'react'
import { useState } from 'react'

const Form = () => {


    const [isChecked, setisChecked] = useState(false)
  return (
      <div>
          
          <h2>Form</h2>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere.</h4>
          <form>
              <label>Checkbox</label>
              <input type="checkbox" checked={isChecked} onChange={() => setisChecked(!isChecked)} />
              <button type='submit' disabled={!isChecked }>Submit</button>
          </form>
    </div>
  )
}

export default Form