import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/features/authSlice';

const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8123/api/auth/login', { email, password });
          const { access_token, user } = response.data;
          console.log(response.data);
          localStorage.setItem('jwtToken', access_token);
          localStorage.setItem('jwtUser',JSON.stringify(user));
          const decoded = jwt_decode(access_token);
          
          // Lưu thông tin người dùng vào localStorage hoặc Redux nếu cần thiết
          localStorage.setItem('userData', JSON.stringify(decoded));
          console.log(decoded);

          dispatch(login(response.data));
          navigate('/');
        } catch (error) {
          console.error('Đăng nhập không thành công:', error);
        }
      };
    return (
        <>
            <div className="bg-gray-100" style={{ minHeight: "100vh" }}>
                <div className="container mx-auto p-4">
                    <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                        <h1 className="text-3xl font-semibold mb-6 text-center">Đăng nhập</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label for="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="mb-4">
                                <label for="password" className="block text-gray-700 font-semibold mb-2">Mật khẩu.</label>
                                <input type="password" id="password" name="password" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <button type="submit" className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-purple-600">Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage;