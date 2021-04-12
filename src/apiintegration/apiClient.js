import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/characters',
  headers: {'Content-Type': 'application/json'}
});