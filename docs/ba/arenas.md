---
id: arenas
title: Everything Arenas
sidebar_label: Arenas
---
## Arena Types

BattleArena's comes with 7 different match types. You can customize any of these to make them act completely different by altering the config.yml (except for the tournament event which is slightly different).

**==Competitions with a queue==**
* Arena: You fight with what is given to you in the config. You can't bring items in or out.
* Skirmish: You bring in what you want to fight with, you take out whatever you pick up.
* Battleground: 1 minute match where the winner is the one with the highest kills after 1 minute. 4 teams of 1 player each compete.
* Colosseum: 4 teams against each other, last man standing wins.

**==Competitions with a Join Phase==**
* FFA: last player/team left standing wins
* deathmatch: 2 minute event where if you die you respawn. Highest kills wins
* tourney: Pick a match type and do a bracketed tournament of that type.

**==Other Useful Options==**
[[BattleArena/Tournaments|Tournaments]]

[[BattleArena/Scheduling Events | Scheduling Events]]

[[BattleArena/Custom Games | Custom Games]]


## Creating Arenas

These are the steps that will lead you through creating your first arena.  These steps will lead you through making one for the match type `arena`, but you can also use it to create arenas for different types, like battleground(bg).

**To create an arena you must:**
1. Choose a name for that arena. Examples below use the names `arena` and `icy`.
2. Make sure permissions are setup correctly: [[BattleArena/Permissions|Permissions]].
3. Follow the guides below to setup your at least one spawn point and create your arena:

New Users? Check the `Creating your first Arena` section.
Expanding your Server? Check the `Creating more Arenas`.

Want all the nitty gritty? Check the `Creating Arenas for Pros` section.

### Creating a Basic Arena

1. Stand at the location where you want the arena to be, first spawn location
2. `/arena create myArena` (creates the arena "myArena" and sets 1st spawn).
3. Stand at the location you want the second spawn to be
4. `/arena alter myArena 2` (creates the second spawn for "myArena")
5. Give your players the correct permission to join an arena. permission is `arena.arena.join`
6. type `arena join`
7. have some one else type `arena join`

After this you will both be entered into the arena match where the last man standing wins.

### Creating More Basic Arenas

Follow the same steps as before, but use a different arena name.  for this one lets assume its in a tundra biome and call it "icy".  
1. Stand at the location where you want "icy" to be
2. `/arena create icy` (creates the arena "icy" and sets 1st spawn).
3. Stand at the location you want the second spawn to be
4. `/arena alter icy 2` (creates the second spawn for "icy")

Once this is done, you will now have two Arenas.  One named "myArena" and one named "icy".  Players will cycle through these two arenas. You can continue adding more arenas as long as they have a different name.

### Creating Different Type Arenas

There are many different " '''types''' " by default they are the following, but by changing the config you can make any match type any other, or change them to make your own.
You can create arenas for any of the following: '''arena, skirmish, bg(battleground), col(coliseum), ffa (freeforall), dm(deathmatch)''', or any of the extension games like '''spleef, paintball, ctf, parkour'''
To view the Default Games visit the following [[BattleArena/Default Games | page]].

**Creating an Arena for a BG `BattleGrounds` Custom Arena**
1. Choose which match type you are making an arena for. You can choose arena, skirmish, bg(battleground), col(colisseum),ffa, dm In this tutorial we will use the command bg, to make a new battleground match arena. By default a battleground match has 4 people fighting it out, so we should add at least 4 spawns.
2. Stand at the location where you want the arena to be, first spawn location
3. '''/bg create myBGArena''' (creates the arena "myBGArena" for a battleground match and sets 1st spawn).
4. Stand at the location you want the second spawn to be
5. '''/bg alter myBGArena 2''' (creates the second spawn for "myBGArena")
6. `'/bg alter myBGArena 3''' (creates the third spawn for "myBGArena")
7. '''/bg alter myBGArena 4''' (creates the fourth spawn for "myBGArena")
8. Give your players the correct permission to join an arena. permission is '''arena.bg.join'''
9. Type '''/bg join'''
10. Have minimum of three other players type '''/bg join'''

After this all players will be transported in where the person with the most kills at the end of 1 minute wins.

**Creating an Arena for a FFA `Free-For-All` Custom Arena**

1. Free for all usually has many players fighting it out, so you might want to add a lot of spawn points
2. Stand at the location where you want the arena to be, first spawn location
3. '''/ffa create myFFA''' (creates the arena "myFFA" for a ffa and sets 1st spawn).
4. Stand at the location you want the second spawn to be
5. '''/ffa alter myFFA 2''' (creates the second spawn for "myFFA")
6. '''/ffa alter myFFA 3''' (creates the third spawn for "myFFA")
7. Keep creating as many spawn points as you want '''/ffa alter myFFA <number>''' (creates the number'th spawn for "myFFA")
8. Give your players the correct permission to join an arena. permission is '''arena.ffa.join'''
9. See page [[BattleArena/Default Games#Competitions with a Join Phase | games with a join phase]] for running games that have a join phase
