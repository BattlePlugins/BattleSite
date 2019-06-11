---
id: settings
title: Customizing Arena & Game Settings
sidebar_label: Customizing Arenas
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

===onJoin Options===
Options that are only valid inside onJoin:
* alwaysJoin : Allow players to join at any time

===onDeath or Normal Options===
* randomSpawn: Spawn the player at a random spawn location. You should place this inside of onDeath or wherever you teleport a player inside. 'teleportIn'

===onDeath Options===
valid options for onDeath. You can also use any of the Normal options, but the following are special to onDeath only(or just very useful).
* clearInventory : clears the item drops
* respawn: respawn the player (This options should only be used in onDeath:)
* randomRespawn: respawn the player at a random spawn location (This options should only be used in onDeath:)
* keepInventory: When players die they respawn with their same inventory (also will not drop items on death)
* noExperienceLoss: Keep Experience when you die (great for a mobarena)

===onSpawn Options===
valid options for onSpawn. You can also use any of the Normal options, but the following are special to
* respawnWithClass: respawn the player with whatever class they selected before death (if any)

==Examples==
===teleportTo===
Say you want the winners to go to a special location, like a prize room, or maybe as a gateway to another world.
<source lang="csharp">
Skirmish:
    winner:
        options: [... ]
        teleportTo: prizeworld,33,44,55
</source>

===doCommands===
Assuming that when players enter the arena you want them to be deopped and you want them to not have fly
<source lang="csharp">
Skirmish:
    onEnter:
        options: []
        doCommands:
            - console deop player # will run the command 'deop player' from the console, where player becomes the player name
            - player fly off # will run the command 'fly off' as the player
</source>

===onKill===

<pre>
Arena:
  onKill:
    doCommands:
    - console tell player Kill recorded !!!
    options:
    - health=20.0
    - money=1.0
    - experience=1000
    - giveItems
    giveItems:
    - arrow: 10
    - diamond: 1
</pre>

==Return to Index==
[[BattleArena]]

[[Main Page]]

## Classes

[[File:PowerBA.png|center|link=http://wiki.battleplugins.org/Category:BattleArena:Power]]
[[Category: BattleArena:Power]]
[[Category: BattleArena]]
== Creating new classes ==
Just add another class underneath '''classes:''' inside of the '''classes.yml''' in the BattleArena folder.

items and enchant sections are both optional. 

Players will still need permissions to use see [[BattleArena/Permissions#Class_Signs|Class Perms]]

=== Example ===
<pre>
classes:
    myNewClassName:
        items:
            - diamond_chest: 1
            - diamond_sword: sharp:2 knockback:1 1
            - bread: 3
        enchants:
            - speed:2
</pre>

=== Charging money for classes ===

This feature will have to be added: As a temporary solution, use the doCommands section.

<pre>
classes:
    myNewClassName:
        items:
            - diamond_chest: 1
            - diamond_sword: sharp:2 knockback:1 1
            - bread: 3
        enchants:
            - speed:2
        doCommands:
            - console money take player 100
</pre>

Just substitute '''money take''' with the equivalent command of your economy plugin.

== Default Classes ==
* Gladiator
* Archer
* Monk

== Adding a Class Sign ==
This allows players to click on a sign and receive a class. This only works for players inside an arena so there is no fear of players getting classes in the world.

To create a class sign simply add a sign with the first line as the name of the class.

=== Example ===
# line1: '''Gladiator'''

This should create a sign with
# '''* Gladiator'''

Only players inside a match will be able to use this sign.

== Giving people default classes inside of a match/event ==
Chooses which stage/transition they should get the class in, onSpawn is usually a good place.  Then put in the field '''giveClass''' underneath '''options:''' inside of the '''config.yml''' in the BattleArena folder.
=== Example ===
<pre>
    onSpawn:
        options: []
        giveClass:
            default: gladiator
</pre>
== Giving different teams different classes ==
Say you wanted team1 to be all gladiators, team2 to be all archers, and any other team to be monks.
under '''giveClass'''. put '''team1: gladiator''', '''team2: archer''', and '''default: monk'''
=== Example ===
<pre>
    onSpawn:
        options: []
        giveClass:
            team1: gladiator
            team2: archer
            default: monk
</pre>

== Using Heroes classes ==
To use heroes as classes you will first need to add the items and enchants you want to give for each Heroes class into the BattleArena/classes.yml(see this for more info [[https://github.com/alkarinv/BattleArena/wiki/Classsetup#wiki-Creating_new_classes]]).

Once you have created your classes you can specify them like normal through the giveClass.

=== Example ===
<pre>
    onSpawn:
        options: []
        giveClass:
            default: Warrior
</pre>

There is also a new class used only used for Heroes '''chosenClass''' which will allow players to receive the items configured in the BattleArena/classes.yml for their already chosen class.
=== Example ===
<pre>
    onSpawn:
        options: []
        giveClass:
            default: chosenClass
</pre>

== Return to Index ==
[[BattleArena]]

[[Main Page]]

## Spawns

==Chest/Block spawns==
These commands will allow you to respawn chests and blocks. '''Note!''' This is not for entire arena regeneration, for that please use the worldguard regions ([[BattleArena/Regions Manual | Adding WorldGuard Regions]]). To add a spawn for an chest or block do the following. use the command ArenaAlter (aa).
# '''/aa select <arena>''' : select the arena you want to alter
# '''/aa addBlock''' : Will ask you then to click a block that you want saved

===Chest Example===
Let's say you have the arena BlitzArena and you want to have it respawn with weapons and armor.
# You need to put all the items you want to be respawned inside the chest. Once that is done then...
# '''/aa select BlitzArena''' : select the BlitzArena
# '''/aa addBlock''' : This should ask you to select the block
# Click the chest block, this should give you a message confirming the click
Once this is done you can see what will be respawned using
* '''/aa showSpawns''' : show the current spawns for this arena
And to hide the spawns
* '''/aa hideSpawns''' : hide the spawns for this arena

==Item/Mob spawns==
===Basic Commands===
To add a spawn for an item or mob do the following. use the command ArenaAlter (aa).
# '''/aa select <arena>''' : select the arena you want to alter
# '''/aa addSpawn <mob> <amount>''' : add a mob spawn to your location.
# '''/aa addSpawn <item> <amount>''' : add the amount of items to your location
====Examples====
# '''/aa addSpawn wolf 1''' : add a wolf to your location. Index # 1
# '''/aa addSpawn wolf 1''' : add 2nd wolf to your location. Index # 2
# '''/aa addSpawn diamond_sword 1''' : add a diamond sword to your location. Index # 3
# '''/aa addSpawn arrow 32''' : add 32 arrows to your location. Index # 4

===All Options===
There are several options you can use for spawning
* '''fs=<seconds>''' : First spawn time (counted from when the match starts)
* '''rs=<seconds>''' : Respawn time, how often will the item respawn (counted from the first spawn)
* '''i=<index>''' : Index, allows you to change a previous spawn (put at the end of the command)
====Example====
Lets say you messed up and you didn't want the diamond_sword from the Basic Commands example. That item was placed at Index 3 (it will tell you in game when you create the spawns or you can use /aa listSpawns.
# '''/aa addSpawn log 1 i=3''' : replaces whatever is at Index#3 ( diamond sword from the example)
Now lets say you really want that log to be wool that respawns every 15 seconds
# '''/aa addSpawn wool 1 rs=15 i=3''' : replaces whatever is at Index#3 ( now a log)
====More Examples====
# '''/aa addSpawn bow fs=30 rs=50 1''': Spawns one bow 30 seconds into the game, and respawns it every 50 seconds after that.
# '''/aa addSpawn diamond rs=50 fs=30 1''' if you wanted.
# '''/aa addSpawn diamond_sword sharp:1 1''' also works to add enchants.

==Deleting Spawn==
# '''/aa deleteSpawn <index>''' : Delete the spawn at the specified index

==List Spawns==
# '''/aa listSpawns''' : List the spawns for this arena

== Return to Index ==
[[BattleArena]]

[[Main Page]]

## Waitrooms

[[File:BeginnerBA.png|center|link=http://wiki.battleplugins.org/Category:BattleArena:Easy]]
[[Category: BattleArena:Easy]]
[[Category: BattleArena]]
==Adding Waitrooms==
Many people like to have waitrooms for their games. To add a waitroom to the game you need to do the following.
* '''<game> setOption onJoin teleportWaitRoom'''
Once this is done, you need to add at least one waitroom to each of your arenas.
* To add a waitroom to your arena, stand in the place you want it to be and type '''/<game> alter <arena name> waitroom 1'''
You can choose to teleport the players in '''onJoin''' which will happen when they join the game, or '''onPrestart''' which will teleport them to the waitroom some seconds before the game starts. If you want to allow people to join through signs see [[BattleArena/Signs |Signs for joining]]

===Example===
Say you want to add a waitroom for the skirmish game, and you have a skirmish arena called SkArena
* '''/skirmish setOption onJoin teleportWaitRoom'''
* '''/skirmish alter SkArena waitroom 1''' : make sure you are standing where you want it to be

== Return to Index ==
[[BattleArena]]

[[Main Page]]

