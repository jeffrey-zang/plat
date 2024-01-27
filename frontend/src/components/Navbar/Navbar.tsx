import { NavLink } from "react-router-dom";
import './Navbar.scss'

interface Section {
  heading: string;
  links: Link[];
}
interface Link {
  name: string;
  href: string;
}

const sections = [
  {
    heading: "",
    links: [
      {
        name: "Dashboard",
        href: "/dashboard"
      }
    ]
  },
  {
    heading: "Pitch",
    links: [
      {
        name: "Record",
        href: "/record",
      }, 
      {
        name: "Upload",
        href: "/upload"  
      },
    ]
  },
  {
    heading: "Account",
    links: [
      {
        name: "Settings",
        href: "/settings"  
      },
      {
        name: "Log In",
        href: "/login"   
      }
    ]
  }
] as Section[]

const Navbar = () => {
  
  return (
    <div className='navbar flex flex-col p-6 w-1/5 min-w-[12rem] border-r-[1px] border-r-slate-200 h-screen'>
      <div className='flex flex-col gap-6'>
        <h1 className='font-bold p-2 text-2xl'>
          <NavLink to='/' className='!no-underline !text-black'>
            Plat
          </NavLink>
        </h1>
        {
          sections.map(
            (section, i) => {
              return (
                <div key={`nav-section-${i}`}>
                  <h2 className='px-2 uppercase text-xs mb-2 text-slate-400'>{section.heading}</h2>
                  {
                    section.links.map(
                      (link, j) => {
                        return (
                          <NavLink to={link.href} key={'nav-link-'+j} className={`no-styles navlink p-2 rounded-md !no-underline flex items-center gap-2 text-neutral-500`}>
                            {link.name}
                          </NavLink>      
                        )
                      }
                    )
                  }
                </div>
              )
            }
          )
        }
      </div>

    </div>
  )
}

export default Navbar