import { Link } from 'react-router-dom';

const Logo = ({ className, ...props }) => {
  return (
    <Link to="/" {...props} className="outline-none">
      <h1 className={`text-3xl md:text-5xl font-black tracking-wider ${className}`} style={{ color: '#E50914', fontFamily: 'Arial Black, sans-serif' }}>
        JAPAFLIX
      </h1>
    </Link>
  );
};

export default Logo;
