package com.Shopping.onlineshopping.repo;


import com.Shopping.onlineshopping.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
@Transactional
public interface CustomerRepo extends JpaRepository<Customer, Integer> {

    List<Customer> findAllByActiveStateEquals (boolean activeState);

    //Customer findByCustomerEmailAndCustomerPassword(String email, String password);

  //  Customer findByCustomerName(String customerName);

    Customer findByCustomerName(String  customerName);

    Optional<Customer> findByCustomerNameAndCustomerPassword(String customerEmail, String password);

    Optional<Customer> findByCustomerNameAndActiveStateIsTrue(String customerName);

    //Customer findByCustomerName(String customerName);
}
