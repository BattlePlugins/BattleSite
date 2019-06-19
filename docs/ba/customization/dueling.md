---
id: dueling
title: Duels & Team Battles
sidebar_label: Dueling
---

# Simple Player(s) Challenge

Choose a match type (see: [Arena Types](ba/arenas/types.md)): Examples include built-in Types like: `skirmish`, `bg`, `arena`, etc Can also work with Custom Arenas like `spleef`, `painball`, etc.

> /`<matchtype>` duel `<player 1>...<player x>`

**Examples:**

- `/arena duel clovisd` - _Challenge user `clovisd` to an arena duel._
- `/skirmish duel cunningdevil666` - _Challenge user `cunningdevil666` to an skirmish duel._
- `/spleef duel clovisd cunningdevil666` - _Challenge users `clovisd` and `cunningdevil666` (both) to a spleef duel._
- `/col duel TeamAlpha` - _Challenge team `TeamAlpha` to a Colosseum duel._

# Accepting / Rejecting / Cancelling Duels

When challenging someone to a duel, participants need to accept or deny the invite. You can also choose to cancel pending Duel challenges.

## Accepting a Challenge

- `/arena accept`: Accept the Duel challenge.

Accepting a challenge with a money charge / fee will result in the money being charged on accept.

## Rejecting a Challenge

- `/arena reject`: Reject / Refuse a challenge.

## Canceling a Challenge Request

- `/arena rescind`: You can use this to cancel your challenge request.

# Advanced Player(s) Challenge

You can challenge other player with special victory critieria by specifying options. Currently the only available options relate to currency:

> /`<matchtype>` duel `<player 1>...<player x>` `<challenge options>`

**Examples:**

- `/spleef duel clovisd cunningdevil666 money 200` - _Challenge users `clovisd` and `cunningdevil666` (both) to a spleef duel. Each person will pay 200, Winning team splits total._
- `/arena duel clovisd money 80` - _Challenge user `clovisd` to a spleef duel. Each person will pay 80, Winner gets total (160)._
- `/bg duel clovisd cunningdevil666 zach445 gold 50` - _Challenge users `clovisd`, `zach443` and `cunningdevil666` (all 3) to a Battleground duel. Each person will pay 50 gold, winning team splits total._

## Challenge Options

- `money <amount>`: Also works with whatever your currency is called if you have Vault.

  - `/paintball duel clovisd money 100` - _Challenge `clovisd` to a duel in `paintball`. Each person will pay 100 at the start, winner takes all._

- `YourCurrencyName <amount>` If you have Vault, specify the currency type to pick non-default.

  - `/paintball duel clovisd platinum 100` - _Challenge `clovisd` to a duel in `paintball`. Each person will pay 100 at the start, winner takes all. (Assuming your server uses platinum as the currency)_

# Duel Permissions

Permission to start, create, and manage duels require the Arena type (see: [Arena Types](ba/arenas/types.md)) and the following structure:

> `arena.<match type>.duel`

**Examples:**

- Skirmish Permission: `arena.skirmish.duel`
- Spleef Permission: `arena.spleef.duel`

For more information about permissions, see [Permissions](ba/config/permissions.md).

# Team Duels

You can create teams to take into duels as well. First make sure to create a team using the Team command (see [Teams](ba/customization/teams.md)). Then use the above duel commands to challenge a Team of players instead of Players.

Create a team:

> /team create `<player 1>... <player x>`

Then: `/<matchtype> duel <player 1>...<player x>`

> > This section need to be expanded.
