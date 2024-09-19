## RTK Project: This project is a React application that leverages Redux Toolkit for state management and React Router for navigation. The application is designed to display and manage a list of items with features like pagination, search, and detailed item views.

 **Item Management Application** is a dynamic web application developed using React, Redux Toolkit, and React Router. This project harnesses the power of Redux Toolkit for robust state management and React Router for smooth navigation, providing a clean and interactive user experience. The application features a comprehensive item listing with pagination and search functionalities, along with detailed views for individual items. Designed to be intuitive and responsive, it ensures a seamless browsing and management experience for users.

![homepage](https://github.com/amit159357/The-Return-Journey/blob/amit/src/assets/images/home.png?raw=true)

![Search](https://github.com/RishiBakshii/mern-ecommerce/blob/main/frontend/src/assets/images/banner3.jpg?raw=true)

![single item](https://github.com/amit159357/The-Return-Journey/blob/amit/src/assets/images/Single.png?raw=true)


# **Features**
User:



### **User:**
- **Item Listing:**
  - View a comprehensive list of items with pagination and search functionalities.
  - Filter items based on search terms to quickly find specific products..
 :



- **Item Details:**
  - Access detailed information for each item, including title and other attributes.
  - View and interact with individual item details through a dedicated page..
  




- **Search Functionality:**
  - Perform case-insensitive searches to find items based on titles.
  - Instant updates on search results as you type.
  
  



- **Pagination:**
  - Navigate through paginated item lists with forward and backward controls.
  - Automatically adjusts visibility based on the search input.
  

- **Dynamic Routing:**
  - Utilize dynamic routing to view detailed pages for individual items.
  - Update URLs to reflect current item views and search parameters.


### **Security & User Experience:**
- **Banckend Protection:**
  - CORS is taking care of backend.




# **Project Setup**

### Prerequisites
- Node.js ( version v21.1.0 or later )
- MongoDB installed and running locally

### Clone the project

```bash
  git clone https://github.com/amit159357/The-Return-Journey.git
```

### Navigate to the project directory

```bash
  cd The Return Journey
```

### Install dependencies for frontend and backend separately
**Tip:** To efficiently install dependencies for both frontend and backend simultaneously, use split terminals.

Install frontend dependencies
```bash
cd frontend
npm install --legacy-peer-deps
```

Install backend dependencies

```bash
cd backend
npm install
```


### Environment Variables
**Backend**
- Create a `.env` file in the `backend` directory.
- Add the following variables with appropriate values
```bash
# Database connection string
DATABASE_URL="mongodb://localhost:27017/your-database-name"

# Frontend URL (adjust if needed)
ORIGIN="http://localhost:3001"


# Environment (production/development)
PRODUCTION="false" # Initially set to false for development
```

**Frontend**
- Create a `.env` file in the `frontend` directory
- Add the following variable:
```bash
# Backend URL (adjust if needed)
REACT_APP_BASE_URL="http://localhost:3000" 
```

**Important**
- Replace all placeholders (e.g., your_database_name, your_email) with your actual values.
- Exclude the `.env` file from version control to protect sensitive information.


**Important:**

- **Separate terminals**: Run the commands in separate terminal windows or use `split terminal` to avoid conflicts.
- **Nodemon required**: Ensure you have `nodemon` installed globally to run the backend development servers using `npm run dev`. You can install it globally using `npm install -g nodemon`.

#### Start the backend server
- Navigate to the `backend` directory: `cd backend`
- Start the server: `npm run dev` (or npm start)
- You should see a message indicating the server is running, usually on port 8000.
     
#### Start the frontend server:
- Navigate to the `frontend` directory: `cd frontend`
- Start the server: `npm start`
- You should see a message indicating the server is running, usually on port 3000.




   
### Accessing the Application
Once both servers are running, you can access them at the following URL's:
- Backend: http://localhost:3001
- Frontend: http://localhost:3000

## **Bonus**
Don't forget to star the repository and share your feedback!✨

## Authors
- [@AmitBhandari](https://amit9675.github.io/)