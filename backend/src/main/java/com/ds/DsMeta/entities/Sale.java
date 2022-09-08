package com.ds.DsMeta.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tb_sales")
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String sellerName;
    private Integer visited;
    private Integer deals;
    private Double amount;
    private LocalDate date;

    public Sale(){

    };

    public Integer getVisited() {
        return visited;
    }

    public Long getId() {
        return id;
    }

    public String getSellerName() {
        return sellerName;
    }

    public Integer getDeals() {
        return deals;
    }

    public Double getAmount() {
        return amount;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }

    public void setVisited(Integer visited) {
        this.visited = visited;
    }

    public void setDeals(Integer deals) {
        this.deals = deals;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
