package com.ds.DsMeta.controllers;

import com.ds.DsMeta.entities.Sale;
import com.ds.DsMeta.services.SalesServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value ="/sales")
public class SalesController {
    @Autowired
    private SalesServices services;

    @GetMapping
    public List<Sale> findSales(){
            return services.findSales();
    }
}
