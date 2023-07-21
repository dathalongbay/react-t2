import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
import './Layout.css'
import demoStyle from './DemoModule.module.css'
const Layout = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username == 'admin' && password == '123456') {

            // fake user info
            const info = {name: 'admin', 'email': 'admin@gmail.com'}
            localStorage.setItem('user', JSON.stringify(info));
            alert('Đăng nhập thanfh công');
        } else {
            alert('Sai thông tin đăng nhập');
        }
    
    }

    const handleLogout = () => {
        localStorage.removeItem('user');
        alert('Đăng xuất thành công');
    }

    return (
        <>
            <header>
                Logo here | Header của trang web
            </header>

            <div>
                <div>
                    Username :  <input type="text" name="username" value={username} onChange={(evt) => setUsername(evt.target.value)} />
                </div>

                <div>
                    Password <input type="text" name="password" value={password} onChange={(evt) => setPassword(evt.target.value) } />
                </div>
                
            
                <button onClick={handleLogin}>Đăng nhập</button>
                <button onClick={handleLogout}>Đăng xuất</button>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to='/'>Trang chủ</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/admin'>Admin</Link>
                    </li>
                </ul>
            </nav>

            <div className="flexContainer">

                <div className={demoStyle.sidebar + ' sidebar'}>
                    <h3>Sidebar</h3>
                    <p>Sidebar content</p>
                </div>

                <div className="main-content">
                    <Outlet />
                </div>

            </div>


            <footer>
                Copyright @Facebook Meta 
            </footer>
        </>
    );
}

export default Layout;