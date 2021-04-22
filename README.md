# Clínica_Dental_Front_End

### Introducción:
Aplicación React de la gestión de una Clínica Dental, que utiliza datos de una API que usa **EXPRESS** y **Sequelize** para gestionar las funciones de SQL

### Funcionalidades:

### SignIn

- Envía DNI y teléfono por cabecera al API y si corresponden con algún registro de la base de datos recibimos un json web token y nos redirige a la vista Home.
- En caso de no coincidir con la base de datos muestra el error de datos incorrectos.
- En caso de fallo de conexión se muestra el error correspondiente.

### SignUp

- Envía datos por body al API y si los campos son correctos se produce una inserción en la base de datos y nos redirige a la vista de SingIn.
- En caso de enviar un DNI repetido, nos indica el error de DNI duplicado.
- En caso de cualquier otro error nos muestra el error genérico.

### Mis citas

- Muestra todas las citas por usuario que se encuentren en estado programado, si están canceladas no son visibles.
- Se puede cancelar las citas programadas.

### Todas las citas

- Si eres un usuario con el rol administrador puedes ver todas las citas programadas de todos los usuarios en la base de datos.

### Nueva cita

- Formulario donde se puede crear una nueva cita, los campos de estado de cita y datos de usuario se toman de la sesión de usuario. Los doctores se muestran desplegados en un elemento seleccionable y la fecha en un elemento tipo calendario.

### Tecnologías

- **Node.js**: Entorno de ejecución de JavaScript
- **Dotenv**: Gestión de variables de entorno
- **React**: Librería para gestión parte visual
