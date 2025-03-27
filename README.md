# YumTea #
This is the frontend for a tea e-commerce website developed with React.js, backend in Springboot and MySQL. It is secured bt Spring Security and JWT.

## Technology and Packages
- React
- React  18
- React redux
- React router dom
- reduxjs/toolkit
- react bootstrap
- react bootstrap icon


## Before You start
Setup the backend API 
### Running BackendAPI ###
The Backend Api is created in **Springboot**.
Visit [here](https://github.com/villysiu/yum_tea_sb?tab=readme-ov-file#running-the-project)
and follow the instruction to start up the backend server in http://localhost:8080/.

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

The React development server should open the application in your default web browser, default at **http://localhost:3000**.



## About the project ##

`/`

`/visit-taste `

`/support `
  - has a form to submit

`/collection`
  - Displays all tea `Menuitem` by `Category` 
  - The `Menuitem` and `Category` are fetched from backendAPI


 `/user/signin` 
  - User signs in with valid credentials, `email` and `password`
  - Validations applied
  - Upon successful sign in, a JWT token is assigned and is being sent in every request in header.

`/user/signup `
  - User signs up with `nickname`, `email` and `password`
  - User has `ROLE_USER` authority
  - After successful signup, user signs in in `/signin`

`/logout`
  - User signs out

`/secure/account `
- Only authenticated user has access
- Authenticated user can change his `nickname`
- Authenticated user can change his `pasoword`

` /secure/orders`
- Only authenticated user has access
- Authenticated user can view all his `Purchase` in the last 3, 7, 30 or 365  days

`/secure/checkout `
- Only authenticated user has access
- Authenticated user can see all his `Cart` items in shopping cart
- Adds gratuity
- Shows total including gratuity and tax
- Upon successful checkout, shopping cart is emptied

## Admin Only ##
Only Authenticated Admin with `ROLE_ADMIN` can access 
`/admin/accounts`
 - can delete user account
 - can toggle authority between  `ROLE_ADMIN` and `ROLE_USER`
 - can search for accounts by name or email, or id

`/admin/menuitems`
 - can add new menuitem
 - can edit menuitem
 - can delete menuitem
 - can toggle menuitem visibility
 - can search for menuitem by name or category,

`/admin/images`
- can add new image 
- can edit image
- can delete image

`/admin/purchases`
- can view all purchases with details by all users
- can delete purchase
- can search purchases by Menuitem, date or email

`/admin/hub`
- can see bar chart of sales from best selling to least popular
![](https://github.com/villysiu/yumtea_sb_frontend/blob/master/public/homepage/barchart.png?raw=true)
- can see a pie chart of popular milk 
![](https://github.com/villysiu/yumtea_sb_frontend/blob/master/public/homepage/piechart.png?raw=true)