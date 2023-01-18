El proyecto se trabajó desde una PC con proxy.

Para poder conectar git con el repositorio local se debe:

1. Comprobar que tengamos git instalado: "git --version".
2. Crear el repositorio en git hub en este caso.
3. configurar la direccion de proxy para git: "git config --global http.proxy http[s]://direccion:puerto".
4. Pararnos en la ruta donde queremos que se genere el repositorio.
5. Clonar el repositorio en la PC local: "git clone https://github.com/MigueFPGA/Front-end-Academy---2022.git".