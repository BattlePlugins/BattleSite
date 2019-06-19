---
id: options
title: Options
sidebar_label: Options
---

= Options = BattleArena gives you many options for things like adding colored armor for teams, clearing inventory on match start, setting requirements to join a game, and many more.

== Place anywhere Options == Options that you can place in any stage and that will last the entire match

- armorTeams : Use colored armor for teams
- woolTeams: if there is more than 1 player on a team, give them wool heads
- alwaysWoolTeams: always give the players wool heads
- alwaysTeamNames: always use the team names (like red/blue) as opposed to the player names

== Prerequisite Options == Options that are valid preReqs:

- noInventory : Players can not join or be teleported into the arena if they have items.
- needArmor : Players need to have armor to join or be teleported in
- needItems : A list of items that players need in order to join.
- takeItems : A list of items to be taken from the players.
- money=<money> : Charge money for players to join this type of match/event.
- sameWorld : Players will need to be in the same world as the arena to join
- withinDistance=<x> : make players be within x blocks of the arena in order to join (based off of the arena spawnpoints)
- levelRange=<range> : Only allow players that have the specified levels to join.<br>
  ** Examples. levelRange:10+ , only allow players that have 10 or more levels to join (Works with Heroes classes). levelRange: 2-5 , only allow players from levels 2 through 5 to join

=== Example === An example that will save/restore a players inventory, charge them 10 money, and only allows players to join between levels 2 and 10.

```
skirmish:
    preReqs:
        options: [money=10, levelRange=2-10]
    onEnter:
        options: [storeAll]
    onLeave:
        options: [restoreAll]
```

An example that will require players to bring in their own equipment that will charge them 10 money. They will also have to have at least a diamond sword and a bow with 16 arrows. They will take whatever they get from the loser. Notice that 'needItems' and 'takeItems' are simultaneously 'options:' that can be activated, but also require a separate list of values too.

```
skirmish:
    preReqs:
        options: [money=10, levelRange=2-10, needItems, takeItems]
        needItems:
            - diamond_sword: 1
            - bow: 1
            - arrow: 1
        takeItems:
            - gold_ingot: 1
    onEnter:
        options: []
    onLeave:
        options: []
```

== Normal Options == valid options for all stages (excluding preReqs)

- clearInventory : clears the inventory of the player
- giveItems: give the player the specified items. needs a list under items: [[Enchantments| Enchantments Effect List]]
- teleportWaitroom : teleports a player into a waitroom
- teleportIn : teleports a player into the arena
- teleportOut : Teleport a player out of the arena
- teleportTo=<world,x,y,z> : teleport players to the given location (This is placed underneath options)
- noTeleport : Prevent users from teleporting
- noWorldChange : Prevent users from teleporting across worlds
- health=<health amount> : set the health of the player (20 is max)
- healthp=<health percentage> : set the percentage health of a player (100 is max)
- hunger=<hunger amount> : set the hunger of the player (20 is max)
- money=<money to give> : give the player money
- experience=<exp to give> : give the player experience
- pvpOn : set PvP damage to be on (overrides most other plugins). Friendly fire is off
- pvpOff : set PvP damage to be off (overrides most other plugins). No damage between players permitted
- invincible : make players invincible
- invulnerable=<time in seconds> : make player invulnerable for the given seconds
- blockBreakOff : Turn off block breaking
- blockBreakOn : turn on block breaking (overrides most other plugins)
- blockPlaceOff : Turn off placing blocks
- blockPlaceOn : Turn on placing blocks (overrides most other plugins)
- dropItemOff : Disallow player to drop items
- disguiseAll=<name>: disguise all players with the given value
- undisguise: undisguise players
- enchants: needs a list of potion effects under enchants. [[Potions|Potion Effect List]]
- deEnchant: get rid of all potion effects on player. If you have Heroes it will also remove heroes effects.
- gameMode=<GameMode> : Set the gamemode of the player, [adventure, creative, normal]
- doCommands : do the specified commands as the console or player. Needs a list underneath called commands:
- storeExperience/restoreExperience: store/restore Experience
- storeItems/restoreItems : store/restore
- storeAll/restoreAll : store/restore experience, items, health, hunger, magic, gamemode
- flightOff : set the players flight off
- flightOn : set the players flight on
- flightSpeed=<float> : set the players flight speed

=== Examples ===

```
Skirmish:
    onEnter:
        options: [health=3]
    doCommands:
        - console deop player # will run the command 'deop player' from the console, where player becomes the player name
        - player fly off # will run the command 'fly off' as the player
```

== onDeath or Normal Options ==

- randomSpawn: Spawn the player at a random spawn location. You should place this inside of onDeath or wherever you teleport a player inside. 'teleportIn'

== onDeath Options == valid options for onDeath. You can also use any of the Normal options, but the following are special to onDeath only(or just very useful).

- clearInventory : clears the item drops
- respawn: respawn the player (This options should only be used in onDeath:)
- randomRespawn: respawn the player at a random spawn location (This options should only be used in onDeath:)
- keepInventory: When players die they respawn with their same inventory (also will not drop items on death)

== onSpawn Options == valid options for onSpawn. You can also use any of the Normal options, but the following are special to

- respawnWithClass: respawn the player with whatever class they selected before death (if any)
