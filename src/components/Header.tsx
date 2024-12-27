import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="header">
      {/* main container */}
      <div className="header-container">
        {/* left section */}
        <div className="logo">
          <span className="logo-text">
            Syed<span className="logo-highlight">Huzaifa</span>
          </span>
        </div>

        {/* right section (visible only above 1450px) */}
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Services</li>
        </ul>

        {/* Sheet (visible only below 1450px) */}
        <div className="menu-sheet">
          <Sheet>
            <SheetTrigger>
              <Menu className="menu-icon" />
            </SheetTrigger>
            <SheetContent>
              <ul className="sheet-menu">
                <li className="sheet-item">Home</li>
                <li className="sheet-item">About</li>
                <li className="sheet-item">Contact</li>
                <li className="sheet-item">Services</li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;

