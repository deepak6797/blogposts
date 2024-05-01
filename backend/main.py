from fastapi import FastAPI
from app.routes import router

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.include_router(router)