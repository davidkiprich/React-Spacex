import './Header.css'

export default function Header({logo, menu}){
   return(
      <header>
        <div className='logo'>
            <img src={logo} alt="Logo" />
        </div>
        <div className='nav-links'>
            <a href="/">Falcon 9</a>
            <a href="/">Falcon Heavy</a>
            <a href="/">Dragon</a>
            <a href="/">Starship</a>
            <a href="/">Human Spaceflight</a>
            <a href="/">Rideshare</a>
            <a href="/">Starshield</a>
            <a href="/">Starlink</a>
        </div>
        <div className='menu'>
             <a href="/">Shop</a>
             <img src={menu} alt="Menu" />
            
        </div>
      </header>
   );
}