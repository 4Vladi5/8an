import React, { useEffect, useState } from 'react';
import { Heart, Flower, Stars, Sparkles, Gift } from 'lucide-react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 1000);
  }, []);

  const messages = [
    "Ти прекрасна, як весняна квітка!",
    "Нехай кожен день буде наповнений радістю та щастям!",
    "Ти робиш цей світ яскравішим своєю посмішкою!",
    "Зі святом весни, краси та кохання!"
  ];

  const images = [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-800 via-purple-700 to-pink-600 relative overflow-hidden">
      {/* Sunset overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-500/20 to-violet-500/30 pointer-events-none" />
      
      {/* Animated elements */}
      <div className="flowers fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute flower-${i + 1} cursor-pointer pointer-events-auto`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
            onClick={() => {
              const el = document.querySelector(`.flower-${i + 1}`);
              el?.classList.add('flower-click');
              setTimeout(() => el?.classList.remove('flower-click'), 1000);
            }}
          >
            {i % 2 === 0 ? 
              <Flower className="text-pink-200 w-8 h-8 drop-shadow-glow" /> : 
              <Stars className="text-yellow-200 w-8 h-8 drop-shadow-glow" />
            }
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center py-8">
        <div className={`text-center transform transition-all duration-1000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-yellow-200 mb-8 dancing-script animate-title drop-shadow-glow">
            З 8 Березня!
          </h1>
          
          <div className="relative max-w-3xl mx-auto">
            <div 
              className="bg-white/15 backdrop-blur-md p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-102 card-container"
              onClick={() => setActiveCard((prev) => (prev + 1) % messages.length)}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Heart className="text-pink-300 w-16 h-16 animate-float drop-shadow-glow" />
              </div>

              <div className="flex justify-center mb-6 space-x-2">
                <Sparkles className="text-yellow-200 w-8 h-8 animate-sparkle drop-shadow-glow" />
                <Stars className="text-pink-200 w-8 h-8 animate-sparkle drop-shadow-glow" />
                <Sparkles className="text-yellow-200 w-8 h-8 animate-sparkle drop-shadow-glow" />
              </div>
              
              <p className="text-2xl md:text-3xl text-white mb-6 leading-relaxed animate-text drop-shadow">
                {messages[activeCard]}
              </p>
              
              <div className="mt-8 relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={images[activeCard]}
                  alt="Spring flowers"
                  className="w-full h-auto rounded-lg transform transition-all duration-500 hover:scale-105"
                />
              </div>

              <button
                className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-full text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto space-x-2 shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGift(!showGift);
                }}
              >
                <Gift className="w-5 h-5" />
                <span>Відкрити подарунок</span>
              </button>

              {showGift && (
                <div className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-lg animate-fadeIn shadow-xl">
                  <p className="text-xl text-white drop-shadow">
                    🎁 Подарунок ти вже отримала да не дуже дорогий но но це поки знаю такі слова тобі не сподобаюця аххаха✨
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;