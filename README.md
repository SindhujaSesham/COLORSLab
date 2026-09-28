# COLORS Application

## Description

The COLORS application is a web-based application developed using the LAMP stack. The purpose of the application is to allow users to log in, add colors to their account, and search through the existing color list.

---

## Technologies Used

The application uses the LAMP stack:

- **Linux** – Hosts the application server
- **Apache** – Serves the web application
- **MySQL** – Stores application data
- **PHP** – Handles backend API requests and database operations

Frontend technologies include:

- **HTML**
- **CSS**
- **JavaScript**

---

## High-Level Setup Instructions

1. Acquire a platform to host the server. DigitalOcean was used for this project.
2. Clone the GitHub repository.
3. Acquire a domain name and route it to the server's IP address.
4. Create the MySQL database using the provided database schema.
5. Create a MySQL user and grant it the necessary database privileges.
6. Configure the application's database connection settings.
7. Copy the project files into the Apache web directory while maintaining the repository's folder structure. FileZilla or a similar file transfer application can be used to simplify this step.
8. Make sure Apache and MySQL are running.
9. Open the configured domain or server address in a web browser to access the application.

---

## Running and Accessing the Application

Once the application has been configured and Apache and MySQL are running, open a web browser and navigate to the domain or server address associated with the application. The application should display the COLORS login page. After logging in, users can add colors to their account and search through existing colors.

---

## Assumptions, Limitations, and AI Usage

### Assumptions

- A server capable of running the LAMP stack is available. A DigitalOcean LAMP Droplet was used during development.
- The user has basic familiarity with HTML, CSS, and JavaScript.
- The user is able to run basic MySQL commands through a terminal.
- Apache and MySQL are properly installed and running.
- The database has been created using the provided schema and the application's database credentials have been properly configured.

### Limitations

- The application does not currently include a sign-up feature. New users must be added manually through the database.
- The application does not display the complete list of stored colors at once, which can make it difficult to keep track of all existing colors.

### AI Usage
-There was no AI usage for this assignment.
