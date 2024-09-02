# Objective
Apply the test-driven development approach to solve a problem based on the following specification.


# Specification

## Method Signature

`int add(string numbers)`

## Description

The `add` method processes a string of numbers separated by delimiters and returns their sum.

## Examples

- **Input:** `""`  **Output:** `0`
- **Input:** `"1"` **Output:** `1`
- **Input:** `"1,5"`**Output:** `6`
- **Input:** `"1\n2,3"`**Output:** `6`


## Requirements

1. **Handling New Lines:**
   - The `add` method should be able to process numbers separated by new lines as well as commas. For instance, the input `"1\n2,3"` should return a sum of `6`.

2. **Support for Custom Delimiters:**
   - The method should accommodate custom delimiters specified at the beginning of the input string. The format for specifying a custom delimiter is `//{delimiter}\n{numbers}`. For instance, the input `"//;\n1;2"`, where the delimiter is `";"`, the output should be `3`.


3. **Handling Negative Numbers:**
    - If the input string contains any negative numbers, the method should throw an exception with the message `"Negative numbers are not allowed: <negative_number>"`.

    - If there are multiple negative numbers, include all of them in the exception message, separated by commas. For example, for the input `"1,-2,3,-4"`, the exception message should be `"Negative numbers are not allowed: -2, -4"`.



# Try it
Use the following command to clone this repository, install the required packages, and run the tests.
```
$ git clone git@github.com:cosmos-lab/test-driven-development.git

$ npm install

$ npm test
```


Enjoy coding!