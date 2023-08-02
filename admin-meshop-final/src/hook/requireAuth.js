import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const requireAuth = (WrappedComponent) => {
    const ComponentWithAuth = (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            const token = localStorage.getItem('jwtToken');
            if (!token) {
                navigate('/login');
            } else {
                const decoded = jwt_decode(token);
                // Kiểm tra hết hạn của token nếu cần thiết và thực hiện các tác vụ khác
                // Nếu token hết hạn, xóa token khỏi localStorage và đưa người dùng về trang đăng nhập
                if (decoded.exp < Date.now() / 1000) {
                    localStorage.removeItem('jwtToken');
                    localStorage.removeItem('jwtUser');
                    localStorage.removeItem('userData');
                    navigate('/login');
                }
            }
        }, [navigate]);

        return <WrappedComponent {...props} />;
    };

    return ComponentWithAuth;
};

export default requireAuth;
