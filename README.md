Here's a README for your GitHub project based on the provided Java code:

---

# Payroll System

This is a simple Java-based payroll system that manages both full-time and part-time employees. The system allows for adding, removing, and displaying employee details, including their calculated salaries.

## Table of Contents
- [Overview](#overview)
- [Classes](#classes)
  - [Employee](#employee)
  - [FullTimeEmployee](#fulltimeemployee)
  - [PartTimeEmployee](#parttimeemployee)
  - [PayrollSystem](#payrollsystem)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The payroll system consists of four main classes: `Employee`, `FullTimeEmployee`, `PartTimeEmployee`, and `PayrollSystem`. The `Manager` class serves as the entry point for the application. The system supports basic operations like adding, removing, and displaying employee information.

## Classes

### Employee
The `Employee` class is an abstract class that holds common properties and methods for employees, such as `name` and `id`. It includes:
- A constructor for initializing employee details.
- Abstract method `calculateSalary()` that must be implemented by subclasses.
- A `toString()` method to display employee details.

### FullTimeEmployee
The `FullTimeEmployee` class extends `Employee` and represents a full-time employee. It includes:
- A `monthlySalary` property.
- An implementation of the `calculateSalary()` method, which returns the monthly salary.

### PartTimeEmployee
The `PartTimeEmployee` class extends `Employee` and represents a part-time employee. It includes:
- `hourWorked` and `hourlyRate` properties.
- An implementation of the `calculateSalary()` method, which calculates the salary based on hours worked and the hourly rate.

### PayrollSystem
The `PayrollSystem` class manages a list of employees. It includes:
- Methods to add and remove employees.
- A method to display all employees.

## Getting Started

### Prerequisites
- Java Development Kit (JDK) 8 or higher.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/payroll-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd payroll-system
   ```
3. Compile the Java files:
   ```bash
   javac *.java
   ```
4. Run the application:
   ```bash
   java Manager
   ```

## Usage

1. **Add Full-Time and Part-Time Employees:**
   The system allows you to add both full-time and part-time employees by instantiating the respective classes and adding them to the `PayrollSystem`.

2. **Remove Employee:**
   You can remove an employee by their ID using the `removeEmployee()` method.

3. **Display Employees:**
   The `displyEmployee()` method displays the details of all employees currently in the system.

### Example Output:
```bash
DataBase:
Employee Details -->
Name = Varun
id = 101
Salary = 5000.0

Employee Details -->
Name = Bawa
id = 102
Salary = 450.0

Remove:

Total Employees :
Employee Details -->
Name = Varun
id = 101
Salary = 5000.0
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Feel free to customize the README further based on your specific requirements or preferences.
