import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Encontra, reserva y renta un auto - rapido y facil!
        </h1>

        <p className='hero__subtitle'>Reserva un auto nunca fue tan facil</p>

        <CustomButton />
      </div>
    </div>
  );
};

export default Hero;
