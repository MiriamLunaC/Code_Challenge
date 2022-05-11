# Code_Challenge

### Dependencias utilizadas en el proyecto.
| Dependencia  | Instalación | ¿Para qué se utiliza? |
| ------------- | ------------- | ------------------ |
| Express  | npm install express --save  | Nos permite crear una Api para aplicaciones Web usando javascript. |
| Jest  | npm install --save-dev jest  | Nos permite hacer test para validar los métodos hechos con javascript. |
| ESLint | npm install eslint --save-dev | Encuentra y resuelve los errores estéticos del código en javascript. |

### Para este proyecto se crearon los siguientes archivos:
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

En el código se ve de la siguiente manera: 

![image](https://user-images.githubusercontent.com/99373164/167931098-75a1168f-d80c-42ec-bf39-b41c0483a67a.png)

_______________________________________________________________________________________________________________

