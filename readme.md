# Contact Management Application

=====================================

## Project Overview

---

### Brief Description

A simple contact management application built with:

- **Backend**: Express.js, leveraging MongoDB for database operations
- **Frontend**: React, utilizing Material UI (MUI) for a seamless user interface

### Application Capabilities

- Add new contacts
- Search for contacts
- Update existing contacts
- Delete contacts

## Setup Instructions

---

### Prerequisites

- **Node.js**: Latest LTS version recommended
- **MongoDB**: Local or MongoDB Atlas
- **Package Manager**: npm (Comes bundled with Node.js) or Yarn

### Backend Setup

#### Step-by-Step Guide

1. **Clone the Repository**

   ```bash
   git clone https://github.com/kaash04/Contact-Management-System.git

   ```

2. **Navigate to Project Directory**

   ```bash
   cd Contact-Management-System
   ```

3. **Install Dependencies (for both frontend and backend)**

   ```bash
   npm install
   ```

4. **Database setup**

   - Ensure MongoDB is running on your local machine or have a MongoDB Atlas cluster ready.
   - Update ./db/index.js with your MongoDB connection string if it's not already configured.

5. **Start Server**

    ```bash
    node index.js
    ```

6. **Start Frontend**

    ```bash
    npm start
    ```

7. **Database Schema**
    | Field Name   | Data Type | Description       |
    |--------------|-----------|-------------------|
    | firstName    | String    | First Name        |
    | lastName     | String    | Last Name         |
    | email        | String    | Email Address     |
    | phoneNumber  | String    | Phone Number      |
    | company      | String    | Company Name      |
    | jobTitle     | String    | Job Title         |

8. **Server Details**

    *Server Port:* 5000

    **EndPoints:**

    | HTTP Method | Endpoint             | Description          |
    |-------------|----------------------|----------------------|
    | POST        | /contacts            | Add new contact      |
    | GET         | /search/:info        | Search for contacts  |
    | GET         | /contacts            | Retrieve all contacts|
    | PUT         | /contacts/:id        | Update a contact     |
    | DELETE      | /contacts/:id        | Delete a contact     |

