

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

    const borrarTodo = () => {
        onDeleteTodo( todo.id );
    }


    return (
            <li className=" list-group-item d-flex justify-content-between">
                <span
                    className={`align-self-center  ${ (todo.done) ? "text-decoration-line-through" : "" }`}
                    onClick={ ()=>onToggleTodo( todo.id ) }
                >
                    { todo.desc }
                </span>
            
                <button
                    className="btn btn-danger btn-sm"
                    onClick={ borrarTodo }
                >
                    Borrar
                </button>
            </li>
    )
}
