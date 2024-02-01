import { Iusers } from './../../interfaces/user.interface';
import { instance } from './instance';

export const getAllUsers = async () => {
	return await instance.get('/users');
};

// lấy ra theo id
export const getUserById = async (id: string) => {
	return await instance.get(`/users/${id}`);
};

// tạo mới 
export const createUser = async (user: Omit<Iusers, 'id'>) => {
	return await instance.post('/users', user);
};

// cập nhật 
export const updateUser = async (user: Iusers) => {
	return await instance.put(`/users/${user.id}`, user);
};

export const deleteUser = async (id: number) => {
	return await instance.delete(`/users/${id}`);
};

