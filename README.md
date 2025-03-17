# Proyecto: Amigo Secreto

## Descripción

Este proyecto es una aplicación web para realizar el tradicional juego del **Amigo Secreto**. Los usuarios pueden agregar los nombres de los participantes, realizar el sorteo y visualizar quién es el amigo secreto de cada uno de ellos. La aplicación está desarrollada utilizando HTML, CSS y JavaScript.

### Funcionalidades principales:
1. **Agregar participantes**: Los usuarios pueden ingresar los nombres de los participantes, los cuales se almacenan en una lista.
2. **Realizar el sorteo**: Una vez agregados al menos dos participantes, los usuarios pueden realizar el sorteo, donde el sistema seleccionará aleatoriamente a un amigo secreto.
3. **Mostrar resultados**: El resultado del sorteo es mostrado en la pantalla.

## Tecnologías utilizadas

- **HTML**: Estructura de la página web.
- **CSS**: Estilos visuales para hacer la interfaz atractiva.
- **JavaScript**: Lógica para gestionar los participantes y realizar el sorteo.

## Instalación

1. **Clona el repositorio** o descarga los archivos.
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. **Abre el archivo `index.html`** en tu navegador. No es necesario un servidor local, ya que es una aplicación estática.

## Uso

1. **Agregar participantes**:
   - Ingresa un nombre en el campo de texto y haz clic en "Añadir". Si el nombre ya ha sido ingresado o está vacío, el sistema mostrará una advertencia.
   - Los nombres agregados se mostrarán en una lista debajo del campo de texto.

2. **Realizar el sorteo**:
   - Una vez que hayas agregado al menos dos participantes, haz clic en el botón "Sortear amigo".
   - El sistema elegirá aleatoriamente un amigo secreto y mostrará el nombre en el área de resultados.

## Capturas de pantalla

![image](https://github.com/user-attachments/assets/26b6fd33-8bfb-49a3-b105-2f2686130b06)
![image](https://github.com/user-attachments/assets/fbcfd163-b059-4dce-9892-9d1e84e7a229)
![image](https://github.com/user-attachments/assets/5a3f72dc-e46c-42f7-812f-8c9904b13e9d)


## Posibles problemas

- **Nombre duplicado**: Si intentas agregar un nombre que ya ha sido ingresado, se mostrará una alerta indicando que el nombre ya está en la lista.
- **Faltan participantes**: Si intentas realizar el sorteo con menos de dos participantes, el sistema mostrará un mensaje alertando que se necesitan al menos dos personas.

## Contribuciones

Si deseas mejorar el proyecto o agregar nuevas funcionalidades, puedes hacerlo siguiendo estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad:  
   ```bash
   git checkout -b feature/mi-nueva-funcionalidad
   ```
3. Realiza los cambios y haz commit de ellos:
   ```bash
   git commit -am 'Añadir nueva funcionalidad'
   ```
4. Empuja tus cambios:
   ```bash
   git push origin feature/mi-nueva-funcionalidad
   ```
5. Crea un Pull Request con una descripción clara de los cambios realizados.

## Autor

- **Felipe Rafael Colin Miranda** - Desarrollador principal

---
