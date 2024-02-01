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
        href: "/"
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
      {
        name: 'Library',
        href: '/library'
      }
    ]
  },
  {
    heading: 'Feedback',
    links: [
      {
        name: 'Content',
        href: '/feedback/content'
      },
      {
        name: 'Presentation',
        href: '/feedback/presentation'
      },
    ]
  },
  {
    heading: 'Practice',
    links: [
      {
        name: 'Questions',
        href: '/practice/questions'
      }
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
    <div className='navbar flex flex-col p-6 w-1/5 min-w-[12rem] max-w-[15rem] border-r-[1px] border-r-slate-200 h-screen'>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col gap-6'>
          <h1 className='font-bold p-2 text-2xl'>
            <NavLink to='/' className='!no-underline !text-black'>
              Plat
            </NavLink>
            <p className='text-sm font-normal text-neutral-600'>Quack on to your next pitch</p>
          </h1>
          {
            sections.slice(0, -1).map(
              (section, i) => {
                return (
                  <div key={`nav-section-${i}`} className='flex flex-col gap-1'>
                    <h2 className='px-2 uppercase text-xs mb-2 text-slate-400'>{section.heading}</h2>
                    {
                      section.links.map(
                        (link, j) => {
                          return (
                            <NavLink to={link.href} key={'nav-link-'+j} className={`no-styles navlink p-2 rounded-md !no-underline flex items-center gap-2 text-neutral-500 cursor-default transition-all`}>
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

        <div>
          <div key={`nav-section-last`} className='flex flex-col gap-1'>
            <h2 className='px-2 uppercase text-xs mb-2 text-slate-400'>{sections[sections.length - 1].heading}</h2>
            {
              sections[sections.length - 1].links.map(
                (link, j) => {
                  return (
                    <NavLink to={link.href} key={'nav-link-'+j} className={`no-styles navlink p-2 rounded-md !no-underline flex items-center gap-2 text-neutral-500 cursor-default transition-all`}>
                      {link.name}
                    </NavLink>      
                  )
                }
              )
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar