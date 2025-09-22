import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear();

  return (
    <footer className= "w-full bg-zinc-800 py-8 border-t border-black-900">
      <div className="flex justify-center space-x-30 text-sm text-gray-700">
         <div className="footer-column">
          <h4 className="text-[#f07651]">Tools</h4>
          <ul>
            <li><a href="#">Browse Foods</a></li>
            <li><a href="#">Calorie Calculator</a></li>
            <li><a href="#">Nutrient Glossary</a></li>
            <li><a href="#">Meal Planning Blog</a></li>
            <li><a href="#">Gift Codes</a></li>
          </ul>
        </div>

         <div className="footer-column">
          <h4 className="text-[#f07651]">Info</h4>
          <ul>
            <li><a href="#">Press</a></li>
            <li><a href="#">For Affiliates</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">DMCA</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="text-[#f07651]">Meal Plans</h4>
          <ul>
            <li><a href="#">1500 Calorie Meal Plan</a></li>
            <li><a href="#">1800 Calorie Meal Plan</a></li>
            <li><a href="#">2500 Calorie Meal Plan</a></li>
            <li><a href="#">3500 Calorie Meal Plan</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="text-[#f07651]">Follow Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="mailto:info@example.com">Email</a></li>
          </ul>
          <p>© {year} bitebot :)</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
