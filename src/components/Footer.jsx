import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
       <h3>About</h3>

        
       <p className="team-description">We are Group 9 members of the Capstone Project for Frontend Development Phoenix Cohort, collaborating to build a responsive and user-friendly React application while applying modern frontend development practices, teamwork, and version control workflows.</p>

       <p>First name of group members:</p>
       <p className="members">Adeola • Olayinka • Semiyu • Ayobami • Abdulmuiz • Okiezi • Sunday • Victoria • Chidinma • Oluwanifemi • Idowu • Victoria • Anita</p>

       <hr />

       <div className="footer-bottom">
         <div className="footer-info">
           <p>&copy;2026 Design by{" "}
           <a
            href="https://amakandukwu.com"
            target="_blank"
            rel="noopener noreferrer"
           >
            Amaka
           </a>
           {" & "}
           <a
             href="https://www.linkedin.com/in/ifeomaokocha/"
             target="_blank"
             rel="noopener noreferrer"
           >
             Ifeoma A.
           </a>
         </p>

         <p>
          Built by{" "}
           <a
             href="https://github.com/cupcakes439/Phoenix-Cohort-Frontend-Development-Capstone-Project-Group-9.git"
             target="_blank"
             rel="noopener noreferrer"
           >
             Phoenix Cohort Frontend Development Capstone Project Group 9
           </a>
           . All rights reserved 
         </p>
        </div>

       <div className="footer-brand">
         <a
           href="https://tsacademyonline.com"
           target="_blank"
           rel="noopener noreferrer"
         >
           TSAcademy
         </a>
       </div>
      </div>
    </div>
   </footer>
  );
}

export default Footer;