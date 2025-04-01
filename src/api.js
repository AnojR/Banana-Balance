// import axios from "axios";

// const BANANA_API_KEY = "your-banana-api-key";
// const MODEL_KEY = "your-model-key"; // Use appropriate model

// export const callBananaAPI = async (inputData) => {
//     const url = "https://api.banana.dev"; // Adjust based on API docs
//     try {
//         const response = await axios.post(url, {
//             apiKey: BANANA_API_KEY,
//             modelKey: MODEL_KEY,
//             input: inputData
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Banana API Error:", error);
//         return null;
//     }
// };


// import axios from "axios";

// const BANANA_API_KEY = "tea4dca0e6f5369572767398690n105"; // Replace with your actual key
// const MODEL_KEY = "your-model-key"; // Replace with the correct model

// export const callBananaAPI = async (inputData) => {
//     const url = "https://api.banana.dev/model-invoke"; // Use correct API endpoint
//     try {
//         const response = await axios.post(url, {
//             apiKey: BANANA_API_KEY,
//             modelKey: MODEL_KEY,
//             input: inputData
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Banana API Error:", error.response?.data || error.message);
//         return null;
//     }
// };
import axios from "axios";

onst BANANA_API_URL = "http://marcconrad.com/uob/banana/api.php?out=json";

export const callBananaAPI = async () => {
    try {
        const response = await axios.get(BANANA_API_URL);
        if (response.status === 200) {
            return response.data;
        } else {
            console.error("Unexpected API response:", response.status, response.data);
            return null;
        }
    } catch (error) {
        console.error("Banana API Error:", error.response?.data || error.message);
        return null;
    }
};
