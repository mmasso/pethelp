# pethelp
Trabajo final de curso del ciclo de desarrollo de aplicaciones web - formación profesional de grado superior.

## Instalación del proyecto

### Manual

- Clona el projecto donde quieras:

  `$ git clone https://github.com/mmasso/pethelp`

- Instala las dependencias npm:
  
  `cd petHelpAngular`
  `$ npm install`
 
- Ejecuta el siguiente comando para ejecutar la aplicación:
 
 `npm run ng deploy -o`
 
 - O disfruta de la versión de producción [Aquí](https://pethelp-4495a.web.app/sign-in)


## Descripción técnica:


Este proyecto consistirá en la creación de una aplicación web dinámica, para ordenador de sobremesa, portátil y teléfono móvil.
Estará basada en una arquitectura de 2 capas, cuya una de ellas será una abstracción de otras dos capas, implementadas en un software externo.

El software de Firebase será el programa que nos permita abstraer dos de las capas de la arquitectura de 3 capas. Estas dos serán la capa de negocio y la capa de datos.

La capa de negocio es la capa donde se reciben todas las peticiones para sacar datos por parte de los usuarios, y donde Firebase, el software elegido, permitirá una conexión fácil y sencilla entre las demás capas.

Entonces firebase nos permite abstraer la capa de negocio, donde se procesa todos los datos y la lógica y la capa de datos, que es la capa que nos servirá para acceder a todos los datos que tenemos guardados. Para ella se usa un software específico, un sistema gestor de base de datos, que en nuestro caso será la firebase Realtime Database.

La capa de presentación es la capa encargada de enseñar la interfaz al usuario, es la interfaz misma donde el usuario interacciona con la aplicación y realiza sus peticiones. La capa de presentación la realizamos con el Framework de Angular 11, ya que es un software con el que trabajo muy cómodamente, y tiene muy buena implementación de las apis de google, entre ellas la de google maps, que necesitaremos para la interacción del usuario con los mapas. Angular asimismo engloba HTML5, css o scs y typescript. Para su uso necesitaremos también el gestor de paquetes npm y usaremos el IDE visual Studio Code para llevar a cabo las tareas de programación, tanto para los bots como para la parte visual de la página.

Firebase nos hace prescindir de dos capas de la arquitectura para fundirla en una sola, que nos permitirá prescindir ampliamente del BackEnd. Firebase es un BaaS, Backend-as-a-Service, infraestructura de software que es vendida como un servicio del cual nos beneficiamos ya que la lógica de nuestro negocio está más concentrada en el lado del cliente, que en las peticiones al servidor y la base de datos, del cual solo querremos hacer un CRUD sencillo de este.


## Métodologia usada

El desarrollo incremental es el tipo de métodologia que he usado para este proyecto.

El desarrollo incremental es un tipo de desarrollo de software, que destaca por la escalabilidad y fácil desarrollo de este, siendo más permisivo que otros modelos como el de cascada. Además tiene una gran sinergia junto a los casos de uso, ya que para el desarrollo incremental, deberemos seguir una clara estructura basada en estos para ir escalando en base a los requerimientos de la aplicación, es decir, los mismos que los casos de uso.

Una vez tenemos definidos los requisitos funcionales de la aplicación, podremos empezar con el desarrollo de esta, siguiendo los pasos anteriores definidos, y desarrollando una función en cada iteración del desarrollo incremental.

## Historias de Usuario.

En la sección de animales perdidos:

-Poner un aviso de animal perdido, con imágenes, características del animal y su geolocalización aproximada de donde se perdió.
-Poder interactuar con un mapa general para añadir posibles avistamiento o nuevas zonas de búsqueda
-Poder ver una manera de contactar con los dueños / creadores del aviso.
-Visualizar una lista / mapa con todos los avisos.

Asimismo el sistema automáticamente deberá de:

Activar un sistema de avisos de difusión mediante las principales redes sociales para poder dar a conocer la aplicación y dar más visibilidad a los avisos de animales perdidos o en adopción.

## Coste/Precio Por hora

En clockify se han imputado un total de 74horas y 10 minutos, con el añadido de la planificación por unos 30 horas. Cobrando a 23 euros la hora programada saldria a 1702€ más los costes de planificacion y desarrollo inicial, a 15€ la hora, unos 450€, saliendo a 2152€ el proyecto.

## Precio del software.

El precio de todo el software usado para todo es gratuitio, excepto para:

-Google Firebase: Con un coste por uso, que planean ellos, para iniciar nuestra aplicación no es necesario.
-Canva Pro, 12€ mensuales. Para iconos.
-Billing de google maps API

## Diagrama de componentes

!(algo)[https://github.com/mmasso/pethelp/blob/main/doc/components.jpg]

