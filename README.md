
# phase-3-front-end
- You can access the deployed site by visiting:

  - https://y-3rcz42bsj-ismahaneyy.vercel.app/
  
## Application Behaviour(BDD)
This is an application that allows users to add pets and be able to see all
the pets they have added. The user should also be able to:
- view all the available pets
- search for a pet through the name or breed
- update details for a pet that they have added
- a user should be able to remove details of pets they added
- a user should NOT be able to update or delete pets they have not added
- a user must be logged in order to use the application

## Pseudo Code

### Install dependancies. The application dependancies are:
 1. react-router-dom "npm  install react-router-dom"
 2. axios "npm install axios"
 3. zustand "npm install zustand"

### logic
- Login and Registration
 - The landing page will welcome a user to the website and allow them to register and/or login
 - After they login they will be taken to the pets of that user


- Searching for a pet
 - The user can search for a pet either through the name or the breed
 - This functionality will be available in two pages:
    My pets page
    All pets page


- User pets
 - This page allows a user to see all the pets that they have added
 - It also allows a user to add a new pet
 - It allows a user to edit an existing pet
 - It allows a user to remove an existing pet
 - It allows a user to navigate to a page that displays all the pets available

- All pets
 - displays all the pets that have been added to the application

### React Components
- Home
  - This is the first page of the application ie. "/"
  - It displays a welcome message
  - It displays the register form by default
  - It displays the login form if a user already exists

- Register
  - Takes  user input of name and password and adds it to the database
  - queries the database for  a user with that name:
  - if the user exists it prompts the app user to enter a unique username
  - if they dont it does a post request and adds them to the database
  - it then displays the login form to allow the user to login to the application

- Login
  - Checks whether a user has already been added to the database:
  - If they have it redirects them to a page with all their pets
  - If they are not it prompts them to register first:

- Search
  - Takes a user input of a pet name or breed and automatically  returns any pets that match the input
  - It searches from the database and changes the state of the store to reflect the search results

- Delete
  - Removes a pet from the database

- Edit
  - Allows a user to edit a specific pets details

- users pets
  - Displays the search component
  - Displays a list of all the pets the user has added
  - Displays the delete component alongside each pet and passes it that pets id
  - Displays the update component alongside each pet and passes it that pets id

- pets Gallery
  - Displays the search components
  - Dislays all the pets in the database by rendering pet card with the pets details for each pet

- petsKeeper
  - Fetches pets data from the api and adds the to the store

- Pet card
 - Renders a card that displays a pets name,breed and image


## Descripton
- This project uses react library.

- It has 7 components :
    - AddNewpet 
        - It allows a user to add new pets 

    - DeletePets    
        - Allows a user to only delete the pets they have added

    - Updatepets
        - Allows a user to update pets they have added

    - LoginPets
        - Allows a user who already has an account to view all his pets 

    - PetsCard
        - Displays a pets name and image

    - RegisterUser
        - Allows someone to create an account 

    - SearchForPets
        - Allows a user to search for a pet by name or breed

- It has PetsKeeper that fetches pets data from the api and adds the to the store                 

- It has views which has three components

    - Home
        - This is the first page of the application 

    - PetsGallery
        - Were all pets are displayed 

    - UsersPets
        - displays all the pets that a specific user has

## REQUIREMENTS FOR USE

### Prerequisites

- For you to use the content on this repo ensure you have the following:

    - node v14.17.4 and above

    - A computer that runs on either of the following; (Linux, Mac OS and Windows)

    - nodejs 9.0+

    - npm 6.14.14 and above

    - Vue 2.6.11

    -  Status:
        - maintained and is currently under development

    - Version: - v0.1.0

    - Setup instructions
        
      - To use this repository on your machine requires some simple steps:

            - Open a terminal / command line interface on your computer

      - Clone the repo by using the following to create a copy on your local machine: "https://github.com/ismahaneyy/phase-3-front-end"

        - Change directory to the repo folder:

            - cd phase-3-front-end

        - Open it in Visual Studio Code

            - code .

        - npm start to install all the dependancies

        - Version: v0.1.0

        - Node Version: 14.17.4 and above

- Authors:

    - [Ismahan Abdirizak] (https://github.com/ismahaneyy)

- License

    - This project is licensed under the MIT License                