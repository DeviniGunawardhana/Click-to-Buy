package com.Shopping.onlineshopping.repo;

import com.Shopping.onlineshopping.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@EnableJpaRepositories
@Repository
@Transactional

public interface ItemRepo extends JpaRepository<Item,Integer> {


    List<Item> findAllByItemTypeEqualsAndActiveStateEquals(String s , boolean b);

    List<Item> findAllByItemNameEqualsAndActiveStateIsFalse(String name);


    List<Item> findAllByEmployeeIdEquals(int employeeId);

    @Modifying
    @Query(value = "SELECT item_type , COUNT(*) as count FROM item GROUP BY item_type ", nativeQuery = true)
    List<Object[]> countByVisitType();
}
