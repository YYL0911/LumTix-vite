import { Link } from "react-router-dom"
import logo from "../assets/img/Frame 1000005811.png"
import { useAuth } from '../contexts/AuthContext';

import userIcon from "../assets/img/userIcon.png"
import organizerIcon from "../assets/img/organizerIcon.png"
import adminIcon from "../assets/img/adminIcon.png"


export default function Navbar() { 
  const { userRole, logout } = useAuth();
  return (
    <>
      <nav className="navbar  bg-white  px-lg-5 d-flex align-items-center">
        <div className="container-fluid container px-lg-5">
          <Link className="navbar-brand" to='/'>
            <img src={logo} alt="Logo" className="d-inline-block align-text-top"  />
          </Link>
            <ul className="navbar-nav flex-row gap-4">

              <li className="nav-item ">
                <Link className="nav-link"  to='/'>所有活動</Link>
              </li>

              {/* 活動方 */}
              {userRole === 'organizer' && 
                <li className="nav-item dropdown customNavbar-dropdown">
                  <a className=" icon-link nav-link dropdown-toggle bg-login px-3 border border-2 border-black"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                    <img src={organizerIcon} alt="icon" />
                    名稱
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="nav-item ps-3"><Link className="nav-link"  to=''>活動新增/管理</Link></li>
                    <li className="nav-item ps-3"><Link className="nav-link"  to='/Events'>活動清單</Link></li>
                    <li className="nav-item ps-3"><Link className="nav-link"  to=''>驗票</Link></li>
                  </ul>
                </li>
              }

              {/* 平台方 */}
              {userRole === 'admin' && 
                <li className="nav-item dropdown customNavbar-dropdown">
                  <a className=" icon-link nav-link dropdown-toggle bg-login px-3 border border-2 border-black"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                    <img src={adminIcon} alt="icon" />
                    名稱
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="nav-item ps-3"><Link className="nav-link"  to=''>一般會員管理</Link></li>
                    <li className="nav-item ps-3"><Link className="nav-link"  to=''>舉辦方管理</Link></li>
                    <li className="nav-item ps-3"><Link className="nav-link"  to=''>活動管理</Link></li>
                    <li className="nav-item ps-3"><Link className="nav-link"  to=''>活動提案</Link></li>
                    <li className="nav-item ps-3"><Link className="nav-link"  to=''>營收狀況</Link></li>
                  </ul>
                </li>
              }

              {/* 使用者 */}
              {userRole === 'member' && 
                  <li className="nav-item dropdown customNavbar-dropdown">
                    <a className=" icon-link nav-link dropdown-toggle bg-login px-3 border border-2 border-black"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      
                      <img src={userIcon} alt="icon" />
                      名稱
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li className="nav-item ps-3"><Link className="nav-link"  to='/Personal'>會員資料</Link></li>
                      <li className="nav-item ps-3"><Link className="nav-link"  to=''>票卷管理</Link></li>
                    </ul>
                </li>
              }

              
              {userRole ? ("") : (
                <li className="nav-item  bg-danger px-3">
                  <Link className="nav-link text-white"  to='/Login'>登入</Link>
                </li>
              )}
            </ul>
        </div>
      </nav>
      <hr />
    </>

  )
}
