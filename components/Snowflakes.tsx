import React, { useEffect, useState } from 'react';

const Snowflakes: React.FC = () => {
  const [flakes, setFlakes] = useState<number[]>([]);

  useEffect(() => {
    // Generate static snowflakes to avoid continuous re-renders causing perf issues
    const newFlakes = Array.from({ length: 20 }, (_, i) => i);
    setFlakes(newFlakes);
  }, []);

  return (
    <div className="snow-container" aria-hidden="true">
      {flakes.map((i) => (
        <div
          key={i}
          className="snowflake text-xl"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 10 + 10}px`
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;
