## Wilkommen zur Aufgabe 4

Das Denkspiel „Wolf, Schaf, Kohlkopf“ soll auf dem Computer nachprogrammiert werden.

Die Spielregeln sind folgende:

Gegeben sind ein Fluss, ein Bauer, ein Wolf, ein Schaf und ein Kohlkopf. Weiterhin existierten ein Fluss sowie ein Boot, in das jeweils maximal zwei „Personen“ einsteigen können.

Die wichtigste Randbedingung ist: Sobald der Bauer nicht aufpasst (=am selben Ort anwesend ist), frisst das Schaft den Kohlkopf bzw. der Wolf das Schaf.

Zu Beginn des Spiels befinden sich Bauer, Wolf, Schaf und Kohlkopf auf der linken Seite des Flusses. Ziel des Spieles ist, sämtliche „Personen“ (Wolf, Schaf, Kohlkopf und den Bauern) wohlbehalten, das heißt lebend, ans rechte Ufer zu bringen.

Es dürfen immer nur maximal 2 „Personen“ im Boot sitzen.

Werden Wolf & Schaf bzw. Schaf und Kohlkopf nicht beaufsichtigt, kommt es zu einem unerwünschten Fressverhalten – das Spiel ist dann verloren, weil einer der „Personen“ leider tot ist.

Demo: [https://mariusleckebusch.github.io/Aufgabe-4/main](https://mariusleckebusch.github.io/Aufgabe-4/main/)

Steuerung:
- Bauer und Schaf: LEFT
- Bauer und Wolf: RIGHT
- Bauer und Kohlkopf: DOWN
- Bauer: UP
<details>
  <summary>Lösung</summary>

- 1. Der Bauer überquert mit dem Schaf den Fluss und setzt es am anderen Ufer ab.
- 2. Der Bauer rudert anschließend allein zurück.
- 3. Der Bauer nimmt jetzt den Kohlkopf mit. Er setzt ihn am Ufer ab.
- 4. Damit das Schaf sich nicht über den Kohlkopf hermacht, nimmt er das Schaf auf seinem Rückweg wieder mit.
- 5. Der Bauer setzt jetzt das Schaf ab, nimmt den Wolf mit und lässt ihn am anderen Ufer mit dem Kohlkopf zurück.
- 6. Der Bauer rudert wieder allein zurück.
- 7. Der Bauer nimmt schließlich das Schaf mit.

<details>
  <summary>Lösung Keys</summary>
  
- 1. LEFT
- 2. UP
- 3. DOWN
- 4. LEFT
- 5. Right
- 6. UP
- 7. LEFT
</details>
</details>
