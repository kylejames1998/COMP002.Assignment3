// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

// This first program outputs the first 4 lines
for (let line = "#"; line.length <= 4; line += "#")
console.log(line);
// This program outputs the last 3 lines
for (let line2 = "###"; line2.length >= 1; line2 = line2.slice(0, -1)) {
    console.log(line2);
}