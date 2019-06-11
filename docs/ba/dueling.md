---
id: dueling
title: Duels & Team Battles
sidebar_label: Dueling
---
## Simple Player(s) Challenge:
Choose a match type (see [Arena Types](https://docs.battleplugins.org/docs/ba/arenas#arena-types)), Examples include: `skirmish`, `bg`, `arena`, etc or Custom Arenas like `spleef`, `painball`, etc.

> `/<matchtype> duel <player 1>...<player x>`

**Examples:**
-   `/arena duel clovisd` - *Challenge `clovisd` to an arena duel.*
-   `/skirmish duel cunningdevil666` - *Challenge `cunningdevil666` to an skirmish duel.*
-   `/spleef duel clovisd cunningdevil666` - *Challenge both `clovisd` and `cunningdevil666` to a spleef duel.*

## Advanced Player(s) Challenge:
You can challenge a player specify options. Currently the only options is a money challenge:

-   **`/spleef duel clovisd cunningdevil666 money 200`** : Challenge both clovisd and cunningdevil666 to a spleef duel. Each person will pay 200 at the start, winning team splits the pot.
### Challenge Options:
-   **`money <amount>`** : also works with whatever your currency is called if you have Vault
    -   **`/paintball duel clovisd money 100`**: Challenge clovisd to a duel in paintball. Each person will pay 100 at the start, winner takes all.
-   **`YourCurrencyName <amount>`**: if you have Vault
    -   **`/paintball duel clovisd platinum 100`** : Challenge clovisd to a duel in paintball. Each person will pay 100 at the start, winner takes all. (Assuming your server uses platinum as the currency)

## Duel Permissions:
Permission to start, create, and manage duels require the Arena type (see :[Arena Types](https://docs.battleplugins.org/docs/ba/arenas#arena-types)) and the following structure:
> `arena.<match type>.duel`

**Examples:**
-   Skirmish Permission: `/arena.skirmish.duel`
-   Spleef Permission: `/arena.spleef.duel`

## Accepting / Rejecting Duels:
When challenging someone to a duel, participants need to accept or deny the invites:
-   `/arena reject`: Reject / Refuse a challenge.
-   `/arena accept`: Accept the duel challenge.

## Canceling Duel Request:
-   `/arena rescind`: You can use this to cancel your challenge request.

### Fighting Team vs Team duels
Same commands, but you should create a team first
1.  Create a team  **`/team create <player 1>... <player x>`**
2.  **`/<matchtype> duel <player 1>...<player x>`**  Duel 1 or multiple people as normal
