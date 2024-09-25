import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div style={{
      width: isOpen ? '200px' : '0',
      overflow: 'hidden',
      transition: 'width 0.3s',
      backgroundColor: '#f4f4f4',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
    }}>
      <button onClick={toggleSidebar}>閉じる</button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/">アプリメニュー</Link></li>
        <li><Link to="/stopwatch">ストップウォッチ</Link></li>
        <li><Link to="/timer">タイマー</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
