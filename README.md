# Personal Portfolio

My personal web development portfolio to be hosted at amanda-nelson.com

## Workflow:

1. Used `npx create-react-app .` to set up blank React app and deleted some of the default content and website name and meta tags.
2. Created a mood board (in assets folder) and [wireframe](https://whimsical.com/portfolio-Srh76YpHunCeGpuhNF47jY@2Ux7TurymN91vtafjqjY) to break down what the site will look like and what components are needed.
3. Created a `Components` folder with the following components per the wireframe: `Header, About, ProjectsSection, ProjectCard, Skills, Contact, Footer`.
4. Created a draft within each new component to get the content needed onto the website. The App.js component was updated with the imported components.
5. Drafted out a simple backend to hold my projects for the ProjectsSection & ProjectCard components.
6. Formatted the application to add a backend that will simultaneously deploy with Heroku.
7. Created my first migration with a simple backend using node-postgres per the note in my [wireframe](https://whimsical.com/portfolio-Srh76YpHunCeGpuhNF47jY@2Ux7TurymN91vtafjqjY) of three tables.
8. Styled my front-end and made sure it has a similar UI as my wireframe.
9. Rearranged my repository into two separate entities to separate the frontend and backend for separate deployment. Conventionally this felt better, and will allow me to use both Vercel for my React App front-end and Heroku for my Node/Express backend.
   In the future, I'll keep the stacks separate from each other to prevent needing to commit a nearly completed application in my first pull request.
10. Deployed the frontend to Vercel and linked my custom domains to it using their DNS information provided.
11. Finalized the backend and deployed it to Heroku.
