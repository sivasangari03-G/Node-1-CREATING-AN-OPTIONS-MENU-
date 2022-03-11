const express = require("express");
const app = express();
app.use(express.json());
// const PORT = 8000;
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});
let arr = ["book1", "book2"];
function books() {
	readline.question(`select options 1 or 2 or 3: `, (option) => {
		if (option === "1") {
			console.log(arr);
			books();
		}
		if (option === "2") {
			readline.question(`Add any book which you like `, (answer) => {
				arr.push(answer);
				console.log(arr);
				console.log("Added successfully!");
				books();
			});
		}
		if (option === "3") {
			readline.question(
				`Are you sure you want to quit - press Y to quit `,
				(answer) => {
					if (answer === "Y" || answer === "y") {
						console.log("Bye Bye");
						readline.close();
					}
				}
			);
		}
		if (option <= 0 || option >= 4) {
			console.log(
				"You have selected an invalid entry so please press 1, 2 or 3"
			);
			books();
		}
	});
}
books();

// app.listen(PORT, () => {
// 	console.log(`App is running on port ${PORT}`);
// });
