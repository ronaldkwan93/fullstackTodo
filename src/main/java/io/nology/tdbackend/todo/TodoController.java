package io.nology.tdbackend.todo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/todos")
public class TodoController {

    private final TodoRepository todoRepository;

    private TodoService todoService;

    TodoController(TodoService todoService, TodoRepository todoRepository) {
        this.todoService = todoService;
        this.todoRepository = todoRepository;
    }

    @PostMapping
    public ResponseEntity<Todo> createTodo(@Valid @RequestBody CreateTodoDTO data) {
        Todo saved = this.todoService.create(data);
        System.out.println(data.getTitle());
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Todo>> getAllTodos() {
        List<Todo> list = this.todoService.getAllTodos();
        return new ResponseEntity<List<Todo>>(list, HttpStatus.OK);
    }

}
