---
id: dueling
title: Duels & Team Battles
sidebar_label: Dueling
---
## Simple Player(s) Challenge:
Choose a match type (see [Arena Types](https://docs.battleplugins.org/docs/ba/arenas#arena-types)):
Examples include built-in Types like: `skirmish`, `bg`, `arena`, etc
Can also work with Custom Arenas like `spleef`, `painball`, etc.

> /`<matchtype>` duel `<player 1>...<player x>`

**Examples:**
-   `/arena duel clovisd` - *Challenge user `clovisd` to an arena duel.*
-   `/skirmish duel cunningdevil666` - *Challenge user `cunningdevil666` to an skirmish duel.*
-   `/spleef duel clovisd cunningdevil666` - *Challenge users `clovisd` and `cunningdevil666` (both) to a spleef duel.*

## Advanced Player(s) Challenge:
You can challenge other player with special victory critieria by specifying options. Currently the only available options relate to currency:

> /`<matchtype>` duel `<player 1>...<player x>` `<challenge options>`

**Examples:**
-   `/spleef duel clovisd cunningdevil666 money 200` - *Challenge users `clovisd` and `cunningdevil666` (both) to a spleef duel. Each person will pay 200, Winning team splits total.*
-   `/arena duel clovisd money 80` - *Challenge user `clovisd` to a spleef duel. Each person will pay 80, Winner gets total (160).*
-   `/bg duel clovisd cunningdevil666 zach445 gold 50` - *Challenge users `clovisd`, `zach443` and `cunningdevil666` (all 3) to a Battleground duel. Each person will pay 50 gold, winning team splits total.*

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
