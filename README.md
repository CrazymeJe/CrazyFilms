# CrazyFilms

Per la creazione di questo applicativo ho deciso di utilizzare il framework Angular con il supporto di Bootstrap per la parte di grafica e stile.

## Obbiettivi

* Visualizzare la lista dei film;
* ricerca del film tramite il titolo;
* visualizzare il dettaglio di un film;
* per ciascun film deve essere possibile fornire un voto da 1 a 5, non modificabile;
* devono essere visibili 2 statistiche: numero di voti inseriti, e la media dei voti inseriti.

## Eseguire l'applicazione

```shell
git clone <link-repo>
npm install
ng serve --open
```

## Grafica

Il sito vuole essere molto semplice e minimalista, puntando molto su una grafica pulita che metta in risalto il tema principale del sito, quindi i film e le loro caratteristiche. 

Come si puó notare nelle pagine di dettaglio dei film si é data molta importanza alla media dei voti che il film ha ricevuto ed hai voti totali che gli utenti hanno lasciato, é inoltre possibile dare un voto in prima persona.

> NOTA: Purtroppo non é stato possibile utilizzare il poster dei film in quanto il link di alcuni di loro non era raggiungibile e dava come errore 403. 

## In memory web api

Non avendo a dispozione un servizio che esponesse delle api da interrogare ho deciso di simularlo utilizzando il progetto: https://github.com/angular/in-memory-web-api. Questo si mette in ascolto delle chiamate `http` e `httpClient` e le ridireziona a se stesso andando a interrogare il database interno. Quest'ultimo supporta anche una serie di semplici operazioni come da esempio:

```pseudocode
GET api/films          // ritorna tutti i films
GET api/films/2        // ritorna i film con l'id uguale a 2
GET api/films?title=a // ritorna tutti i film con una 'a' nel nome
```

Questo comportamento mi é molto tornato utile durante lo svolgimento degli obbiettivi sopra citati.

> Questo tipo di database si aspetta di avere un campo id. Per farlo ho fornito un campo univoco e incrementale chiamato `id`.

## LocalStorage

Uno degli obbiettivi prevedeva il salvataggio del voto inserito dall'utente. Anche in questo caso non avendo a disposizione un servizio che fornisse l'opzione di salvare questo dato in maniera persistente ho optato per utilizzare la `localStorage` (https://developer.mozilla.org/it/docs/Web/API/Window/localStorage). Quest'ultima permette di salvare al suo interno delle stringa utilizzando l'associazione chiave-valore. Grazie a questo posso tenere memoriazzata l'opzione scelta dall'utente, finché quest'ultimo non cancella la cronologia. Per salvare il rating utilizzo la seguente nomenclatura: `rating-<if-film>`. In questo modo sono sicura che la chiave salvata nella `localStorage` é sempre univoca ed é anche facilmente ricostruibile.

