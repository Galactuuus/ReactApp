import { useHistory } from 'react-router-dom'

const HeaderForm = () => {

    const history = useHistory();

    const signInRedirect = () => {
        history.push('/signin');
      }
      const signUpRedirect = () => {
        history.push('/signup');
      }
    
    return (
        <div className="buttons">
            <button className="signin" onClick={signInRedirect}>Identifícate</button>
            <button className="signup" onClick={signUpRedirect}>Regístrate</button>
        </div>
    );
}

export default HeaderForm