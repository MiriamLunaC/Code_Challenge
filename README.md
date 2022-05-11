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
