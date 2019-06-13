---
id: event
title: Arena Event Options
sidebar_label: Event Actions
---
## Event Options

### onJoin Options
Options that are only valid inside onJoin:
* alwaysJoin : Allow players to join at any time

### onDeath or Normal Options
* randomSpawn: Spawn the player at a random spawn location. You should place this inside of onDeath or wherever you teleport a player inside. 'teleportIn'

### onDeath Options
valid options for onDeath. You can also use any of the Normal options, but the following are special to onDeath only(or just very useful).
* clearInventory : clears the item drops
* respawn: respawn the player (This options should only be used in onDeath:)
* randomRespawn: respawn the player at a random spawn location (This options should only be used in onDeath:)
* keepInventory: When players die they respawn with their same inventory (also will not drop items on death)
* noExperienceLoss: Keep Experience when you die (great for a mobarena)

### onSpawn Options
valid options for onSpawn. You can also use any of the Normal options, but the following are special to
* respawnWithClass: respawn the player with whatever class they selected before death (if any)

### Examples

### teleportTo
Say you want the winners to go to a special location, like a prize room, or maybe as a gateway to another world.
```yaml
Skirmish:
    winner:
        options: [... ]
        teleportTo: prizeworld,33,44,55
```

### doCommands
Assuming that when players enter the arena you want them to be deopped and you want them to not have fly
```yaml
Skirmish:
    onEnter:
        options: []
        doCommands:
            - console deop player # will run the command 'deop player' from the console, where player becomes the player name
            - player fly off # will run the command 'fly off' as the player
```

### onKill

```yaml
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
```

## Join Phase

### Join Phase Games
Games that have a join phase must be "opened", then "started". While "opened" players can join and leave. You must then "start" the game.
You can "open" and "start" the match by doing the command `/<event> auto`, which will open the game for 3 minutes(configurable) then start it automatically.
===Auto run===
The simplest way to make an event happen. Do it automatically, it will announce instructions every minute until it starts.
* `/<event> auto`
Example: `/ffa auto`

### Opening an event
If you want to control when it opens and starts, use the commands:
* `/<event> open`
* `/<event> start`
Example:
* `/ffa open`
* `/ffa start`

### Cancelling an event
* `/<event> cancel`

### Declaring a winner of a match
This is not a tournament option, but it's useful sometimes if something unexpected occurs `/arena winner <player name>`

### Examples

### Full commands with all options
Valid Options:
* Rated, Unrated
* teamSize=<range>: Example teamSize=1+ ( 1 or more players per team ): Example teamSize=2 (2 players per team)
* nTeams=<range>: Example nTeams=2 (2 teams competing), Example nTeams=2+ (2 or more teams, useful for tournaments)
* silent : Dont announce event messages
* time=<seconds> : Example time=60, seconds till event starts (only used for auto)
* interval=<seconds>: How often to announce this event is starting messages (only used for auto)
* arena=<arena>: Specify a specific arena to run this event in.
Example:
* `/ffa auto teamSize=1 nTeams=2+` will run a free for all
* `/ffa auto teamSize=2 nTeams=2+` will run a 2 team free for all
* `/ffa auto teamSize=1+ nTeams=2` will run a competition between 2 teams. Last team with players alive wins.

