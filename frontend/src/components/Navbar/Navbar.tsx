interface Link {
  name: string;
  href: string;
}

const Navbar = () => {

  let links = [
    {
      name: "Plat",
      href: "/Plat"
    },
    {
      name: "Record",
      href: "/record"
    }, 
    {
      name: "Upload",
      href: "/upload"  
    },
    {
      name: "Settings",
      href: "/settings"  
    },
    {
      name: "Log In",
      href: "/login"   
    }
  ] as Link[]
  
  return (
    <div className='flex flex-col p-8'>
      <h1>Plat</h1>
      {
        links.map(
          (link, index) => {
            return (
              <a key={'navlink-'+index} href={link.href}>
                {link.name}
              </a>
            )
          }
        )
      }
    </div>
  )
}

export default Navbar