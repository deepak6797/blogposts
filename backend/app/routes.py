from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from . import database, models

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/posts/")
def create_post(title: str, content: str, db: Session = Depends(get_db)):
    post = models.BlogPost(title=title, content=content)
    db.add(post)
    db.commit()
    return post

@router.get("/posts/{post_id}")
def read_post(post_id: int, db: Session = Depends(get_db)):
    post = db.query(models.BlogPost).filter(models.BlogPost.id == post_id).first()
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

@router.put("/posts/{post_id}")
def update_post(post_id: int, title: str, content: str, db: Session = Depends(get_db)):
    post = db.query(models.BlogPost).filter(models.BlogPost.id == post_id).first()
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    post.title = title
    post.content = content
    db.commit()
    return post

@router.delete("/posts/{post_id}")
def delete_post(post_id: int, db: Session = Depends(get_db)):
    post = db.query(models.BlogPost).filter(models.BlogPost.id == post_id).first()
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    db.delete(post)
    db.commit()
    return {"message": "Post deleted successfully"}
