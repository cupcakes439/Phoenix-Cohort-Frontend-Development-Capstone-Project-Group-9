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
            <p>©2026 Designed by Amaka & Ifeoma A.</p>
            <p>Built by GroupName.</p>
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