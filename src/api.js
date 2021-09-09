const API_URL = 'http://localhost:8000';

export const getAllPlayers = async () => {
  const response = await fetch(`${API_URL}/players`);
  return response.json();
}