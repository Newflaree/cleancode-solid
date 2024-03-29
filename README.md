# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```

# Clean Code y Deuda Técnica
## Breve resumen
La deuda técnica, básicamente es la falta de calidad en el código, que genera una deuda que repercutirá en costos futuros.
### Costos económicos:
* Tiempo en realizar mantenimientos.
* Tiempo en refactorizar código.
* Tiempo en comprender el código.
* Tiempo adicional en la transferencia del código.

### Esquema de la deuda técnica:
Hay cuatro cuadrantes en los cuales podemos agrupar nuestra deuda técnica.
1. Deuda Imprudente y Deliverada: Es cuando el desarrollador actúa de forma conciente e imprudentemente, suele llevar a un proyecto que tiene mala calidad y es poco tolerante al cambio. "No hay tiempo, sólo copia y pega eso de nuevo".
2. Deuda Imprudente e Inadvertida: Es provablemente la deuda más peligrosa, ya que se genera por el desconocimiento o falta de experiencia. Usualmente se genera por algún desarrollador de perfil Junior o, lo que es peor, un falso Senior. "¿Qué son los patrones de diseño?"
3. Deuda Prudente y Deliverada: Es la deuda que conocemos y estamos concientes de ella, sabemos que existe. El peligro con esta deuda es que si no se paga a tiempo más intereses vamos a pagar después. Este tipo de deuda llega en un punto del proyecto en que se empieza a llenar de "TODO:" para corregir el versiones posteriores. "Tenemos que entregar rápido, ya refactorizaremos"
4. Deuda Prudente y Inadvertida: Cuando iniciamos un nuevo proyecto, no sabemos a ciencia cierta cómo va a terminar luciendo el poryecto. Nos damos cuenta en este tipo de deuda cuando el proyecto ya alcanza cierto tipo de madurez. A veces no vale la pena volver a hacer las cosas de nueva manera mejor que fue aprendida en el camino, a veces es mejor tomar ese conocimiento y aplicarlo al siguiente proyecto, aplicandolo desde el principio. "Ahora sabemos cómo lo deberíamos haber hecho"

> Caer en la deuda técnica es normal y a menudo es inevitable.

### ¿Cómo se paga una deuda técnica?
La palabra clave es "Refactorización". Es simplemente un proceso que tiene como objetivo mejorar el código sin alterar su comportamiento para que sea más entendible y tolerante a cambios.
Usualmente para que una Refactorización fuerte tenga el objetivo esperado, es imprescindible contar con pruebas automáticas. Si no tenemos pruebas automáticas, no tenemos manera de saber que la Refactorización funcionó de la manera esperada. El no tener pruebas automáticas usualmente produce el famoso "Si funciona, no lo toques".

La mala calidad en el software siempre la termina pagando o asumiendo alguien. Ya sea el cliente, el proveedor con recursos o el propio desarrollador dedicando tiempo a refactorizar o malgastando tiempo programando sobre un sistema frágil.

> "Código Limpio es aquel que se ha escrito con la intención de que otra persona (o tú mismo en el futuro) lo entienda". - Carlos Blé
> "Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito". - Grady Booch
> "Programar es el arte de decirle a otro humano lo que quieres que la computadora haga". - Donald Knuth

A continuación iniciaremos nuestro camino para escribir código limpio.


## Nombres pronunciables y expresiones
### Nombres según tipo de dato
- Arreglos - Arrays: Los arrays son listas iterables, todos los elementos que contiene tienen una característica en común y por esto es bueno pluralizar su nombre es una buena idea.
```
// malo
const fruit = [ 'manzana', 'platano', 'fresa' ];

// regular
const fruitList = [ 'manzana', 'platano', 'fresa' ];

// bueno
const fruits = [ 'manzana', 'platano', 'fresa' ];

// mejor
const fruitNames = [ 'manzana', 'platano', 'fresa' ];
```

- Booleanos - Booleans: Al ser variables que usualmente devuelven valores de vardadero o falso, Dado esto, el uso de prefijos como 'is', 'has', 'can' puede ayudar mucho a que la variable tenga mucho más sentido semántico por si sola. Se procura que la definición del nombre siempre sea positivo y evitar las negaciones en el nombre. 
```
// mal
const open = true;
const write = true;
const fruit = true;
const active = false;
const noValues = true;
const notEmpty = true;

// mejor
const isOpen = true;
const canWrite = true;
const hasFruit = true;
const isActive = false;
const hasValues = false;
const isEmpty = false;
```

- Números: Hay muchos términos para llamar a varibles numéricas. Se recomienda utilizar nombres de variables como 'max', 'min', 'total'.
```
// bad
const fruits = 3;
const cars = 10;

// better
const maxFruits = 5;
const minFruits = 1;
const totalFruits = 3;

const totalOfCars = 5;
```

- Funciones: Las funciones, en general, tienen varias característica interesantes. Los nombres de las funciones deben representar acciones. Por lo general, debe construirse utilizando el verbo que representa la acción seguido de un sustantivo. Estos nombres deben ser bien descriptivos y a su ves consisos, esto quiere decir que el nombre de la función debe expresar lo que hace específicamente, a la vez de abstenerse de toda la implementadción que hace la función. El nombre de las funciones tendrá mucho más sentido cuando hablemos del principio de responsabilidad única, que se refiere a que cada acción debe de hacer una tarea y hacerla bien.
```
// mal
createUserIfNotExists();
updateUserIfNotEmpty();
sendEmailFieldsValid();

// mejor
createUser();
updateUser();
sendEmail();
```


## Consideraciones para las Clases
Las clases deben de tener nombres formados por un sustantivo o clases de sustantivo. Debemos de evitar nombres genéricos porque esto puede llevarnos a que las clases realicen demasiado trabajo o más trabajo del que deberían de hacer. A continuación tenemos una serie de nombres malos, a pesar de que esto es subjetivo.
```
// Malos
class Manager {};
class Data {};
class Info {};
class Processor {};
class SpecialMonsterView {};
```

Tenemos que tener en considereación lo siguiente:
* El nombre es lo más importante de la clase: Esto ayuda a a darle un sentido lógico a su vida. Cuando tenemos un nombre muy generico en la clase, vamos a terminar asignando muchas responsabilidades a la misma, por lo cual va a ser dificil de mantener, va a ser dificil de actualizar y eso es lo que nosotros estamos tratando de evitar.
* Formados por un sustantivo l frases de sustantivo.
* No deben ser demasiado genéricos. 
* Usar UpperCamelCase

Usualmente, para saber que un nombre de una clase es correcto nos podemos hacer tres preguntas:
1. ¿Qué exactamente hace la clase?
2. ¿Cómo exactamente esta clase realiza cierta tarea?
3. ¿Hay algo específico sobre su ubicación?

* Si algo no tiene sentido, lo podemos remover o refactorizar en el peor de los casos.

Más palabras !== mejor nombre
Entre más palabras no significa que el nombre sea mejor. Por ejemplo, la siguiente clase tiene un nombre exageradamente largo y se podría simplificar:
```
class SpelialViewingCaseMonsterEventsHandlerActivitySingleton {};
```

De igual manera que con un nombre que no especifique muy bien sus responsabilidades, un monbre muy largo igualmente podría asignar muchas responsabilidades a una clase.

## Nombres de funciones, argumentos y parámetros.
Sabemos que estamos desarrollando código limpio cuando cada función hace exactamente lo que su nombre indica.
Revisemos el siguiente ejemplo:
```
function sendEmail( toWhom: string ): boolean {
  // Check if is an email
  if ( !toWhom.includes( '@' ) ) return false;

  // Build body or message

  // Send email

  // If everything goes well
  return true;
}
```
Si nosotros tenemos esta función llama sendEmail y tenemos como parámetro el toWhom, sabes que es de tipo string y la función retorna un valor boolean. Lo importante es que la función nos indica claramente que quiero enviar un correo electrónico a ese destinatario y si regresa un true significa que lo hizo bien, de lo contrario regresará un false. Si revisamos el cuerpo de la función, primero revisamos una manera básica de validar que el string recivido en los argumentos de la función es un email. Luego, los comentarios representan acciones que se realizaran para enviar el email, esto queda subjetivo, no significa que se va a hacer dentro de la misma función, ya hablaremos sobre delegar estas responsabilidades a otras funciones.

Ahora lo comparamos con este otro ejercicio:
```
function sendEmail(): boolean {
  // Check if user exists

  // Check password

  // Create use in db

  // If everything goes well
  return true;
```
En este nuevo ejemplo, no recibimos ningún argumento en la función pero sabemos que regresa un valor boolean. De momento el problema no es que no venga un email para enviar un correo, esto puede venir desde otro scope o tomarlo desde un nivel superior. El problema está en cómo está construido el cuerpo de la función. En el primer comentario vamos a verificar si el usuario existe, esto no tiene mucho sentido aquí. Luego revisar la contraseño, esto no tine un sentido claramente definido en esta función. Menos sentido tiene el siguiente comentario que dice crear usuario en base de datos, esto no hace sentido con el nombre de la función en primer lugar. Si nos fijamos en el cuerpo completo de la función, parece que está creando un nuevo usario para el sistema, no está enviando un email en ningún momento. Entonces, a esto nos referimos, las funciones deben de hacer exáctamente lo que dice su nombre.

Antes de seguir trabajando con las funciones, tenemos que dejar algunas cosas en claro.
Cuando nosotros definimos una función le estamos indicando que necesita ciertos parámetros. A diferencia de cuando ejecutamos esta función, le pasamos argumentos:
```
function sendEmail( toWhom: string ): boolean { // El toWhom es el parámetro que estamos solicitando.
  // Check if is an email
  if ( !toWhom.includes( '@' ) ) return false;
  // Build body or message
  // Send email

  // If everything goes well
  return true;
}

sendEmail( 'test@test.com' ); // Cuando ejecutamos esta función, le pasamos uno o más argumentos concretos.
```

No hay un límete en el número de parámetros al momento de definir una función, sin embargo, se recomienda limitar a 3 parámetros posicionales. 
```
// Bien
function sendEmail( toWhom: string, from: string, body: string ): boolean {}
```
Realmente no es un problema, pero cuando las funciones piden muchos parámetros se ven muy aglomeradas.
```
// Mal
function sendEmail( toWhom: string, from: string, body: string, subject: string, apiKey: string ): boolean {}
```

Pero qué pasa cuando tenemos que mandar a fuerza más de tres argumentos?
En este caso vamos a crear una interfaz si estamos trabajando en ts. Si no, tenemos que prescindir de la interfaz y del tipo de dato.
```
// Mejor
interface SendEmailOptions {
  toWhom: string;
  from: string;
  body: string;
  subject: string;
  apiKey: string;
}

function sendEmail( { toWhom, from, body, subject, apiKey }: SendEmailOptions ): boolean {}
```
También se recomienda ordenar los parámetros de manera alfabética, este no es el caso pero se recomienda.






# Princiíos SOLID
Todos los code smells que hemos revisado anteriormente se tratan de resolver con los principios SOLID. La idea de esto no es sólo resolver un problema si no que también el código debe de tener la calidad esperada.

Los Principios SOLID nos indeican cómo organizar nuestras funciones y estructuras de datos en componentes y cómo dichos componentes deben estar interconectados.

Normalmente esto está más enfocado al trabajo con clases, aunque esto no importa del todo ya que muchos de estos princiíos pueden ser aplicados no sólo al paradigma de programación orientada a objetos si no que también lo podemos hacer con nuestros módulos. Entiendace por módulo algún archivo o función de primer nivel en JS o alguna estructura de datos en la cual nosotros podamos agrupar información o métodos, u obtener de ahí propiedades ya que no que estamos a punto de observar se puede aplicar a la mayor parte de nuestra programación. En definitiva, cada producto de software tiene componentes que se comunican entre si encargandose que la información fluya. Aquí es dónde nosotros podremos aplicar los principios SOLID:

## ¿Qué son específicamente los principios SOLID?
Básicamente, son los acrónimos de:
* Single Responsability: Responsabilidad única.
* Open and Close: Abierto y cerrado.
* Liskov Substitution: Sustitución de Liskov.
* Interface Segregation: Segregación de interfáz.
* Dependency Inversion: Inversión de dependencias.

Algo que es muy importante resaltar aquí es que estos son principios, no son reglas.
Una regla es de obligatorio cumplimiento, si no se aplica algo no va a funcionar, si no seguimos estos lineamientos tendremos problemas. Esta es la diferencia con un principio, los principios están aquí porque son recomendaciones que pueden ayudarte a hacer mejor las cosas, no significa que si tú decides no seguir un principio no va a funcionar, esa es la es la principal diferencia entre un principio y una regla.o

## SRP - Princpio de responsabilidad única.
> "Nunca debería haber más de un motivo por el cual cambiar una clase" -Robert C. Martin.

Una clase debe tener una única responsabilidad. Tener más de una responsabilidad en nuestras clases y módulos hace que nuestro código sea dificil de leer, testear y mantener. Es decir, hace que el código sea menos flexible, más rigido y, en definitiva, menos tolerable al cambio. También vale la pena aclarar que tener una única responsabilidad no es sinónimo de hacer una única cosa. Queremos que nuestras clases y métodos se enfoquen en hacer una serie de procesos que estén estrechamente relacionados entre si. El principio de responsabilidad única no se basa en crear clases con un único método, sino en crear componentes que sólo esten expuestos a una fuente de cambio.

## SRP - Detectar violaciones.
* Nombres de clases y módulos demasiado genéricos: Usualmente, cuando tenemos nombres muy genéricos termina haciendo que este módulo o clase tenga muchas responsabilidades y es muy dificil que podamos sentir que las cosas no están en su lugar.
* Cambios en el código suelen afectar la clase o módulo: cuando hacemos muchas modificaciones en el código o se hacen muchas modificaciones para que una clase o módulo se pueda adaptar correctamente a lo que estamos haciendo, significa que estamos violando este principio o al menos deberíamos pensar que nuestra implementación no es la correcta.
* La clase involucra múltiples capas: cuando hablamos de capas, nos referimos a capas como de almacenamiento, o la capa que usamos para comunicarnos con la base de datos, la capa de interfaz de usuario o simplemente estamos haciendo muchas interacciones con diferentes capas de nuestra aplicación. Esto también puede significar que nuestra clase tiene demasiadas responsabilidades.
* Número elevado de importaciones: Esto lo vamos a detectar facilmente, es cuando al principio del archivo tenemos 10 importaciones, igualmente, esto es relativo y difícil de detectar a vecesl. Muchas veces, cuando tenemos muchas importaciones puede ser que las mismas importaciones sean porque estamos instalando muchos componentes o módulos que son necesarios para ese archivo en concreto. Pero cuando hablamos de clases o de módulos abstractos que deben de hacer un tarea específica o hacer tareas que están relacionadas con el nombre del mismo documento o clase no deberían de haber muchas importaciones. Si las hay, significa que esa clase está haciendo muchas cosas.
* Cantidad elevada de métodos públicos: si tenemos muchos métodos o funciones que son expuestas al mundo exterior, podría significar que nuestra clase o módulo hace demasidas cosas y es lo que estamos tratando de evitar.
* Excesivo número de líneas de código: este punto es algo relativo, no es algo que todos los programas puedan seguir al pie de la letra, es decir, no podemos determinar un número máximo de líneas. Pero nosotros mismo cuando escribamos código, nos daremos cuenta de que una clase está creciendo mucho y volviéndose difícil de mantener o tiene demasiadas responsabilidades.

En resumen, el principio de responsabilidad única significa que cada clase o módulo es responsable de hacer algo, y ese algo debe de hacerlo bien.

## OCP - Principio de abierto y cerrado.
Este principio depende mucho del contexto y se entiende el contexto por la forma en la que estamos corriendo nuestra aplicación, puede ser que estemos en diferentes frameworks, diferentes ambientes, a esto nos referimos con el contexto. Pero en pocas palabras, este principio establece que las entidades de software (clases, módulos, métodos, etc) deben estar abiertas para la extensión, pero cerradas para la modificación.

La forma más sencilla de demostrar este principio es considerar un método que hace una cosa. Pensemos que tenemos que grabar o escribir en un archivo de texto, entonces nuestra clase o método, tenemos un archivo que dice "Escribir en archivo hola.txt", luego vienen nuevos requisitos y nos dicen que el archivo cambiará a "Escribir en archivo adios.txt". Entonces, si no estamos aplicando bien el principio significaría que tenemos que abrir el método en el cual escribimos nuestro archivo de hola.txt y físicamente cambiarlo a adios.txt. Esto es una violación a este principio, nuestras entidades deben de estar abiertas a la extención pero cerradas a la modificación. Entonces, si queremos verlo de otra manera, la forma para resolver ese principio hubiera sido que creemos un método o una función en el cual se reciba el nombre del archivo y no importa el valor que teníamos antes. Cambiar el valor implica de que nuestra clase, función o método puede aceptar y es tolerante al cambio. Sin embargo, nosotros no tuvimos que abrir el módulo donde se encuentra la función writeFile() para hacer el cambio. La función sigue estando exactamente igual.
```
writeFile( fileName: string ) {}
```
A esto nos referimos con que esté cerrado al cambio.

El principio de abierto-cerrado también se puede lograr de muchas otras maneras, incluso mediante el uso de la herencia o mediante patrones de diseño de composición como el patrón de estrategia.

## Detectar violaciones de OPC
Como se puede observar en los ejemplos de código, el princiío OPC está estrechamente relacionado con el principio de responsabilidad única. Para detectar violaciones a este principio podemos fijarnos en lo siguiente:
* Los cambios normalmente afectan nuestra clase o módulo constantemente. Es decir, cuando nosotrostenemos un nuevo requerimiento, ese nuevo requerimiento implica tener que abrir una clase, hacer modificaciones a los métodos o módulos y entonces, en ese punto, nosotros nos debemos de dar cuenta de que estamos violando el princiío OPC.
* Cuando una clase o módulo afecta muchas capas. (Presentación, almacenamiento, etc). Es decir, cuando una clase o módulo tiene demasiadas interacciones con diferentes capas de nuestra aplicación. Usualmente esto significa que esta capa tiene demasiadas responsabilidades y a las vez viola el princiío de responsabilidad única con el de abierto-cerrado.
> "Cuando tengamos una duda en la cual preferimos optimizar el código para ganar algunas milésimas de segundo o hacer on código que sea más fácil de leer para otras personas. Si la diferencia el mínima entre estos dos puntos, se debe de optar por escribir un mejor código que sea más fácil de leer para las otras personas". Por ejemplo, si podemos escribir una función en una sola línea y esta única línea es muy dificil de leer y, a demás, estamos ganando muy poco o casi nada es mejor optar por un código que sea más fácil de leer.

## Liskov Substitution - Principio de Sustitución de Liskov
> "Las funciones que utlicen punteros o referenciasa clases base deben ser capaces de usar objetos de clases derivadas sin saberlo". -Robert C. Martin

### Principio de Liskov
Se conoce así por la dortora Barbara Jane Huberman, mas conocida como Barbara Liskov.
Fue ganadora del Turing Award en el año 2008. Por contribuciones a los fundamentos prácticos y teóricos del leguaje de programación y el diseño de sistemas, especialmente relacionados con la abstracción de datos, la tolerancia a fallos y la computación distribuida.

### ¿Qué nos dice este principio propiamente?
"Siendo U un subtipo de T, cualquier instancia de T debería poder ser sustituida por cualquier isntancia de U sin alterar las propiedades del sistema".

En otras palabra, si una clase A es extendida por una clase B, deberíamos ser capaces de sustituir cualquier instancia de A por cualquier objeto de B sin que el sistema deje de funcionar o se presenten comportamientos inesperados.

## Interface Segregation - Principio de segregacipon de interfaz
> "Los clientes no deberían estar obligados a depender de interfaces que no utilicen". - Robert C. Martin

Este principio establece que los clientes no deberían verse forzados a depender de interfaces que no usan.

## Detectar violaciones de ISP
Este principio está estrechamente relacionado con el principio de responsabilidad única y el principio de sustitución de liskov. 

* Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad única y sustitución de Liskov. Esto significa que podemos estar violentando el principio de segregación de interfaz. Mantener tus interfaces simples y específicas y, sobre todo, tener presente la clase cliente que las vas a implementar te ayudará a respetar este principio. Usualmente, el principio de segregación de interfaz suele ser un poco tedioso de implementar ya que hay separar y segregar mucho código o hay que refactorizar mucho. Posiblemente, cuando nos demos cuenta de que estamos violentando este principio, tengamos que hacer muchas refactorizaciones y muchos desarrolladores optan por dejarlo así en lugar de ir más allá y escribir un mejor código. A la larga  todo lo es refactorización se transforma en un muy buen retorno a futuro. Cuando refactorizamos y escribimos un código que es tolerable al cambio, esto nos ayudará bastante a futuro, especialmente si estamos haciendo un proyecto que tiene una longevidad bastante amplia. Puede ser que estemos desarrollando un software y sabemos que va a vivir por 6 meses, puede que en ese caso no sea crítico seguir todo al pie de la letra. El principio de segregación de interfaz es sumaente util cuando tenemos un proyecto con muchos años de vida util.

## Dependency Inversion - Principio de inversión de dependencias.
> "Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Las obstracciones no deben depender de concreciones. Los detalles deben depender de abstracciones". - Robert C. Martin

* Los módulos de alto nivel no deberían depender de módulos de bajo nivel: Los componentes importantes o capas superiores no deben de depender de los componentes que son menos importantes. Dicho en otras palabras, podríamos tener una plicación y la parte del Front-End es la que dicta las reglas de negocio, esto no tendría sentido.
* Ambos deberían depender de abstracciones: Si tratamos de recordar los ejemplos del principio de sustitución de Liskov, nosotros creamos una clase abstracta. Esa clase abstracta dicto cómo van a lucir las clases de las cuales se extiende.
* Las abstracciones no deberían depender de detalles.
* Los detalles deberían depender de abstracciones.

Los componentes más importantes son aquellos centrados en resolver el problema subyacente al negocio, es dicir, la capa de dominio. 
Los menos importantes son los que están próximos a la infraestructura, es decir, aquellos relacionados con la UI, la persistencia, la comunicación con API externas, etc.

Imaginemos que en nuestra aplicación estamos usando un sistema de persistencia basado en archivos de texto o en archivos json que están físicamente en filesystem, pero por motivos de rendimiento o escalabilidad lo pasaremos a mongodb, o a sql o cualquier base de datos. Si nostros tenemos desacroplada correctamente nuestra capa de persistencia y lo hemos aplicado, ya sea con el patrón adaptador o el patrón de repositorio, la implementación de dicha capa debe de ser indiferente a las reglas de negocio, en este caso sería la capa de dominio. Por lo tanto, cambiar la persistencia a mongodb debería ser una tarea relativamente sencilla, no deberíamos de modificar en muchos lugares, tal vez en un par de clases. Posiblemente deberíamos crear una nueva clase para manejar la conexión con la nueva base de datos, y esa nueva clase trabajar con nuestro adaptador. Las demás capas no deberían de verse afectadas, esta debería ser una tarea trivial para las demás partes de nuestra aplicación. Esto debería pasar exactamente igual si un webservice cambia, puede ser un simple cambio en el url, hasta un cambio en el tipo de dato que está regresando, o hasta que regrese un formato diferente (de xml a json, por ejemplo). Estos cambios deberían de ser sencillos de hacer y de adaptarse en nuestra aplicación. Si al momento de decidir trabajar ahora en json y este cambio está afectando mucho a nuestra aplicación, significa que estamos violentando en princiopio de inversión de dependencias, y ahí darnos cuenta que nuestra aplicación está altamente acoplada con un montón de dependencias de terceros  que nosotros deberíamos de haber controlado en una primera instancia.

Cuando hablamos de depender de abstracciones, nos estamos refiriendo a clases abstractas o interfaces.

Uno de los motivos más importantes por el cual las reglas de negocio o capa de dominio deben depender de estas y no de concreciones es que aumenta su tolerancia al cambio. 

### ¿Por qué obtenemos este beneficio?
Cada cambio en un componente abstracto implica un cambio en su implementación. 
Por el contrario, los cambios en implementaciones concretas, la mayoría de las veces, no requieren cambios en las interfaces que implementa. 
Es decir, esto nos va a permitir a nosotros tener una separación de qué cosas tenemos que modificar y qué cosas no deberían de cambiar a pasar de que tengamos un nuevo requerimiento en nuestra aplicación.

### Inyección de dependencias
Dependencia en programación, significa que un módulo o componente requiere de otro para poder realizar su trabajo.
En algún momento nuestro programa o aplicación llegará a estar formado por muchos módulos. Cuando esto pase, es cuando debemos usar inyección de dependencias. Esto puede quedar mucho a discreción del desarrollador ya que se puede saber de antemano cuando un proyecto es grande, pero si no conocemos la magnitud del proyecto y este comienza a crecer mucho, ahí es donde debemos de tener presente la inyección de dependencias. Esto nos permite poder controlar las funcionalidades desde un punto de vista concreto o desde un sitio en concreto en lugar de tenerlas esparcidas por todo el programa. A demás de que este aislamiento nos permitirá a nosotros realizar un testing mucho más fácil, el lugar de ver cómo hacemos un montón de mocks o un montón de spies para tratar de hacer nuestro testing correctamente.
revicemos en siguiente ejemplo:
```
class UseCase {
  constructor() {
    this.externalService = new ExternalService();
  }

  doSomething() {
    this.externalService.doExternalTask();
  }
}

class ExternalService {
  doExternalTask() {
    console.log( 'Doing task...' );
  }
}
```
En este caso nos encontramos con un caso de alto acoplamiento ya que UseCase tiene una dependencia oculta.
Refactoricemos un poco el código y tenemos lo siguiente:
```
class UseCase {
  constructor( externalService: ExternalService ) {
    this.externalSErvice = externalService;
  }

  doSomething() {
    this.externalService.doExternalTask();
  }
}

class ExternalService {
  doExternalTask() {
    console.log( 'Doing task...' );
  }
}
```
En este caso estamos aplicando el principio de inversión de dependencias, dentro del constructor tenemos el externalService y le decimos que es de tipo ExternalService y lo recibimos a la hora de crear la instancia de nuestro UseCase, luego tenemos exactamente el mismo método de doSomething, es decir, para que nuestra clase A haga su trabajo, depende de la clase B, la cuál le está proporsionando ese doExternalTask. Ahora nuestra clase UseCase depende de nuestra clase ExternalService. Hay muchas razones por las que este patrón es altamente recomendado, una de las principales es que ayuda a aplicar el principio de responsabilidad única y también nos ayuda a que es testing sea mucho más fácil. Muchas veces las personas no quieres realizar testing porque el código está tan enredado internamente y con tantas dependencias ocultas que es muy dificil de probar, lo cual hace que nadie quiera realizar testing.
