import axios from 'axios';

// Function to make an HTTP POST request to FastAPI backend
const getRating = async (postStr) => {
  try {
    // Make an HTTP POST request to FastAPI backend
    const response = await axios.post('http://fastapi-backend-url/analyze', {
      text: postStr // Assuming 'text' is the key for the post data in backend
    });
    return response.data;
  }
  
  catch (error) {
    console.error('Error fetching scam rating: ', error);
    // Handle error scenarios
    return null;
  }
};

export default getRating;
