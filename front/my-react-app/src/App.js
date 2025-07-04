// import { useState } from "react";


// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }
//   return (
//     <button onClick={handleClick}>
//       点了{count}次
//     </button>
//   )
// }

// function App() {
//   return(
//     <div>
//     <h2>独立按钮</h2>
//     <MyButton />
//     <MyButton />
//     </div>
//   )
// }



// function App() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount (count + 1);
//   }

//   return (
//     <div>
//       <h2>关联按钮</h2>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   )
// }

// function MyButton({count, onClick}) {
//   return (
//     <button onClick={onClick}>
//       点了{count}次
//     </button>
//   )
// }

// export default App;



// //第一个练习： 井字棋小游戏项目

// import { useState } from "react";

// function Square({value, onSquareClick}) {
//   return (
//     <button  className="square" onClick={onSquareClick}>{value}</button>
//   )
// }

// export default function Board() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [squares, setSquares] = useState(Array(9).fill(null));

//   function handleClick(i) {
//     if (squares[i] || calculateWinner(squares)) {
//       return;
//     }
//     const nextSquares = squares.slice();
//     if (xIsNext) {
//       nextSquares[i] = 'X';
//     }
//     else {
//       nextSquares[i] = 'O';
//     }
//     setSquares(nextSquares);
//     setXIsNext(!xIsNext);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   if (winner) {
//     status = 'Winner' + winner;
//   }
//   else {
//     status = 'Next player: ' + (xIsNext ? 'X' : 'O');
//   }

//   return (
//     <>
//       <div>{status}</div>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i ++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }


// 第二个小项目：产品数据表
import { useState } from 'react';

function ProductCategoryRow ({category}) {
  return (
    <tr>
      <th>{category}</th>
    </tr>
  )
}

function ProductRow({product}) {
  const name = product.stocked ? product.name : 
  <span style={{color : 'red'}}>
    {product.name}
  </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({products, filterText, inStockOnly}) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      );
    }
    rows.push(
      <ProductRow product={product} key={product.name} />
    );
    lastCategory = product.category;
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

function SearchBar ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
  return (
    <form>
      <input 
      type="text" 
      value={filterText} 
      placeholder="Search..." 
      onChange={(e) => onFilterTextChange(e.target.value)} 
      />
      <br />
      <label>
        <input 
        type="checkbox" 
        checked={inStockOnly} 
        onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {' '}
        Only show product in stock
      </label>
    </form>
  )
}

function FilterableProductTable({products}) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
      filterText={filterText}
      inStockOnly={inStockOnly}
      onFilterTextChange={setFilterText}
      onInStockOnlyChange={setInStockOnly}
      />

      <ProductTable products={products} 
      filterText={filterText}
      inStockOnly={inStockOnly}
      />
    </div>
  )
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return (
    <FilterableProductTable products={PRODUCTS} />
  );
}