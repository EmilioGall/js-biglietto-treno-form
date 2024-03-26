# Train Ticket Discount Counter

## Text of the exercise
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
:one: MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
:two: MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
___

## Solution 

WHEN the submit button is clicked

### INPUT

   - [ ] Define the passenger name from the input in html.
   - [ ] Define the number of km from the input in html.
   - [ ] Define the age from the input in html.


### LOGICAL EXECUTION

- **IF** inserted Km is *number* AND inserted Age is *number*.
   - [x] Calculate the entire price of the ticket without any discount.
       ```
       (Number of Km * 0.21)
       ```
   - [x] Define discount for each age category.
       ```
       IF insert age is under 18
           Define discount at 20.
       ELSE IF insert age is over 65
           Define discount at 40.
       ELSE IF insert age is under 12 AND over 0
           Launch Alert
       ELSE 
           Define discount at 0.
       ```
   - [x] Calculate discounted price.
       ```
       (Entire price - (entire price * discount/100))
       ```
   
   ### OUTPUT

   - [x] Approximate final price.
   - [ ] Print the right price with only two decimal numbers in the html.
_
- **ELSE**
   - [x] Data Error
