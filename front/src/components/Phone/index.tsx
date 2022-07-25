import React from "react";

const Phone = ({handleInputChange}:any) => {

    return(
        <div className="field">
              <label htmlFor="celular">Celular</label>
              <input 
                type="text" 
                name="phone" 
                id="phone"
                onChange={handleInputChange}
              />
            </div>
    );
}

export default Phone;