function toggleMode() {
	const html = document.documentElement // acessando a minha variável através do .documentElement 

	//if(html.classList.contains('light')) {
	//	html.classList.remove('light') //Se na lista de classe do html conter 'light', remover
	//}
	//else {
	//	html.classList.add('light') //Caso contrário, adicionar
	//}

	html.classList.toggle("light")

	//pegar a tag img
	const img = document.querySelector("#profile img")
	//substituir a imagem
	if(html.classList.contains("light")){
	//se tiver light mode, adicionar a imagem light
		img.setAttribute("src", "assets/avatar-light.png")
	}
	else {
	//se tiver sem light mode, mander a imagem normal
		img.setAttribute("src", "assets/avatar-dark.png")
	}
	
}