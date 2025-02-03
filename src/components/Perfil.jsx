import React, { useState, useEffect } from 'react';
import { auth} from '../firebase/firebaseConfig';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

function Perfil() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      // Se asume que en Firebase se guarda el nombre completo en displayName
      setFullName(user.displayName || '');
      // Para la edad, al no existir por defecto en Firebase Auth, se simula o se podría obtener de una base de datos adicional.
      setAge(user.age || '');
      setPhotoURL(user.photoURL || 'https://via.placeholder.com/150');
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Actualiza el nombre en Firebase (la edad no se guarda en Firebase Auth, se debe manejar por separado)
      await updateProfile(auth.currentUser, { displayName: fullName });
      Swal.fire({
        icon: 'success',
        title: 'Actualizado',
        text: 'Tu perfil ha sido actualizado.'
      });
      setEditing(false);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message
      });
    }
  };

  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <div className="perfil-photo">
          <img src={photoURL} alt="Foto de perfil" />
        </div>
        <div className="perfil-info">
          {editing ? (
            <form onSubmit={handleUpdate} className="perfil-form">
              <div className="form-group">
                <label>Nombre Completo:</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ingresa tu nombre completo"
                />
              </div>
              <div className="form-group">
                <label>Edad:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Ingresa tu edad"
                />
              </div>
              <div className="button-group">
                <button type="submit" className="btn btn-save">
                  Guardar Cambios
                </button>
                <button type="button" className="btn btn-cancel" onClick={() => setEditing(false)}>
                  Cancelar
                </button>
              </div>
            </form>
          ) : (
            <div className="perfil-details">
              <p>
                <strong>Nombre:</strong> {fullName || '(Sin nombre)'}
              </p>
              <p>
                <strong>Edad:</strong> {age || '24'}
              </p>
              <button className="btn btn-edit" onClick={() => setEditing(true)}>
                Editar Perfil
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Perfil;
