'use strict'
{
  function createColumn(col) {
    // const source = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const source = [];
    for (let i=0;i<15;i++) {
      // source[i]=i+1;
      //1...15 16..30 31..45 46..60 61..75
      source[i] = i + 1 + 15 * col;
    }

    const column = [];
    // b[0] = source.splice(Math.floor(Math.random() * source.length),1)[0];
    // b[1] = source.splice(Math.floor(Math.random() * source.length),1)[0];
    // b[2] = source.splice(Math.floor(Math.random() * source.length),1)[0];
    // b[3] = source.splice(Math.floor(Math.random() * source.length),1)[0];
    // b[4] = source.splice(Math.floor(Math.random() * source.length),1)[0];
    //spliceの返り値は配列になるので[0]を最後につける
    //sourceの配列の要素数は10個になっている。
    for (let i =0; i < 5; i++ ) {
      column[i] = source.splice(Math.floor(Math.random() * source.length),1)[0];
    }
    return column
  } 

  const columns = [];
  columns[0] = createColumn(0);
  columns[1] = createColumn(1);
  columns[2] = createColumn(2);
  columns[3] = createColumn(3);
  columns[4] = createColumn(4);
  columns[2][2] = "FREE";

  // console.table(columns);
  //table図のように表示する
  //ここでは行と列が反対

  const bingo = [];
  for (let row = 0;row < 5;row ++ ) {
    bingo[row] = [];
    for (let col = 0; col < 5; col ++ ) {
      bingo[row][col] = columns[col][row];
    }
  }
  console.table(bingo);

  for (let row = 0;row < 5;row ++) {
    const tr = document.createElement('tr');
    for (let col = 0;col < 5;col++) {
      const td = document.createElement('td');
      td.textContent = bingo[row][col]
      tr.appendChild(td);
    }
    document.querySelector('tbody').appendChild(tr);
  }

}