import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface QuoteData {
  content: string;
  author: string;
}

const quotes: QuoteData[] = [
  {
    content: "Education is not preparation for life; education is life itself.",
    author: "John Dewey"
  },
  {
    content: "The function of education is to teach one to think intensively and to think critically.",
    author: "Martin Luther King Jr."
  },
  {
    content: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    content: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  },
  {
    content: "The mind is not a vessel to be filled, but a fire to be kindled.",
    author: "Plutarch"
  },
  {
    content: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    content: "Knowledge is power. Information is liberating. Education is the premise of progress.",
    author: "Kofi Annan"
  },
  {
    content: "The roots of education are bitter, but the fruit is sweet.",
    author: "Aristotle"
  }
];

const PrincipalMessage: React.FC = () => {
  const [thought, setThought] = useState<QuoteData>(quotes[0]);

  useEffect(() => {
    const getRandomQuote = (): QuoteData => {
      // Get used quotes from localStorage
      const usedQuotesStr = localStorage.getItem('usedQuotes');
      const usedQuotes = usedQuotesStr ? JSON.parse(usedQuotesStr) : [];

      // If all quotes have been used, reset the list
      if (usedQuotes.length >= quotes.length) {
        localStorage.setItem('usedQuotes', '[]');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
      }

      // Find a quote that hasn't been used
      let availableQuotes = quotes.filter(quote => 
        !usedQuotes.some((used: QuoteData) => used.content === quote.content)
      );
      
      const randomIndex = Math.floor(Math.random() * availableQuotes.length);
      const selectedQuote = availableQuotes[randomIndex];

      // Add the selected quote to used quotes
      usedQuotes.push(selectedQuote);
      localStorage.setItem('usedQuotes', JSON.stringify(usedQuotes));

      return selectedQuote;
    };

    const updateQuote = () => {
      const storedQuote = localStorage.getItem('currentQuote');
      const storedTimestamp = localStorage.getItem('quoteTimestamp');

      if (storedQuote && storedTimestamp) {
        const lastUpdate = new Date(storedTimestamp);
        const now = new Date();
        
        // Check if the quote is from today
        if (lastUpdate.toDateString() === now.toDateString()) {
          setThought(JSON.parse(storedQuote));
          return;
        }
      }

      // Get a new quote
      const newQuote = getRandomQuote();
      setThought(newQuote);
      
      // Store the new quote and timestamp
      localStorage.setItem('currentQuote', JSON.stringify(newQuote));
      localStorage.setItem('quoteTimestamp', new Date().toISOString());
    };

    // Initial quote update
    updateQuote();

    // Calculate time until next midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    // Set up timer for next midnight
    const midnightTimer = setTimeout(() => {
      updateQuote();
      // Set up daily interval after first midnight
      setInterval(updateQuote, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);

    // Cleanup timers
    return () => {
      clearTimeout(midnightTimer);
    };
  }, []);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Principal's Message */}
          <div className="relative">
            <div className="card p-8 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-6">Principal's Message</h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              
              <div className="flex items-start gap-6">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Principal" 
                    className="w-32 h-32 rounded-lg object-cover shadow-md transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                </div>
                <div>
                  <p className="text-gray-700 mb-6 italic">
                    Dear Parents and Students,
                  </p>
                  <p className="text-gray-700 mb-6">
                    Welcome to Takshasila Vidyapeeth, where we believe in nurturing not just academic excellence, but the overall development of our students. Our commitment is to provide a learning environment that encourages curiosity, creativity, and character building.
                  </p>
                  <p className="text-gray-700 mb-6">
                    In today's rapidly evolving world, we focus on preparing our students not just for examinations, but for life itself. Through our comprehensive curriculum and dedicated faculty, we strive to instill values that will help them become responsible citizens and future leaders.
                  </p>
                  <div className="text-right relative">
                    <div className="absolute -bottom-2 -right-2 w-32 h-12 bg-accent/10 rounded-lg -z-10"></div>
                    <p className="font-semibold text-primary relative z-10">Mrs. Sunita Sharma</p>
                    <p className="text-sm text-gray-600 relative z-10">Principal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thought of the Day */}
          <div className="flex items-center">
            <div className="bg-primary text-white p-8 rounded-lg relative overflow-hidden w-full transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute -top-4 -left-4 opacity-10">
                <Quote size={120} />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">Thought of the Day</h2>
                <div className="w-24 h-1 bg-accent mb-8"></div>
                
                <blockquote className="text-2xl font-heading mb-6 relative">
                  <div className="absolute -left-6 top-0 text-accent/20 text-6xl font-serif">"</div>
                  <p className="relative z-10">{thought.content}</p>
                  <div className="absolute -right-4 bottom-0 text-accent/20 text-6xl font-serif">"</div>
                </blockquote>
                <cite className="block text-right text-accent font-medium">- {thought.author}</cite>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-full"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-br-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;