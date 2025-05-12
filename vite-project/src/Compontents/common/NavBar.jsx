import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useUser } from "@/hooks/useUser";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    children: [
      {
        label: "Real-time Chat",
        href: "/features/chat",
      },
      {
        label: "Video Calls",
        href: "/features/video",
      },
      {
        label: "Event Management",
        href: "/event",
      },
    ],
  },
  {
    label: "Clubs",
    children: [
      {
        label: "Grobotics",
        href: "/grobotics",
      },
      {
        label: "Step",
        href: "/step",
      },
      {
        label: "Dracula",
        href: "/dracula",
      },
      {
        label: "Euphony",
        href: "/euphony",
      },
      {
        label: "Literati",
        href: "/literati",
      },
      {
        label: "GFG",
        href: "/gfg",
      },
      {
        label: "Decoder",
        href: "/decoder",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
 
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const { user , loading , error } = useUser() 

  useEffect(() => {
  
    setIsAuthenticated(localStorage.getItem('authToken')) ; 
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  function handleLogout()
  {  
   
  

   
    
    if (isAuthenticated) {
      localStorage.removeItem("authToken");
      setIsAuthenticated(false);
      alert("Logged out Successfully ") 
      window.location.reload();
  }
  else {
      navigate('/')
  } 
  }
 

  return ( loading?"Loading...":
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/95 shadow-lg" : "bg-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
            <div className="flex-shrink-0">
              <span className="text-yellow-400 text-xl font-bold">College Space</span>
            </div>
            <div className="hidden md:block ml-8">
              <div className="flex items-center space-x-2">
                {navigation.map((item) => (
                  <div key={item.label} className="relative group">
                    <NavLink
                      to={item.href}
                      onClick={() => item.children && toggleDropdown(item.label)}
                      className="text-gray-300 hover:text-yellow-400 md:px-1 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      {item.label}
                      {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                    </NavLink>
                    {item.children && openDropdown === item.label && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {item.children.map((child) => (
                           
                            <NavLink
                              key={child.label}
                              to={child.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-yellow-400"
                            >
                              {child.label}
                            </NavLink>
                          
                          ))}

                         
                        </div>
              

                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
            {
             isAuthenticated?
             <> 
             <NavLink to={`/${(user.role).toLowerCase()}dashboard`} className=" text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium ">Dashboard</NavLink>
           
             <button onClick={handleLogout} className=" text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium ">Logout</button>
             </>:
              
              <>
              <NavLink to="/auth" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium">Sign In</NavLink>
              <NavLink to="/auth" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-500">Sign Up</NavLink>
              </>
            } 
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-yellow-400">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => item.children && toggleDropdown(item.label)}
                  className="text-gray-300 hover:text-yellow-400  px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </button>
                {item.children && openDropdown === item.label && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.href}
                        className="text-gray-400 hover:text-yellow-400 block px-3 py-2 rounded-md text-sm"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <NavLink to="/auth" className="w-full text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-base font-medium">Sign In</NavLink>
              <NavLink to="/auth" className="w-full bg-yellow-400 text-gray-900 px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-500">Sign Up</NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
