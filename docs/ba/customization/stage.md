---
id: stage
title: Stage Settings & Options
sidebar_label: Stage
---
## Stage Options

[[File:AdvancedBA.png|center|link=http://wiki.battleplugins.org/Category:BattleArena:Advanced]]
[[Category: BattleArena:Advanced]]
[[Category: BattleArena]]
==Valid Options==
===Normal Options===
Valid options for all stages (excluding preReqs):
* clearInventory : clears the inventory of the player
* giveItems: give the player the specified items. needs a list under items: [[Enchantments | Valid Item Enchants]]
* teleportWaitroom : teleports a player into a waitroom
* teleportIn : teleports a player into the arena
* teleportOut : Teleport a player out of the arena
* teleportTo: <world,x,y,z> : teleport players to the given location (This is placed underneath options)
* noTeleport : Prevent users from teleporting
* noWorldChange : Prevent users from teleporting across worlds
* health=<health amount> : set the health of the player (20 is max)
* healthp=<health percentage> : set the percentage health of a player (100 is max)
* hunger=<hunger amount> : set the hunger of the player (20 is max)
* money=<money to give> : give the player money
* experience=<exp to give> : give the player experience
* pvpOn : set PvP damage to be on (overrides most other plugins). Friendly fire is off
* pvpOff : set PvP damage to be off (overrides most other plugins). No damage between players permitted
* invincible : make players invincible
* invulnerable=<time in seconds> : make player invulnerable for the given seconds
* blockBreakOff : Turn off block breaking
* blockBreakOn : turn on block breaking (overrides most other plugins)
* blockPlaceOff : Turn off placing blocks
* blockPlaceOn : Turn on placing blocks (overrides most other plugins)
* dropItemOff : Disallow player to drop items
* disguiseAll=<name>: disguise all players with the given value
* undisguise: undisguise players
* enchants: needs a list of potion effects under enchants. [[Potions | Potion Effect List]]
* deEnchant: get rid of all potion effects on player. If you have Heroes it will also remove heroes effects.
* gameMode=<GameMode> : Set the gamemode of the player, [adventure, creative, normal]
* doCommands : do the specified commands as the console or player. Needs a list underneath called commands:
* storeExperience/restoreExperience: store/restore Experience
* storeItems/restoreItems : store/restore
* storeAll/restoreAll : store/restore experience, items, health, hunger, magic, gamemode
* flightOff : set the players flight off
* flightOn : set the players flight on
* flightSpeed=<float> : set the players flight speed

===Defaults Options===
Options that are only valid inside defaults:
* alwaysOpen: This game once started never ends (automatically sets alwaysJoin as well)
* individualWins: A player can win or lose separately and not end the game
* armorTeams : Use colored armor for teams
* woolTeams: if there is more than 1 player on a team, give them wool heads
* alwaysWoolTeams: always give the players wool heads
* alwaysTeamNames: always use the team names (like red/blue) as opposed to the player names

===Prerequisite Options===
Options that are valid preReqs:
* noInventory : Players can not join or be teleported into the arena if they have items.
* needArmor : Players need to have armor to join or be teleported in
* needItems : Players will need items to join, needs a list under items:
* money=<money> : Charge money for players to join this type of match/event.
* sameWorld : Players will need to be in the same world as the arena to join
* withinDistance=<x> : make players be within x blocks of the arena in order to join (based off of the arena spawnpoints)
* levelRange=<range> : Only allow players that have the specified levels to join.
** Examples. levelRange:10+ , only allow players that have 10 or more levels to join (Works with Heroes classes). levelRange: 2-5 , only allow players from levels 2 through 5 to join

====Example====
An example that will save/restore a players inventory, charge them 10 money, and only allows players to join between levels 2 and 10.
<source lang="csharp">
skirmish:
    preReqs:
        options: [money=10, levelRange=2-10]
    onEnter:
        options: [storeAll]
    onLeave:
        options: [restoreAll]
</source>
An example that will require players to bring in their own equipment that will charge them 10 money. They will also have to have at least a diamond sword and a bow with 16 arrows. They will take whatever they get from the loser.
<source lang="csharp">
skirmish:
    preReqs:
        options: [money=10, levelRange=2-10, needItems]
        items:
            - diamond_sword: 1
            - bow: 1
            - arrow: 1
    onEnter:
        options: []
    onLeave:
        options: []
</source>

