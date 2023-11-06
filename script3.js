// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #


// This sets i and J to 0 and then checks to see if at each increment the sum of i and j is even or odd. If its even a "#" get added, if not, a " " gets added
// Since every other number is odd, this created a chess grid layout.
for (let i = 0; i < 8; i++) {
    let row = "";
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        row += "#";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }



  