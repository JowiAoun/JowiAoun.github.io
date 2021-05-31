var question = prompt("Quel forme voulez vous?")
if (question == 1) {
	document.write("Forme 1<br><br>")
  for (let i = 1; i<=10;) {
    document.write("*".repeat(i))
	document.write("<br>")
    i++
  }
} else if (question == 2) {
	document.write("Forme 2<br><br>")
  for (let i = 10; i>=1;) {
    document.write("*".repeat(i))
	document.write("<br>")
    i--
  }
} else if (question == 3) {
	document.write("Forme 3<br><br>")
  for (let i = 10; i>=1;) {
    document.write(" ".repeat(10-i) + "*".repeat(i))
	document.write("<br>")
    i--
  }
} else if (question == 4) {
	document.write("Forme 4<br><br>")
  for (let i = 1; i<=10;) {
    document.write(" ".repeat(10-i) + "*".repeat(i))
	document.write("<br>")
    i++
  }
}
