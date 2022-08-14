import { useTodo } from "./hooks/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"




export const TodoApp = () => {

    const { todos,handleNewTodo,handleDelete, handleToggleTodo } = useTodo();


    return (

        <>
            <div className="container">
            <h1>TodoApp</h1>
            <hr />
            
                <div className="row">

                    <div className="col-7">

                        <TodoList  
                            todos={ todos }
                            onDeleteTodo={ handleDelete }
                            onToggleTodo={ handleToggleTodo }
                        />

                    </div>

                    <div className="col-5">
                        <TodoAdd 
                            onNewTodo={ (todo) => handleNewTodo(todo) }
                        />
                    </div>

                </div>
            </div>

        </>
    )
}
