const API_URL = 'http://localhost:8000';

export const getAllPlayers = async (position = 'all') => {
  let url = `${API_URL}/players`;
  if (position !== 'all') url += `?position=${position}`
  const response = await fetch(url);
  return response.json();
}