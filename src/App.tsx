import React from 'react';
import './App.css';

type RedirectButtonProps = {
  url: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self';
};

const RedirectButton = ({
  url,
  children,
  className = '',
  target = '_self'
}: RedirectButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (target === '_blank') {
      e.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  
  };

  return target === '_blank' ? (
    <a
      href={url}
      onClick={handleClick}
      className={`inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors ${className}`}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <button
      onClick={() => (window.location.href = url)}
      className={`text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

function App() {
   return (
    <div className="min-h-screen flex flex-col">
     
      <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
        <div className="px-4 py-4 sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto">
          <section className="flex justify-between items-center">
            <img 
              src="res/img/CNC LOGO.jpg" 
              className="h-8" 
              alt="CNC Logo" 
            />
            <button className="text-gray-700 sm:hidden">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 50 50">
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
              </svg>
            </button>
          </section>
          
          <div className="hidden sm:flex gap-6">
            <a href="/paginas/Quienes" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Quienes somos
            </a>
            <a href="/catalogo" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Catalogo
            </a>
            <a href="/sucursales" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Sucursales
            </a>
            <a href="/contacto" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Contacto
            </a>
            <a href="/pedido" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Realiza tu pedido
            </a>
          </div>
        </div>
      </nav>

     
      <main className="flex-grow pt-24 px-4 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6">Bienvenido a CNC Monterrey</h1>
        <p>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      </main>


    </div>
  );
}

export default App;
