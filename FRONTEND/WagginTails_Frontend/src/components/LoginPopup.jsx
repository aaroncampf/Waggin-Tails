function LoginPopup() {
    const [showForm, setShowForm] = useState(false);
  
  
    const handleOpenForm = () => setShowForm(true);
  
  
    return (
      <div className="loginpopup">
        <h3>Get Started!</h3>
        <LoginButton onClick={handleOpenForm} />
        {showForm && (
          <div className="form-modal">
            <LoginSignupForm onClose={() => setShowForm(false)} />
          </div>
        )}
      </div>
    );
  }
  
  
  export default LoginPopup;