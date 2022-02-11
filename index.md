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
  
# Lösung
- Der Bauer überquert mit dem Schaf den Fluss und setzt es am anderen Ufer ab.
- Der Bauer rudert anschließend allein zurück.
- Der Bauer nimmt jetzt den Kohlkopf mit. Er setzt ihn am Ufer ab.
- Damit das Schaf sich nicht über den Kohlkopf hermacht, nimmt er das Schaf auf seinem Rückweg wieder mit.
- Der Bauer setzt jetzt das Schaf ab, nimmt den Wolf mit und lässt ihn am anderen Ufer mit dem Kohlkopf zurück.
- Der Bauer rudert wieder allein zurück.
- Der Bauer nimmt schließlich das Schaf mit.
# Lösung Keys
- LEFT
- UP
- DOWN
- LEFT
- Right
- UP
- LEFT
</details>
