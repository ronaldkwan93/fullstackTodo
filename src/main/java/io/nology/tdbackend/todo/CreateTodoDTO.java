package io.nology.tdbackend.todo;

import jakarta.validation.constraints.NotBlank;

public class CreateTodoDTO {

    @NotBlank
    private String title;

    public String getTitle() {
        return title;
    }


}
