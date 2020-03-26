import {React, useState} from 'react';


function task() {
    const [description  , setdescription] = useState('');

    
    async function handleSubmit(e) {
        e.preventDefault();

        await onsubmit({
            description,
            responsible,
          });

        setdescription('');
        setresponsible('');
    }
        return(
            <strong>Digite seus dados</strong>
            <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="description">Descrição</label>
                <textarea 
                  name="description" 
                  id="description" 
                  value={username}
                  onChange={ e => setdescription(e.target.value)}
                  required
                ></textarea>
              </div>
 
              <div className="input-block">
                <label htmlFor="responsible">Responsável</label>
                <input 
                  name="responsible" 
                  id="responsible"
                  value={responsible}
                  onChange={ e => setresponsible(e.target.value)} 
                  required
                />
              </div>
            </form>
        );
};
   

export default Task;