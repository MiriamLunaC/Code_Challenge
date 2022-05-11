# Code_Challenge

### Dependencias utilizadas en el proyecto.
| Dependencia  | Instalación | ¿Para qué se utiliza? |
| ------------- | ------------- | ------------------ |
| Express  | npm install express --save  | Nos permite crear una Api para aplicaciones Web usando javascript. |
| Jest  | npm install --save-dev jest  | Nos permite hacer test para validar los métodos hechos con javascript. |
| ESLint | npm install eslint --save-dev | Encuentra y resuelve los errores estéticos del código en javascript. |

### Para este proyecto se crearon los siguientes archivos:

```mermaid
graph TD;
    Reader-->StudentsService;
    StudentsService-->StudentsController
    StudentsController-->Server
```
____________________________________________________________________________________________________________________
`Reader.js` : archivo ubicado en `./lib/utils/Reader.js`, contiene un método llamado `readJsonFile`, el cuál, 
su función es leer un archivo tipo json y regresar los datos encontrados, para ello se necesita de el módulo `fs`
ya que permite acceder e interactuar con los archivos.
____________________________________________________________________________________________________________________

`StudentsService.js`: ubicado en `./lib/services/StudentsService.js`, este archivo contiene 3 métodos:

 * `getAllStudents` : Utiliza el método `readJsonFile` de la clase `Reader` para leer el archivo `students.json`
                      y regresa la información obtenida.
     
     ![image](https://user-images.githubusercontent.com/99373164/167922445-0555953e-cbd6-4668-a8ae-f31c854c5db4.png)
                      
 * `getEmailsByHaveCertification` : El fin de este método es regresar los `email` de aquellos estudiantes que
    cuanten con certificación, para ello se obtiene la información de los estudiantes (`students.json`) y se
    hace un filtro para que regrese la información de los estudiantes con certificación, finalmente, con la 
    función `map` se regresan solo los `email`.
    
      ![image](https://user-images.githubusercontent.com/99373164/167922553-5ce30549-4f8f-4bc1-9dea-238f838bb48a.png)
 
 * `getStudentsByCredits`: Este método obtiene la información de todos los estudiantes utilizando el método 
    `readJsonFile` de la clase `Reader` y filtra los resultados basándose en si el campo `credits` es mayor 
    al parámetro que se le manda (por ejemplo 500), y regresa los datos de los estudiantes que cumplen con
    esa condición.
    
    ![image](https://user-images.githubusercontent.com/99373164/167923169-3475dd08-168c-49ec-a8ad-89f5defd087d.png)
    
Para poder acceder a la clase `Read` es necesario "importarlo" en StudentsService.js de la siguiente manera (CommonJs):

   > const Reader = require("../utils/Reader");
__________________________________________________________________________________________________________________________



`StudentsController.js`: ubicado en `./lib/controllers/StudentsController.js`, este archivo contiene 3 métodos:

 * `getAllStudents` : Llama al método `getAllStudents` de la clase `StudentsService` y regresa la información obtenida.
     
     ![image](https://user-images.githubusercontent.com/99373164/167924232-bcfede6b-09af-4eb0-a1d0-df878988b54a.png)
                      
 * `getEmailByHaveCertification` : Llama al método `getEmailsByHaveCertification` de la clase `StudentsService` 
    y regresa la información obtenida.
    
      ![image](https://user-images.githubusercontent.com/99373164/167924274-6fbc72f3-cd70-4ac7-a776-76686669ed63.png)
 
 * `getStudentsByCredits`: Llama al método `getAllStudents` de la clase `StudentsService` y le manda como parámentro
    su parámetro credits, finalmente regresa la información recibida.
    
    ![image](https://user-images.githubusercontent.com/99373164/167923169-3475dd08-168c-49ec-a8ad-89f5defd087d.png)
    
Para poder acceder a la clase `StudentsService` es necesario "importarlo" en StudentsController.js de la siguiente manera (CommonJs):

   > const StudentsService = require("../services/StudentsService");

______________________________________________________________________________

`server.js`: ubicado en `./lib/server.js`, este es el archivo con el que se crea oficialmente el API, se necesita "importar" la clase `StudentsController`, también se importa el modulo `express`.

![image](https://user-images.githubusercontent.com/99373164/167928191-166401da-5efb-4785-839e-3bd8bd15e693.png)

Con express se pueden crear los `endpoints` que se necesiten sin importar el tipo (`GET`, `POST`, `PUT`, `DELETE`). Para este proyecto solo se utilizará el método `GET`.

Guardamos la `App de Express` en la constante `app`, y guardamos en la constante `port` el puerto donde se va a correr el `API` (3000). 
![image](https://user-images.githubusercontent.com/99373164/167929415-db2a9b05-d5b4-454c-be77-19b0625d26c9.png)

Para que se pueda levantar el servicio, es necesario que la `App de Express` "escuche" el puerto, eso se hace de la siguiente manera.

![image](https://user-images.githubusercontent.com/99373164/167929563-cdfefbcc-ea02-4b35-90aa-77c90a0434e8.png)

Se declararon 3 rutas (endpoints) con el método `GET`, una para cada método de StudentsController.

| Endpoint | Request | Response |
| -------- | ------- | -------- |
| localhost:3000/v1/students | localhost:3000/v1/students | Regresa la información de todos los estudiantes |
| localhost:3000/v1/students/emailByHaveCertification | localhost:3000/v1/students/emailByHaveCertification | Regresa los correos electrónicos de los estudiantes que tienen certificación |
| localhost:3000/v1/students/credits/:credits | localhost:3000/v1/students/credits/500 | Muestra los datos de los estudiantes que tienen más de 500 créditos |

Para correr el API se necesita ejecutar el comando `npm run server`, el cuál se declaró en el `package.json` que al correr ese comando es como si corriera `node ./lib/server.js`. 

![image](https://user-images.githubusercontent.com/99373164/167935855-ec014974-127c-435a-bd4c-b8eab7bc4e41.png)

Una vez levantado el `API`, vamos al navegador y accedemos a las rutas que se habilitaron en el `server` (pueden usar las rutas que se encuentran en la columna `Request` de la tabla anterior).


| Código | Respuesta en el navegador |
| ------- | -------- |
| ![image](https://user-images.githubusercontent.com/99373164/167934520-5faeeaf2-e714-457e-9437-4ca4ae72c33e.png) | ![image](https://user-images.githubusercontent.com/99373164/167937280-80ef9df5-3eb2-4341-aa68-d9ea75c254db.png) |
| ![image](https://user-images.githubusercontent.com/99373164/167936583-3b485af2-68ce-4a73-8357-0c59cf8832ad.png) | ![image](https://user-images.githubusercontent.com/99373164/167937504-1cd9370a-5eb0-4aee-a678-3b191ce9f6aa.png) |
| ![image](https://user-images.githubusercontent.com/99373164/167936665-63225d9e-dade-42c4-8c56-07b1d218d12b.png) | ![image](https://user-images.githubusercontent.com/99373164/167937695-277eac6d-3f02-4b1a-88e9-d69812016ef8.png) |

_______________________________________________________________________________________________________________

Como todo sistema, se crearon test para validar que ni los métodos de `StudentsService` y `StudentsController` regresaran datos incorrectos.

* Tests para la clase StudentsService (`./test/services/StudentsService.test.js`).

  ![image](https://user-images.githubusercontent.com/99373164/167939286-c9230f47-910f-4fd3-9e23-592e369bd618.png)

* Tests para la clase StudentsController (`./test/controllers/StudentsController.js`).

  ![image](https://user-images.githubusercontent.com/99373164/167939611-80bc247c-e06d-4c43-859c-9847edfe1fb5.png)

Para correr los test es necesario utilizar `jest`, en el `package.json` se agrega un script con la ruta de `jest` para que al ejecutar el comando `npm test` corran los test.

![image](https://user-images.githubusercontent.com/99373164/167940722-3d9045d5-3f44-4b22-aacb-2712011e8aa1.png)

![image](https://user-images.githubusercontent.com/99373164/167940810-8ab75041-07b8-4162-a1fc-d655a3cee3ed.png)

__________________________________________________________________________________________________________________

Así mismo, en el `package.json` se declaran scripts para hacer uso de ESLint y poder corregir el código del sistema que esté escrito con javascript.

![image](https://user-images.githubusercontent.com/99373164/167941260-89f8e7d8-ff55-4493-ab62-5046e95d777d.png)

El comando `npm run linter` nos muestra los errores que encontró en el código, `npm run linter-fix` corrige algunos de dichos problemas (como agregar ';' al final de las líneas).
____________________________________________________________________________________________________________________
