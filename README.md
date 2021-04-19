# Clinica_Dental_Front_End
 
### Introduccion: 
Parte visual de la gestión de una Clínica Dental que utiliza datos de una API que usa **EXPRESS** y **Sequelize** para gestionar las funciones de SQL

### Funcionalidades: 
  ### SignIn 
  
  - Envia dni y telefono por cabecera al API y si corresponden con algún registro de la base de datos recivimos un json web token.
  - En caso de datos incorrectos muestra el error de datos incorrectos.
  - En caso de fallo de conexión se muestra el error correspondiente.
  ### SignUp 
  
  - Envia datos por body al API y si los campos son correctos se produce una inserción en la base de datos.
  - En caso de enviar un dni repetido se nos indica el error de dni duplicado.
  - En caso de cualquier otro error se nos muestra el error generico.


### Proximas funcionalidades
  
  - Mostrar citas por usuario.
  - Mostrar todas la citas si eres administrador.
  - Crear una nueva cita.
  - Editar el estado de una cita

### Tecnologías

  - **Node.js**: Entorno de ejecución de JavaScript
  - **Dotenv**: Gestión de variables de entorno
  - **React**: libreria para gestión parte visual
