package com.Shopping.onlineshopping.repo;

import com.Shopping.onlineshopping.entity.Admin;
import com.Shopping.onlineshopping.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@EnableJpaRepositories
@Repository
@Transactional
public interface AdminsRepo extends JpaRepository<Admin, Integer> {


    Admin findByAdminEmail(String adminEmail);

    Optional<Customer> findByAdminEmailAndAdminPassword(String adminEmail, String password);
}
