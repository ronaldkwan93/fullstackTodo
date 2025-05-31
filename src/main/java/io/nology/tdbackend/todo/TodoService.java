package io.nology.tdbackend.todo;

import java.util.List;

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

    public List<Todo> getAllTodos() {
        List<Todo> list = this.todoRepository.findAll();
           return list; 
    }
    

}
