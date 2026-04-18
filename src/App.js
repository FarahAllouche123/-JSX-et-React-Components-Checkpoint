// Import des styles globaux
import './App.css';
import './Card.css';

// Import des composants produits
import Price from './components/Price';
import Name from './components/Name';
import Description from './components/Description';
import Image from './components/Image';

// Import React Bootstrap (UI card + button)
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Import image locale (profil utilisateur)
import imgProfile from './assets/profil.jpg';

function App() {

  // Variable utilisateur (sert pour le message conditionnel)
  const userName = "Farah";

  return (
    <div className="App">

      {/* ===================== PRODUCT CARD ===================== */}
      <Card style={{ width: '26rem' }}>

        {/* Nom du produit */}
        <Card.Title>
          <Name />
        </Card.Title>

        {/* Image du produit */}
        <Image />

        <Card.Body>

          {/* Prix du produit (dans un bouton pour stylisation) */}
          <Button variant="primary">
            <Price />
          </Button>

          {/* Description du produit */}
          <Card.Text>
            <Description />
          </Card.Text>

        </Card.Body>
      </Card>

      {/* ===================== USER MESSAGE ===================== */}

      <div
        style={{
          color: "white",
          marginTop: "20px",
          fontSize: "18px",
          textAlign: "center"
        }}
      >

        {/* Affichage image si userName existe */}
        {userName && (
          <img
            src={imgProfile}
            alt="profil"
            style={{
              marginRight: "20px",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />
        )}

        {/* Message conditionnel */}
        {userName ? `Hello ${userName}` : "Hello, there!"}

      </div>

    </div>
  );
}

export default App;