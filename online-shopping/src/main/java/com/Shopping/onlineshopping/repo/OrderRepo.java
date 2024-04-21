package com.Shopping.onlineshopping.repo;

import com.Shopping.onlineshopping.entity.Item;
import com.Shopping.onlineshopping.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@EnableJpaRepositories
@Repository
@Transactional
public interface OrderRepo extends JpaRepository<Orders,Integer> {
    
}
