
Pràctica 6: Enginyeria de Prompts amb GitHub a partir de Requisits funcionals


- Prompts utilitzats
  * He creat el projecte a react. utilitzo visual studio code. vull fer una web per a reservar llibres de la biblioteca. la primera historia d'usuari és la següent: US-01
Com a usuari, vull registrar-me amb el meu correu per poder accedir al sistema de reserves..
Criteris d'acceptació:
 - La funcionalitat ha d'estar disponible a la interfície principal.
 - L'usuari ha de poder desfer l'acció si és necessari.
 - El sistema ha de confirmar amb un missatge després de l'acció.
 - Totes les dades s'han de guardar correctament i ser accessibles posteriorment. 
  * ja veig la pàgina. ara vull estils. vull que sembli una web d'una biblioteca professional, moderna i adaptable a qualsevol pantalla
  * et passo tots els requisits: US-01
Com a usuari, vull registrar-me amb el meu correu per poder accedir al sistema de reserves..
Criteris d'acceptació:
 - La funcionalitat ha d'estar disponible a la interfície principal.
 - L'usuari ha de poder desfer l'acció si és necessari.
 - El sistema ha de confirmar amb un missatge després de l'acció.
 - Totes les dades s'han de guardar correctament i ser accessibles posteriorment.
US-02
Com a usuari, vull reservar llibres disponibles per assegurar-me que podré llegir-los..
Criteris d'acceptació:
 - La funcionalitat ha d'estar disponible a la interfície principal.
 - L'usuari ha de poder desfer l'acció si és necessari.
 - El sistema ha de confirmar amb un missatge després de l'acció.
 - Totes les dades s'han de guardar correctament i ser accessibles posteriorment.
US-03
Com a administrador, vull afegir llibres al sistema per tenir el catàleg actualitzat..
Criteris d'acceptació:
 - La funcionalitat ha d'estar disponible a la interfície principal.
 - L'usuari ha de poder desfer l'acció si és necessari.
 - El sistema ha de confirmar amb un missatge després de l'acció.
 - Totes les dades s'han de guardar correctament i ser accessibles posteriorment. 
US-04
Com a usuari, vull cancel·lar una reserva per alliberar el llibre si ja no el necessito..
Criteris d'acceptació:
 - La funcionalitat ha d'estar disponible a la interfície principal.
 - L'usuari ha de poder desfer l'acció si és necessari.
 - El sistema ha de confirmar amb un missatge després de l'acció.
 - Totes les dades s'han de guardar correctament i ser accessibles posteriorment.
  * quan et registres, vull que et redirigeixi al dashboard, o que hi hagi algún botó que et redirigeixi. actualment he d'actualitzar la pàgina per a poder accedir-hi
  * ERROR in ./src/App.js 43:44-56
export 'default' (imported as 'RegisterForm') was not found in './components/RegisterForm' (module has no exports)
  * ara la landing page està blanca quan no està la sessió iniciada
  * no té ben implementada la funció 
  * diguem a quin fitxer he de canviar el codi, i passa'm el codi correcte
  * tot bé, pero no apareixen les meves reserves correctament
  * a les meves reserves, hauria d'aparèixer una llista dels llibres reservats i un botó per cancel·lar la reserva.
  * @workspace falta aquesta implementació, per als bibliotecaris: US-03
Com a administrador, vull afegir llibres al sistema per tenir el catàleg actualitzat..
Criteris d'acceptació:
 - La funcionalitat ha d'estar disponible a la interfície principal.
 - L'usuari ha de poder desfer l'acció si és necessari.
 - El sistema ha de confirmar amb un missatge després de l'acció.
 - Totes les dades s'han de guardar correctament i ser accessibles posteriorment.
  * @workspace setBooks is not a function
TypeError: setBooks is not a function
at handleSubmit
  * @workspace el bibliotecari ha de poder eliminar llibres
  * @workspace a quin fitxer puc editar els llibres que hi ha per defecte a la biblioteca?
  * @workspace acabo d'iniciar l'app i no hi ha cap llibre a la biblioteca
  * @workspace no apareix cap llibre


- Captures de pantalla del resultat
![image](https://github.com/user-attachments/assets/0745c66e-e34b-4519-8576-8e71b6594da3)
![image](https://github.com/user-attachments/assets/6a81e4ba-4a09-4cd9-817c-5c1db27159ff)
![image](https://github.com/user-attachments/assets/49c4084a-1191-4df7-b5e7-c7eaa2eeda8e)
![image](https://github.com/user-attachments/assets/5378c787-2664-4d40-980b-a61c8040530a)











- Reflexió sobre l'ús de Copilot
Hem pogut comprovar amb sorpresa com GitHub Copilot és capaç de generar codi funcional a partir de simples instruccions en forma de prompts, basades en les històries d’usuari que li proporcionem. Aquesta eina mostra una gran capacitat per entendre el context i oferir solucions ràpides i sovint molt encertades.
Tot i així, durant el procés anàvem revisant el codi generat per assegurar-nos que inclogués tot el que havíem demanat en cada prompt. Això ens ha ajudat a entendre millor com interpreta les instruccions i a ajustar-les quan calia per obtenir el resultat esperat.

Ens hem adonat que Copilot pot ser un suport molt útil que ens estalvia temps i esforç en tasques repetitives o estructures de codi conegudes. Ens facilita la vida com a programadors, ajudant-nos a ser més productius i a concentrar-nos en la resolució de problemes més complexos.
Tot i això, també ens fa reflexionar sobre el futur de la nostra professió. L’eficiència de Copilot ens fa pensar en com pot evolucionar el rol del programador en un món on la intel·ligència artificial té cada vegada més pes. Ens preocupa si aquestes eines poden acabar substituint part del treball humà, però també entenem que poden ser oportunitats per enfocar-nos en altres àrees més creatives i estratègiques del desenvolupament.

En definitiva, Copilot és una eina poderosa que, ben utilitzada, pot complementar i potenciar la feina dels programadors, però també ens convida a estar en constant aprenentatge i adaptació.



