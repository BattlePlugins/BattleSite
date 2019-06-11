---
id: event
title: Arena Event Options
sidebar_label: Event Actions
---
## Event Options

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

