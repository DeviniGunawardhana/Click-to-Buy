package com.Shopping.onlineshopping.advisor;
import com.Shopping.onlineshopping.Util.StandardResponse;
import com.Shopping.onlineshopping.exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AppWideExceptionHandler {
    @ExceptionHandler(NotFoundException.class)

    public ResponseEntity<StandardResponse> handleNotFoundException(NotFoundException e){
        return new ResponseEntity<StandardResponse>(
                new StandardResponse(404, "Error",e.getMessage()),
                HttpStatus.NOT_FOUND
        );
    }
}
