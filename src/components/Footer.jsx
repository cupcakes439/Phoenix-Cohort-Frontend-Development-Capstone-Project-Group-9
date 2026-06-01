import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>About</h3>

        <p className="members">
          First name of group members
        </p>

        <hr />

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy;2026 Designed by Amaka & Ifeoma A.</p>
            <p>Built by Phoenix-Cohort-Frontend-Development-Capstone-Project-Group-9.</p>
            <p>All rights reserved.</p>
          </div>

          <div className="academy">
            <p>TSAcademy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;