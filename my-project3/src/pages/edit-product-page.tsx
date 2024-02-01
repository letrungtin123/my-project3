import { getUserById, updateUser } from '../apis/users.api';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface Iusers {
    id: number;
    username: string;
    age: number;
    address: string;
  }

const EditProductPage = () => {
	const router = useNavigate();
	const { id: idParam } = useParams();

	const [userDetail, setUserDetail] = useState<Omit<Iusers, 'id'>>({
		username: '',
    address:'',
		age: 0,
	});

	useEffect(() => {
		if (idParam) {
			const fetchData = async () => {
				try {
					const response = await getUserById(idParam);
					setUserDetail(response.data);
				} catch (error) {
					console.log('fetchData ~ error:', error);
				}
			};
			fetchData();
		}
	}, [idParam]);

	const handleUsernameUser = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setUserDetail({
			...userDetail,
			username: value,
		});
	};
  const handleAddressUser = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setUserDetail({
			...userDetail,
			address: value,
		});
	};
	const handleAgeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.valueAsNumber;
		setUserDetail({
			...userDetail,
			age: value,
		});
	};

	const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const newUser: Iusers = {
				id: Number(idParam),
				username: userDetail.username,
        address: userDetail.address,
				age: userDetail.age,
			};
			console.log('handleSubmitForm ~ newUser:', newUser);
			const response = await updateUser(newUser);
			console.log(' handleSubmitForm ~ response:', response);
			router('/');
		} catch (error) {
			console.log(' handleSubmitForm ~ error:', error);
		}
	};

	return (
		<div className="h-screen bg-gray-300 flex justify-center items-center">
			<div className="flex flex-col items-center gap-4">
				<h2 className="text-2xl font-bold">Sửa sản phẩm</h2>
				<form
					onSubmit={(event) => handleSubmitForm(event)}
					className="flex flex-col items-center gap-4 bg-white shadow-md rounded-lg p-4 w-[500px]"
				>
					<input
						type="text"
						className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
						placeholder="username"
						value={userDetail.username}
						onChange={(event) => handleUsernameUser(event)}
					/>
          <input
						type="text"
						className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
						placeholder="address user"
						value={userDetail.address}
						onChange={(event) => handleAddressUser(event)}
					/>
					<input
						type="number"
						className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
						placeholder="age user"
						value={userDetail.age}
						onChange={(event) => handleAgeUser(event)}
					/>
					<button className="bg-blue-500 text-white p-2 w-full rounded-lg hover:bg-purple-500">
						Sửa sản phẩm
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditProductPage;