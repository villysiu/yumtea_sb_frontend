# YumTea #
This is the frontend for a tea e-commerce website.
It is developed with React.js.

## Technology and Packages
- React
- React  18
- React redux
- React router dom
- reduxjs/toolkit
- react bootstrp
- react bootstrap icon


## Before You start
Setup the backend API and import data before starting up the frontend.
### Running BackendAPI ###
The Backend Api is created in **Springboot**.
Visit [here](https://github.com/villysiu/yum_tea_sb?tab=readme-ov-file#running-the-project)
and follow the instruction to start the backend server in Springboot.

### Import Data ###
- Open MySQLWorkbench,
- Follow instruction to connect to MySQL data source with valid credentials
- File -> Open Sql Script
- Open the directory where the backend git is stored
- In `/src/main/resources/static/data/`, open **yumtea_data.sql**
- In Query -> execute(ALL or Selection)
- The menuitem and other necessary backbone data will be added
- 
## Youtube:  ##

Coming soon


## Running the project ##

- Clone the Git repository https://github.com/villysiu/yumtea_sb_frontend.git
- Open Intellij,
    - File -> New -> Project from Version Control
    - Paste the cloned git link into the `URL` box
    - Click `Clone`
  
- Open VSCode,
  - Select the Clone Repository button in the Source Control view.
  - Paste the cloned git link into the `URL` box
  - Click `Clone from GitHub`

- Once the project is cloned, navigate to the project directory `/yumtea_sb_forntend`

- Run `npm install` or `yarn install` to install the dependencies listed in package.json
- Once the dependencies are installed, you can start the development server, by running `npm start` or `yarn start`

The React development server should open the application in your default web browser, usually at **http://localhost:3000**.



## About the project ##

### / ###
### /visit-taste ###
### /support ###
  - has a form to submit

  ### /collection ###
  - Displays all tea `Menuitem` by `Category` 
  - The `Menuitem` and `Category` are fetched from backendAPI
### /user/signin ###
  - User signs in with valid credentials, `email` and `password`
  - Validations applied

### /user/signup ###
  - User signs up with `nickname`, `email` and `password`
  - After successful signup, user signs in in `/signin`

### /logout ###
  - User signs out

### /secure/account ###
- Only authenticated user has access
- Authenticated user can change his `nickname`
- Authenticated user can change his `pasoword`

### /secure/orders ###
- Only authenticated user has access
- Authenticated user can view all his `Purchase` in the last 3, 7 or 30 days

### /secure/checkout ###
- Only authenticated user has access
- Authenticated can see all the `Cart` items in shopping cart
- Adds gratuity
- Shows total including gratuity and tax
- Upon successful checkout, shopping cart is emptied