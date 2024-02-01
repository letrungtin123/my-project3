import { AxiosError } from 'axios';
import { createUser } from "../apis/users.api";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Iusers {
  id: number;
  username: string;
  age: number;
  address: string;
}

const AddProductPage = () => {
  const router = useNavigate();

  const [nameUser, setNameUser] = useState<string>("");
  const [addressUser, setAddressUser] = useState<string>("");
  const [ageUser, setAgeUser] = useState<number>(0);

  const handleNameUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameUser(event.target.value);
  };

  const handleAddressUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressUser(event.target.value);
  };

  const handleAgeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeUser(event.target.valueAsNumber);
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newUser: Omit<Iusers, "id"> = {
        username: nameUser,
        age: ageUser,
        address: addressUser,
      };
      await createUser(newUser);
      toast.success('Wow so easy!');
      router("/");
    } catch (error) {
      console.log("🚀 ~ handleSubmitForm ~ error:", error);
      toast.error((error as AxiosError).message);
    }
  };

  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Thêm sản phẩm</h2>
        <form
          onSubmit={(event) => handleSubmitForm(event)}
          className="flex flex-col items-center gap-4 bg-white shadow-md rounded-lg p-4 w-[500px]"
        >
          <input
            type="text"
            className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
            placeholder="user name"
            value={nameUser}
            onChange={(event) => handleNameUser(event)}
          />
          <input
            type="text"
            className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
            placeholder="address user"
            value={addressUser}
            onChange={(event) => handleAddressUser(event)}
          />
          <input
            type="number"
            className="border rounded-lg w-full py-2 px-2 outline-none focus:border-gray-400"
            placeholder="age user"
            value={ageUser}
            onChange={(event) => handleAgeUser(event)}
          />
          <button className="bg-blue-500 text-white p-2 w-full rounded-lg hover:bg-purple-500">
            Thêm sản phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
