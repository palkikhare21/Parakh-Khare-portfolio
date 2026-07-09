import "../styles/navbar.css";
import {
  House,
  UserRound,
  BadgeCent,
  Image,
  Palette,
  Package,
  Mail
} from "lucide-react";

const Navbar = () => {
    const navItems=[
      
      {
        icon: <House size={22}/>,
        label:"Home",
        link:"#home"
      },
      {
        icon:  <UserRound size={22}/>,
        label:"About",
        link:"#about"
      },
      {
        icon:   <BadgeCent size={22}/>,
        label:"Logofolio",
        link:"#logofolio"
      },
      {
        icon:  <Palette size={22}/>,
        label:"Branding",
        link:"#branding"
      },
      {
        icon:  <Image size={22}/>,
        label:"Social",
        link:"#social-media"
      },
      {
        icon:  <Package size={22}/>,
        label:"Packaging",
        link:"#packaging"
      },
      {
        icon: <Mail size={22}/>,
        label:"Contact",
        link:"#contact"
      }
    ];

  return (
    

      <nav className="navbar">
       {/* <div className="logo">
          PK
       </div> */}

<ul>
  {
    navItems.map((item,index)=>(
      <li key={index}>
        <a href={item.link}>
          <span className="icon">
          {item.icon}
          </span>

          <span className="label">
                                    {item.label}
                                </span>
        </a>
      </li>
    ))
  }
</ul>
      </nav>

     
  );
}

export default Navbar;