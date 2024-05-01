# Backend

1. Create a virtual environment
python -m venv envname

2. Install the required packages from backend/req.txt
cd backend
pip install -r req.txt

3. Edit the database configuration within file backend/app/database.py

4. Create a database with name blog_post

5. Inside the created database create table blog_posts

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    date_posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
.quit

6. To run the application in development mode

uvicorn main:app --reload


# Frontend

1. Install nodejs of latest version

2. Install the required packages
 - npm install
 - npm install react-router-dom@5.2.0
 - npm install axios

3. To start the application
    - npm start