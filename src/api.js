const API_URL = 'http://localhost:8000';

export const getAllPlayers = async () => {
  const response = await fetch(`${API_URL}/players`);
  console.log(response)
  return response.json();
}