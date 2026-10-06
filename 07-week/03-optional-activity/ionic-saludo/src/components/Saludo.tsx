import { IonButton } from '@ionic/react';

interface SaludoProps {
  nombre: string;
}

const Saludo: React.FC<SaludoProps> = ({ nombre }) => {
  const mostrarSaludo = () => {
    alert(`Hola, ${nombre}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Hola, {nombre}</h2>

      <IonButton onClick={mostrarSaludo}>
        Saludar
      </IonButton>
    </div>
  );
};

export default Saludo;