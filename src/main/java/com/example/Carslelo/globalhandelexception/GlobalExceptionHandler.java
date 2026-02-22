package com.example.Carslelo.globalhandelexception;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<ErrorResponse> handleRuntimeException(RuntimeException ex) {

	    ErrorResponse error = new ErrorResponse(
	        ex.getMessage(),
	        HttpStatus.BAD_REQUEST.value()
	    );

	    return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
	}

    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> handleEmailAlreadyExists(
            EmailAlreadyExistsException ex) {

        ErrorResponse error = new ErrorResponse(
                ex.getMessage(),
                HttpStatus.BAD_REQUEST.value()
        );

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
     @ExceptionHandler(ValidationException.class)
     public ResponseEntity<ErrorResponse> handelValidationException(ValidationException va)
     {
    	 ErrorResponse error=new ErrorResponse(va.getMessage(),HttpStatus.BAD_REQUEST.value());
    	 return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
     }
}
