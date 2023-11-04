// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #


for (let line = "#"; line.length <= 4; line += "#")
console.log(line);

for (let line2 = "###"; line2.length >= 1; line2 = line2.slice(0, -1)) {
    console.log(line2);
}


