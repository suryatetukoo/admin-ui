import axios from "axios";

export const getExpenses = async () => {
  const token = localStorage.getItem("token");
  
  const response = await axios.get(
    "https://jwt-auth-eight-neon.vercel.app/expenses",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};