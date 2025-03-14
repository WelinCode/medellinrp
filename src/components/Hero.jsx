import { FaDiscord, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Hero() {
  return (
    <div
      className="bg-dark text-white py-12 md:py-20 relative h-[400px] md:h-[600px] flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/originals/9c/86/12/9c86124c47c9a2dd2fc2311aab56e79f.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Medellin <span className="text-[#3394ed]">Roleplay</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Vive la mejor experiencia de rol en un mundo abierto donde tus
            decisiones marcan la diferencia. Únete a nuestra comunidad y crea tu
            propia historia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#3394ed] text-white px-8 py-3 rounded-full hover:bg-[#1e6bb8] w-full sm:w-auto">
              Ver Productos
            </button>
            <button className="border-2 border-[#3394ed] text-[#3394ed] px-8 py-3 rounded-full hover:bg-[#3394ed] hover:text-white w-full sm:w-auto">
              Nuestro Discord
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <ul className="flex gap-4">
            <li className="w-[50px] h-[50px] md:w-[62px] md:h-[62px] bg-[#1a2533] text-2xl md:text-3xl text-center flex items-center justify-center rounded-full text-[#3394ed] transition duration-300 hover:border-2 border-[#3394ed]">
              <a href="https://discord.gg/bRW4e328">
                <FaDiscord />
              </a>
            </li>
            <li className="w-[50px] h-[50px] md:w-[62px] md:h-[62px] bg-[#1a2533] text-2xl md:text-3xl text-center flex items-center justify-center rounded-full text-[#3394ed] hover:border-2 border-[#3394ed] transition duration-300">
              <FaYoutube />
            </li>
            <li className="w-[50px] h-[50px] md:w-[62px] md:h-[62px] bg-[#1a2533] text-2xl md:text-3xl text-center flex items-center justify-center rounded-full text-[#3394ed] hover:border-2 border-[#3394ed] transition duration-300">
              <a href="https://www.tiktok.com/@medellin_roleplayoficial?_t=ZT-8ugj4GqPH3u&_r=1">
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
