import Image from 'next/image';
import BgImage from '../public/assets/home/teacher.jpg';

const HeroSection = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Background Image */}
      <Image
        src={BgImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          filter: 'brightness(70%)',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>

      {/* Content Box */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            color: '#333',
          }}
        >
          Discover Crescent
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '15px',
            color: '#555',
          }}
        >
          Welcome to Crescent Academy – Where Learning Shines Bright!
        </p>
        <p
          style={{
            fontSize: '1rem',
            marginBottom: '30px',
            color: '#666',
            lineHeight: '1.6',
          }}
        >
          At Crescent Academy, we are committed to providing top-notch educational support
          and enrichment programs for students from kindergarten to grade 12. Our goal is to
          foster a love for learning and help each student reach their full potential. Join us
          on a journey of academic excellence and personal growth!
        </p>
        <a href="/programs">
          <button
            style={{
              backgroundColor: '#17008c',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#4b44c1')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#17008c')}
          >
            Explore Programs
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
