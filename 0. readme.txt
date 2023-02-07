El proyecto se trabajó desde una PC con proxy.

Para poder conectar git con el repositorio local se debe:

1.	Comprobar que tengamos git instalado: "git --version". Sino, instalarlo "https://git-scm.com/".
1.1	configurar la direccion de proxy para git: "git config --global http.proxy http[s]://direccion:puerto".
2. 	Crear un nuevo repo (En git hub en este caso).
3. 	Ir a la ruta que tenemos nuestros archivos para commitiar, o ir a la direcion donde deseamos tener el repo.
4. 	Click derecho, git bash.
5. 	Inicializar un git en esa direccion: "git init".
6. 	Visualiza el estado del repo. Nos muestra que archivos tenemos y en que estado estan (desactualizado inicialmente): "git status".
7. 	Agregar todos los archivos que queremos commitiar: "git add ." o de a un archivo: "git add nombreArchivo".
8. 	Hacer el commit de los archivos al repo local: git commit -m "first commit".
8.1	En este momento, si nunca o configuramos, tenemos que decirle a git nuestro nombre y mail.
	git config --global user.name "Miguel"
	git config --global user.email miguel.sackmann@gmail.com
	Si lo queremos definir solo para este repo no ponemos global.
9. 	Definir la rama en la que vamos a trabajar: "git branch -M main".
10. 	Manage set of tracked repositories: "git remote add origin https://github.com/MigueFPGA/Prueba.git".
11. 	Subir a git hub: "git push -u origin main".

Cada cambio es necesario ver el archivo con status, hacer un add, identificarnos, commitiar y hacer el push.
