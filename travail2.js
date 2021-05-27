var question = prompt("Quel forme voulez vous?")
if (question == 1) {
  for (let i = 1; i<=10;) {
    console.log("*".repeat(i))
    i++
  }
} else if (question == 2) {
  for (let i = 10; i>=1;) {
    console.log("*".repeat(i))
    i--
  }
} else if (question == 3) {
    for (let i = 10; i>=1;) {
    console.log(" ".repeat(10-i) + "*".repeat(i))
    i--
  }
} else if (question == 4) {
    for (let i = 1; i<=10;) {
    console.log(" ".repeat(10-i) + "*".repeat(i))
    i++
  }
}
