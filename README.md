# Guestbook App

![Screenshot](./assets/logo.png)

## Setup Instructions

### Requirements:
- Docker & Docker Compose 

### Steps:

## 🚀 Linux
   ```  
   git clone https://github.com/yourname/specterstack 
   cd specterstack 
   docker-compose up --build 
    ```
   
## 🚀 Windows
1. CDownload Docker(https://www.docker.com/get-started/)
2. Download the repository and open the folder with Visual Studio Code
2. Run `docker-compose up --build`  inside the VSC terminal
3. Visit `http://localhost:3000`

## Development without Docker

### Backend
1. Navigate to `backend/`
2. Create `.env` file and configure DB credentials
3. Run `npm install`
4. Run MySQL and execute schema from `db/schema.sql`
5. Run `node index.js`

### Frontend
1. Navigate to `frontend/`
2. Run `npm install`
3. Run `npm start`

## Notes
- Backend runs at: http://localhost:5000
- Frontend runs at: http://localhost:3000
- Database: MySQL (localhost:3306 or `db` if using Docker)
- Includes CORS and basic input validation
