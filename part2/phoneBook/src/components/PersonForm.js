import React from "react";

const PersonForm = ({handleOnChangeName, handleOnChangeNumber, handleSubmit}) => {
  return (
          <form>
              <div>
                  name: <input onChange={handleOnChangeName}/>
              </div>
              <div>
                  number: <input onChange={handleOnChangeNumber}/>
              </div>
              <div>
                  <button type="submit" onClick={handleSubmit}>add</button>
              </div>
          </form>
  )
}

export default PersonForm