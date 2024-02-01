import React, { useEffect } from "react";
import { deleteUser, getAllUsers } from '../apis/users.api';

import { Iusers } from "../../interfaces/user.interface";
import { Link } from 'react-router-dom';
import { useState } from "react";

const ListProductPage = () => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getAllUsers();
				console.log('fetchData ~ response:', response);
				setLists(response.data);
			} catch (error) {
				console.log('fetchData ~ error:', error);
			}
		};
		fetchData();
	}, []);

	const [lists, setLists] = useState<Iusers[]>([]);

	const handleDeleteUser = async (idUser: number) => {
		try {
			await deleteUser(idUser);
			const newLists = lists.filter((value) => value.id !== idUser);
			setLists(newLists);
		} catch (error) {
			console.log('handleDeleteUser ~ error:', error);
		}
	};
  return (
		<div className="">
			{lists.map((value) => {
				return (
					<div
						key={value.id}
						className="mb-10 border  boder-b border-b-red-400 flex items-center justify-between"
					>
						<div>
							<p>id:{value.id}</p>
							<p>
								username:
								{value.username}
							</p>
							<p>
								age:
								{value.age}
							</p>
              <p>
								address:
								{value.address}
							</p>
						</div>

						<div>
							<Link
								to={`/edit-product/${value.id}`}
								className="bg-blue-400 py-2 px-4 rounded"
							>
								EDIT
							</Link>
							<button
								onClick={() => handleDeleteUser(value.id)}
								className="bg-red-400 py-2 px-4 rounded"
							>
								DELETE
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default ListProductPage;