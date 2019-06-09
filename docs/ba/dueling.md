---
id: dueling
title: Duels and Battles
sidebar_label: Dueling
---
## Challenging a player or players
Choose a match type, like **skirmish,arena,bg,spleef**
-   **`/<matchtype> duel <player 1>...<player x>`**
Examples:
-   **`/arena duel clovisd`** : Challenge clovisd to an arena duel
-   **`/spleef duel clovisd cunningdevil666`** : Challenge both clovisd and cunningdevil666 to a spleef duel.

### **Permissions**
- **`arena.\<match type>.duel`**

Examples:
-   **`/arena.skirmish.duel`**
-   **`/arena.spleef.duel`**

### **Challenging with options**
You can challenge a player specify options. Currently there is only options of money:
-   **`/spleef duel clovisd cunningdevil666 money 200`** : Challenge both clovisd and cunningdevil666 to a spleef duel. Each person will pay 200 at the start, winning team splits the pot.
#### Current Options
-   **`money <amount>`** : also works with whatever your currency is called if you have Vault
    -   **`/paintball duel clovisd money 100`**: Challenge clovisd to a duel in paintball. Each person will pay 100 at the start, winner takes all.
-   **`YourCurrencyName <amount>`**: if you have Vault
    -   **`/paintball duel clovisd platinum 100`** : Challenge clovisd to a duel in paintball. Each person will pay 100 at the start, winner takes all. (Assuming your server uses platinum as the currency)
### Accepting/ Rejecting Duels
-   **`/arena reject`**: You are rejecting the duel challenge
-   **`/arena accept`**: Accept the duel challenge

### Oops I don't want to duel
-   **`/arena rescind`**: take back the duel challenge

### Fighting Team vs Team duels
Same commands, but you should create a team first
1.  Create a team  **`/team create <player 1>... <player x>`**
2.  **`/<matchtype> duel <player 1>...<player x>`**  Duel 1 or multiple people as normal
