package com.Shopping.onlineshopping.dto.paginate;

import com.Shopping.onlineshopping.dto.CustomerDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PaginateResponseCustomerDTO {
    private List<CustomerDto> list;
    private long DataCount;
}
