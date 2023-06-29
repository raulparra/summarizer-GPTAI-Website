
import { logo } from '../assets';

const Hero = () => {

  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <img src={ logo } alt="simz_logo" className='w-28 object-contain' />  

          <button
            type='button'
            onClick={() => window.open('https://github.com/raulparra')}
            className='black_btn'
          >
            GitHub
          </button>
        </nav>
        <h1 className="head_text">
            Resumir Artículos con <br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAi GPT-4</span>
        </h1>
        <h2 className="desc">
        Simplifique su lectura con Sumz, un resumen de artículos de código abierto que transforma artículos extensos en resúmenes claros y concisos.
        </h2>
    </header>
  )
}

export default Hero