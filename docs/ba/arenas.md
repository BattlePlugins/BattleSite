---
id: arenas
title: Creating & Deleting Arenas
sidebar_label: Managing Arenas
---
## Arena Types:

BattleArena's comes with 7 different match types. You can customize any of these to make them act completely different by altering the `config.yml` (except for the tournament event which is slightly different).

### Competitions with a Queue:
* **Arena** (`arena`): You fight with what is given to you in the config. You can't bring items in or out.
* **Skirmish** (`skirmish`): You bring in what you want to fight with, you take out whatever you pick up.
* **Battleground** (`bg`): 1 minute match where the winner is the one with the highest kills after 1 minute. 4 teams of 1 player each compete.
* **Colosseum** (`col`): 4 teams against each other, last man standing wins.

### Competitions with a Join Phase:
* **Free-for-All** (`ffa`): last player/team left standing wins.
* **Deathmatch** (`dm`): 2 minute event where if you die you respawn. Highest kills wins.
* **Tournament** (`tourney`): Pick a match type and do a bracketed tournament of that type.

## Creating Arenas:

These are the steps that will lead you through creating your first arena.  These steps will lead you through making one for the match type `arena`, but you can also use it to create arenas for different types, like battleground(bg).

**To create an arena, make sure you:**
1. Choose a name for that arena. Examples below use the names `myArena` and `icyArena` but each arena needs a good name.
2. Make sure permissions are setup correctly, see: [[BattleArena/Permissions|Permissions]].
3. Follow the guides below to setup your at least one spawn point and create your arena:

New Users? Check the `Creating your first Arena` section.
Expanding your Server? Check the `Creating more Arenas`.

Want all the nitty gritty? Check the `Creating Arenas for Pros` section.

### Creating a Basic Arena:

1. Stand at the location where you want arena **first spawn location** and:
2. Type: `/arena create myArena` (creates arena called `myArena` and sets 1st spawn).
3. Stand at the location  of the **second spawn point** and:
4. Type: `/arena alter myArena 2` (creates the second spawn for arena called`myArena`).
5. Make sure players have the correct permission to join. Permission needed is: `arena.arena.join`
6. Type: `/arena join`.
7. Have someone else also type `/arena join`

After this you will both be entered into the arena match where the last man standing wins. See further down for details on waiting rooms, items, and more.

For more information about permissions, see [BA Permissions](ba/permissions.md).

### Creating More Basic Arenas:

Follow the same steps as before, but use a different arena name.  For this example, let's assume we're using a Tundra Biome Arena and call it `icyArena`.  

1. Stand at the location where you want `icyArena`'s **first spawn location** to be and:
2. Type `/arena create icyArena` (creates arena called `icyArena` and sets 1st spawn).
3. Stand at the location  of the **second spawn point** and:
4. Type: `/arena alter icyArena 2` (creates the second spawn for arena called`icyArena`).
5. *Optionally you can configure join-phases, waiting rooms, equipment, rewards, and more using this page: `[settings](ba/settings.md).`*

Once this is done, you should now have two arenas if you followed the two steps above in order! One named `myArena` and one named `icyArena`.  Players will be able to cycle through these two arenas if configured; you can continue adding more arenas as long as they all have a different name.

### Creating Different Type Arenas:

There are many different [types](https://docs.battleplugins.org/docs/ba/arenas#arena-types) of arenas and they all behave uniquely out of the box, however they can be further edited through the config to act even more individually.

You can create any of the base BattleArena arenas like: `arena`, `skirmish`, `battleground`, `coliseum`, `freeforall`, and `deathmatch`. 

You can also install BattleArena extension plugins to add additional gamemodes and features like `spleef`, `paintball`, `capture the flag`, `parkour`, and more!

To create different types of arena's, refer to above guide on **Creating a Basic Arena** and check the below examples:

#### Creating an Arena for a BG `battleground` Custom Arena:
1. In this tutorial we are creating a BattleGround arena, this means we'll use the `/bg` command alias to create the arena. By default a battleground match has 4 people fighting it out, so we should add at least 4 spawns.
2. Stand at the location where you want the `myBGArena` **first spawn location** to be and:
3. Type: `/arena create myBGArena` (creates arena called `myBGArena` and sets 1st spawn).

> I. Stand at the location where you want the `myBGArena` **next spawn location** to be and:

> II. Type: `/arena alter myBGArena 2`  (creates the `2` spawn for arena `myBGArena`).

4. Repeat `I` & `II` replacing #`2` until you've set all `4` needed spawn points.
5. Make sure players have the correct permission to join. Permission needed is: `arena.bg.join`
6. Type: `/bg join`.
7. Have 3 other players also type `/bg join`.
8. *Optionally you can configure join-phases, waiting rooms, equipment, rewards, and more using this page: `[settings](ba/settings.md).`*

After this all players will be transported in where the person with the most kills at the end of 1 minute wins. 

#### Creating an Arena for a FFA `free-for-all` Custom Arena:
1. In this tutorial we are creating a Free-For-All Arena, this means we'll use the `/ffa` command alias to create the arena. By default a Free-For-All usually has many players fighting, so we're going to add a bunch of spawn points.
2. Stand at the location where you want the `myFFA` **first spawn location** to be and:
3. Type: `/ffa create myFFA` (creates arena called `myFFA` and sets 1st spawn).

> I. Stand at the location where you want the `myFFA` **next spawn location** to be and:

>  II. Type: `/ffa alter myFFA 2`  (creates the `2` spawn for arena `myFFA`).

4. Repeat `I` & `II` replacing #`2` until you've set all `4` needed spawn points.
5. Make sure players have the correct permission to join. Permission needed is: `arena.ffa.join`
6. Type: `/ffa join`.
7. Have a bunch other players also type `/faa join`.
8.  *Optionally you can configure join-phases, waiting rooms, equipment, rewards, and more using this page: `[settings](ba/settings.md).`*

## Deleting Arenas:
>> NEED TO DO - REMIND STAFF