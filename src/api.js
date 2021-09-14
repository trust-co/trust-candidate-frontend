const API_URL = 'http://localhost:8000';

export const getAllPlayers = async (position = 'all') => {
  const response = await fetch(`${API_URL}/players?position=${position}`);
  return response.json();
}