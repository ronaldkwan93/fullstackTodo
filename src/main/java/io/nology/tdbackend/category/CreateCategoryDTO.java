package io.nology.tdbackend.category;

import jakarta.validation.constraints.NotBlank;

public class CreateCategoryDTO {
    
    @NotBlank
    private String title;

    public String getTitle() {
        return title;
    }
}
