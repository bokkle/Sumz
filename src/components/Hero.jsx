import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center">
      <nav className="flex flex-col items-center justify-between">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button type='button' onClick={() => window.open('')}>Github</button>
      </nav>
    </header>
  );
};

export default Hero;
