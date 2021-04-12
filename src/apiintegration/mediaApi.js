import { apiClient } from './apiClient';

export function getImages(limit) {
	return apiClient.get(`/?limit=${limit}`);
}