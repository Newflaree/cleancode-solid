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


