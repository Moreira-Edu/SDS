package com.ds.DsMeta.controllers;

import com.ds.DsMeta.entities.Sale;
import com.ds.DsMeta.services.SalesServices;
import com.ds.DsMeta.services.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value ="/sales")
public class SalesController {
    @Autowired
    private SmsService serviceSms;
    @Autowired
    private SalesServices services;

    @GetMapping
    public Page<Sale> findSales(
            @RequestParam(value = "minDate", defaultValue = "") String minDate,
            @RequestParam(value = "maxDate", defaultValue = "") String maxDate,
            Pageable pageable) {
        return services.findSales(minDate, maxDate, pageable);
    }

    @GetMapping("/{id}/notification")
    public void notifySms(@PathVariable Long id){
        serviceSms.sendSms(id);
    }
}
