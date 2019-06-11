---
id: arenas
title: Creating Simple Arenas
sidebar_label: Creating (Simple)
---
## Creating Arenas:

These are the steps that will lead you through creating your first arena.  These steps will lead you through making one for the match type `arena`, but you can also use it to create arenas for different types, like battleground(bg).

**To create an arena, make sure you:**
1. Choose a name for that arena. Examples below use the names `myArena` and `icyArena` but each arena needs a good name.
2. Make sure permissions are setup correctly, see: [[BattleArena/Permissions|Permissions]].
3. Follow the guides below to setup your at least one spawn point and create your arena:

New Users? Check the `Creating your first Arena` section.
Expanding your Server? Check the `Creating more Arenas`.

Want all the nitty gritty? Check the `Creating Arenas for Pros` section.

### Creating a Basic Arena

1. Stand at the location where you want arena **first spawn location** and:
2. Type: `/arena create myArena` (creates arena called `myArena` and sets 1st spawn).
3. Stand at the location  of the **second spawn point** and:
4. Type: `/arena alter myArena 2` (creates the second spawn for arena called`myArena`).
5. Make sure players have the correct permission to join. Permission needed is: `arena.arena.join`
6. Type: `/arena join`.
7. Have someone else also type `/arena join`

After this you will both be entered into the arena match where the last man standing wins. See further down for details on waiting rooms, items, and more.

For more information about permissions, see [BA Permissions](ba/permissions.md).

### Creating More Basic Arenas

Follow the same steps as before, but use a different arena name.  For this example, let's assume we're using a Tundra Biome Arena and call it `icyArena`.  

1. Stand at the location where you want `icyArena`'s **first spawn location** to be and:
2. Type `/arena create icyArena` (creates arena called `icyArena` and sets 1st spawn).
3. Stand at the location  of the **second spawn point** and:
4. Type: `/arena alter icyArena 2` (creates the second spawn for arena called`icyArena`).
5. *Optionally you can configure join-phases, waiting rooms, equipment, rewards, and more using this page: `[settings](ba/settings.md).`*

Once this is done, you should now have two arenas if you followed the two steps above in order! One named `myArena` and one named `icyArena`.  Players will be able to cycle through these two arenas if configured; you can continue adding more arenas as long as they all have a different name.