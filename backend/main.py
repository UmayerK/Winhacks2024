from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Add OPTIONS method
    allow_headers=["*"],
)

class PostData(BaseModel):
    text: str

def analyze_text(text: str) -> float:
    # text analysis logic here
    return 0.75

@app.post("/analyze")
def analyze_post_data(post_data: PostData):
    text = post_data.text
    rating = analyze_text(text)
    return {"rating": rating}
