import { useState } from "react";

export default function MatrixGame() {
  const [grid, setGrid] = useState(Array(9).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (grid[index] === "white") {
      const newGrid = [...grid];
      newGrid[index] = "green";
      setGrid(newGrid);
      setClickOrder([...clickOrder, index]);
      
      if (clickOrder.length === 8) {
        changeToOrangeSequentially([...clickOrder, index]);
      }
    }
  };

  const changeToOrangeSequentially = (order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        setGrid((prevGrid) => {
          const newGrid = [...prevGrid];
          newGrid[idx] = "orange";
          return newGrid;
        });
      }, (i + 1) * 500); // Change color in sequence
    });
  };

  const resetGrid = () => {
    setGrid(Array(9).fill("white"));
    setClickOrder([]);
  };

  return (
    <div className="flex flex-col items-center mt-1 min-h-screen bg-blue-500 p-10">
      <div className="grid grid-cols-3 gap-4 p-6 border-8 border-gray-800 rounded-xl shadow-2xl bg-gray-200">
        {grid.map((color, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-28 h-28 border-4 border-gray-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
      <button
        onClick={resetGrid}
        className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-red-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        Reset
      </button>
    </div>
  );
}




