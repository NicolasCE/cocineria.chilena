import React, { useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig'; // Ajusta la ruta si es necesario
import Swal from 'sweetalert2';

function Login() {
  // Estados del formulario y usuario
  const [name, setName] = useState(''); // Para el registro
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // 'login' | 'register' | 'reset'
  const [mode, setMode] = useState('login'); 
  // Estado para almacenar el nombre del usuario logueado (displayName)
  const [currentUser, setCurrentUser] = useState(null);

  /**
   * Validación básica del formulario:
   * - Email no vacío.
   * - En registro, el nombre no puede estar vacío.
   * - Para login y registro, password no vacío y mínimo 6 caracteres.
   */
  const validateForm = () => {
    if (!email.trim()) {
      setError('El email no puede estar vacío.');
      return false;
    }
    if (mode === 'register') {
      if (!name.trim()) {
        setError('El nombre no puede estar vacío.');
        return false;
      }
    }
    if (mode !== 'reset') {
      if (!password.trim()) {
        setError('La contraseña no puede estar vacía.');
        return false;
      }
      if (password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres.');
        return false;
      }
    }
    setError('');
    return true;
  };

  // Maneja el inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      // Utiliza el displayName o, en su defecto, la parte del email antes de @
      const username = result.user.displayName || result.user.email.split('@')[0];
      setCurrentUser(username);
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión completado',
        text: `Bienvenido, ${username}!`
      });
    } catch (err) {
      console.error('Mensaje de error:', err.message);
    
      if (err.code === 'auth/email-already-in-use') {
        setError('Este correo ya está en uso, por favor elige otro.');
        Swal.fire({
          icon: 'error',
          title: 'Correo en uso',
          text: 'Este correo ya está en uso, por favor elige otro.'
        });
      } else if (err.code === 'auth/invalid-credential') {
        // Mensaje personalizado para "credencial inválida"
        setError('Las credenciales no son válidas. Verifica tu email y contraseña.');
        Swal.fire({
          icon: 'error',
          title: 'Credencial inválida',
          text: 'Las credenciales no son válidas. Verifica tu email y contraseña.'
        });
      } else {
        // Resto de errores
        setError('Error al registrar usuario: ' + err.message);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al registrar usuario: ' + err.message
        });
      }
    }
    
  };

  // Maneja el registro de usuario
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // Actualiza el perfil del usuario para establecer el displayName
      await updateProfile(result.user, { displayName: name });
      const username = result.user.displayName || name;
      setCurrentUser(username);
      Swal.fire({
        icon: 'success',
        title: 'Cuenta creada',
        text: `Bienvenido, ${username}!`
      });
    } catch (err) {
      console.error(err);
      setError('Error al registrar usuario: ' + err.message);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al registrar usuario: ' + err.message
      });
    }
  };

  // Maneja el envío del correo de restablecimiento de contraseña
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('El email no puede estar vacío para restablecer la contraseña.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        icon: 'success',
        title: 'Correo enviado',
        text: 'Se envió un enlace a tu correo para restablecer la contraseña.'
      });
    } catch (err) {
      console.error(err);
      setError('Error al enviar el correo de restablecimiento: ' + err.message);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al enviar el correo de restablecimiento: ' + err.message
      });
    }
  };

  // Maneja el cierre de sesión
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      Swal.fire({
        icon: 'success',
        title: 'Sesión cerrada',
        text: 'Has cerrado sesión exitosamente.'
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al cerrar sesión: ' + err.message
      });
    }
  };

  // Si hay usuario logueado, mostramos un mensaje de bienvenida
  if (currentUser) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Bienvenido, {currentUser}!</h2>
        <p style={styles.text}>Has iniciado sesión con éxito.</p>
        <button style={styles.button} onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    );
  }

  // Render del formulario (para login, registro o recuperación)
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        {mode === 'login' && 'Iniciar Sesión'}
        {mode === 'register' && 'Crear Cuenta'}
        {mode === 'reset' && 'Recuperar Contraseña'}
      </h2>
  
      {error && <p style={styles.error}>{error}</p>}
  
      <form 
        style={styles.form}
        onSubmit={
          mode === 'login'
            ? handleLogin 
            : mode === 'register'
              ? handleRegister
              : handleResetPassword
        }
      >
        {/* En modo registro, se muestra un input para el nombre */}
        {mode === 'register' && (
          <label style={styles.label}>
            Nombre
            <input
              style={styles.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        )}
  
        <label style={styles.label}>
          Email
          <input
            style={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
  
        {mode !== 'reset' && (
          <label style={styles.label}>
            Contraseña
            <div style={styles.passwordContainer}>
              <input
                style={styles.input}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span 
                style={styles.eyeIcon} 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </label>
        )}
  
        <button style={styles.button} type="submit">
          {mode === 'login' && 'Iniciar Sesión'}
          {mode === 'register' && 'Registrar'}
          {mode === 'reset' && 'Enviar Email de Recuperación'}
        </button>
      </form>
  
      {mode === 'login' && (
        <>
          <p style={styles.text}>
            ¿No tienes cuenta?{' '}
            <button style={styles.link} onClick={() => setMode('register')}>
              Crear cuenta
            </button>
          </p>
          <p style={styles.text}>
            ¿Olvidaste tu contraseña?{' '}
            <button style={styles.link} onClick={() => setMode('reset')}>
              Recuperar
            </button>
          </p>
        </>
      )}
  
      {mode === 'register' && (
        <p style={styles.text}>
          ¿Ya tienes cuenta?{' '}
          <button style={styles.link} onClick={() => setMode('login')}>
            Iniciar Sesión
          </button>
        </p>
      )}
  
      {mode === 'reset' && (
        <p style={styles.text}>
          ¿Ya recuerdas tu contraseña?{' '}
          <button style={styles.link} onClick={() => setMode('login')}>
            Iniciar Sesión
          </button>
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '400px',
    padding: '30px',
    margin: 'auto',
    marginTop: '100px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    textAlign: 'left',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '18px',
  },
  button: {
    padding: '12px 20px',
    marginTop: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  link: {
    background: 'none',
    border: 'none',
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '14px',
  },
  text: {
    marginTop: '15px',
    fontSize: '14px',
    color: '#666',
  },
};

export default Login;
