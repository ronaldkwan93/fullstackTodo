package io.nology.tdbackend.todo;

import org.springframework.stereotype.Service;


@Service
public class TodoService {

    private TodoRepository todoRepository;

    TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public Todo create(CreateTodoDTO data) {
       Todo newTodo = new Todo();
        newTodo.setTitle(data.getTitle());
        Todo savedTodo = this.todoRepository.save(newTodo);
        return savedTodo;
    }
    

}
