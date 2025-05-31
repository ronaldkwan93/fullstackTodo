package io.nology.tdbackend.category;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    private CategoryRepository categoryRepository;

    CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Category create(CreateCategoryDTO data) {
        Category newCategory = new Category();
        newCategory.setTitle(data.getTitle());
        Category savedCategory = this.categoryRepository.save(newCategory);
        return savedCategory;
    }

    public List<Category> getAllCategories() {
        List<Category> list = this.categoryRepository.findAll();
        return list;
    }
}
