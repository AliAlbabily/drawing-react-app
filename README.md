# Guess the drawing

## Om

Guess the drawing, som namnet antyder, är ett rita & gissa-applikation. Applikationen tillåter två spelare att tävla mot varandra genom att en spelare ritar och den andra spelaren gissar på vad sin motståndare har ritat. Den som ritar får först välja mellan olika ord och om denne inte är nöjd med orden så går det att hämta nya ord. När ett ord har blivit vald så får spelaren en minut på sig att rita. Det finns olika färger att välja mellan för att uttrycka sig på olika sätt. När spelaren som ritar är klar, så är det dags för den andra spelaren att gissa. Rätt gissning ger 1 poäng medan 3 felaktiga gissningar i rad tar bort 1 poäng. Efter rätt gissning eller 3 felaktiga gissningar, så bytar spelarna plats. Första spelaren till 3 poäng vinner!

## Instruktioner

1. Klona repositoryn från GitHub.
2. Öppna repositoryn i Visual Studio Code och installera följande med terminalen:

   - ### `npm install react-scripts`
      Innehåller konfigurationer och skripter som används av Create React App. Utan de kan man inte starta applikationen.
      Applikationen kommer att köras på http://localhost:3000/ i browsern.
      
   - ### `npm install react-sketch-canvas` 
      react-sketch-canvas är ett ritnings-komponent för React. För att kunna rita i applikationen
      behöver du först installera komponenten.

3. Kör applikationen i terminalen med:

### `npm start`

Om detta inte funkar så behöver du dubbelkolla att du skrivit `npm install react-scripts` i terminalen tidigare.

4. Spela!

## Analys av ramverk/bibliotek 

Vi valde att inte använda Angular på grund av inlärningskurvan och kravet på TypeScript. Angular passar bättre för större teams och projekt och eftersom denna projekt är simpel med en utvecklingstid på cirka två veckor kändes Angular för komplex och lite för mycket för vad som behövdes. AngularJS är såklart ett alternativ då det är baserat på JavaScript men samtidigt är det också på väg ut [1].

Vue är ett litet ramverk med bra prestanda. Den är enkel att förstå och lära sig men den är också ny jämfört med React och Angular. Vue inte en lika stor "community" som de andra ramverken/bibliotek vilket kan leda till mindre hjälp om vi kör fast. Detta kan man se över då Vue har tydlig och bra dokumentation och erjubder flexibilitet i koden men här kan ramverket också vara ett dubbeleggat svärd då det finns risk för över flexibilitet [2].

Likt Vue så är React också flexibel med bra prestanda. React är enkel att lära sig men eftersom React uppdaterar sig själv frekvent så leder det till sämre dokumentation än exempelvis Angular och Vue. Den sämre dokumentationen kan dock mitigeras till viss grad eftersom React kan sägas vara den mest populära av de tre nämnda ramverken/bibliotek och har därmed en stor "community" som man kan ta hjälp av [3]. Alla i gruppen har arbetat med React tidigare i både kursen och själva programmet och eftersom vi alla ville fördjupa oss mer i det så var React föredraget, men vi kunde likaväl använt ramverket Vue på grund av den enkla inlärningskurvan och storleken på projektet.

## Referenser

[1] https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-angular-development/

[2] https://www.altexsoft.com/blog/engineering/pros-and-cons-of-vue-js/

[3] https://www.knowledgehut.com/blog/web-development/pros-and-cons-of-react
