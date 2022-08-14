import { useState } from "react"


export const TodoAdd = ({ onNewTodo }) => {

    const [ desc, setDesc ] = useState('');

    const onInputChange = (event) =>{
        setDesc( event.target.value);

    }


    const handleSubmit = ( event ) => {
        
        event.preventDefault();

        if( desc.trim().length < 1 ) return 

        const newTodo = {
            id: new Date().getTime(),
            desc,
            done:false
        }

        onNewTodo( newTodo );

        setDesc('');

    }


    return (

        <form
            onSubmit={ handleSubmit }
        >

            <input 
                type="text"
                placeholder="Que vamos a hacer"
                className="form-control"
                value={ desc }
                onChange={ onInputChange } 
            />

            <button
                type="submit" 
                className="btn btn-outline-danger mt-3"
            >
                Agregar
            </button>

        </form>
    )
}
