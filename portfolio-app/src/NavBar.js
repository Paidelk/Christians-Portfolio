import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      backgroundImage: "url('./Background.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '30%' }}>
        <a href="https://github.com/Paidelk" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '200px' }}>
          GitHub
        </a>
        <a href="https://gitlab.com/g14-classified/hang-time" target="_blank" rel="noopener noreferrer">
          GitLab
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '40%' }}>
        <Link to="/">
          Christian Ramos
        </Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '30%' }}>
      <Link to="/Resume">
  Resume
</Link>
<a href="https://www.linkedin.com/in/ramos-chris/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '200px' }}>
  LinkedIn
</a>
      </div>
    </nav>
  );
};
