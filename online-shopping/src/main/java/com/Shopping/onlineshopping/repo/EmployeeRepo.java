package com.Shopping.onlineshopping.repo;

import com.Shopping.onlineshopping.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@EnableJpaRepositories
@Repository
@Transactional
public interface EmployeeRepo extends JpaRepository<Employee,Integer> {

    Employee findAllByEmployeeNameEquals(String name);

    Employee findByEmployeeEmail(String employeeEmail);

    Optional<Employee> findByEmployeeEmailAndEmployeePassword (String employeeEmail , String employeePassword);
}
