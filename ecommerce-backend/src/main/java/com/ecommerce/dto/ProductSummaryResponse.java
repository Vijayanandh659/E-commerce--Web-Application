package com.ecommerce.dto;

public record ProductSummaryResponse(
        Long id,
        String name,
        String description,
        Double price,
        Integer stock,
        String imageUrl
) {
}