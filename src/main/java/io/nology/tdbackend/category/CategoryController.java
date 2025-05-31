package io.nology.tdbackend.category;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.nology.tdbackend.todo.TodoService;
import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    private final CategoryRepository categoryRepository;

    private CategoryService categoryService;

    CategoryController(CategoryService categoryService, CategoryRepository categoryRepository) {
        this.categoryService = categoryService;
        this.categoryRepository = categoryRepository;
    }

    @PostMapping
    public ResponseEntity<Category> createCategory(@Valid @RequestBody CreateCategoryDTO data) {
        Category saved = this.categoryService.create(data);
        return new ResponseEntity<Category>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> list = this.categoryService.getAllCategories();
        return new ResponseEntity<List<Category>>(list, HttpStatus.OK);
    }

}
