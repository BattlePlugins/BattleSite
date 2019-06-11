---
id: config-simple
title: Edting the `config.yaml` File
sidebar_label: Config (Simple)
---

[[File:PowerBA.png|center|link=http://wiki.battleplugins.org/Category:BattleArena:Power]]
[[Category: BattleArena:Power]]
[[Category: BattleArena]]
= config.yml =
The current default [[BattleArena/config.yml|Default Config]]

== Reloading the config ==
Once you change a config option you will need to reload the config.  
* '''/arena reload'''

Or if you are changing the config of one of the plugins that uses BattleArena(like CTF, Spleef, or Paintball), reload the appropriate Config.
Spleef Example:
* '''/spleef reload'''

== Victory Conditions ==
Victory Conditions are the conditions under which a match will end. Currently these are the valid victory conditions
* LastManStanding: Match will end when there is only one team left (or player if teamSize: 1)
* nLives: Every player has a set number of lives. Match ends when only one team is left (or player if teamSize: 1)
** nLives needs a line below it with the line '    nLives: &lt;number or lives>', '    nlives: 3' as an example
* InfiniteLives: teams have infinite lives
* TimeLimit: Only use a time limit, or when not enough teams remain
* HighestKills: Players have infinite lives and the team with the highest kills wins

== Scheduled Event Options ==
=== Running events after a restart ===
There is a config option called '''onServerStart: []'''.  If you want to start running scheduled events continuously add the option '''startContinuous''', if you just want to start the next event, put '''startNext'''.
Example:
<pre>
defaultOptions:
    onServerStart: [startContinuous]
</pre>


== Message Options ==

=== Changing who gets match announcements ===
If you want to change the announcement settings for '''all''' matches/events then change the options found inside of '''defaultOptions:'''
Example:
<pre>
defaultOptions:
    announcements:
        onPreStart: [ dontannounce ]  
        onStart: [ dontannounce ]  
        onVictory:  [ dontannounce ] 
</pre>

If you just want to change the announcement settings for one particular match type. then add the lines to the match type you want.
Example using skirmish
<pre>
skirmish:
    announcements:
        onPreStart: [ dontannounce ]  
        onStart: [ dontannounce ]  
        onVictory:  [ dontannounce ] 
</pre>

=== Changing who gets event announcements ===
By default most event messages get announced to the server. If you want it to only be to people inside the event then change "announce" to "dontannounce".  If you have herochat or another vault based chat plugin you can change the channel of the messages by putting in "channel=&lt;channel>"
<pre>
    eventAnnouncements:
        onCountDownToEvent: [ announce, server ]  ## event is now open
        onOpen: [ announce, server ]  ## event is now open
        onStart: [ announce, server ]  ## event is starting
        onVictory:  [ announce, server ] ## event has been won
        onCancel:  [ announce, server ] ## event has been cancelled
</pre>


== Team Options ==
=== Giving Teams Wool Heads ===
* add the option '''woolTeams''' in the option area where you want players to start having wool heads (usually when they first get teleported into the arena, the option '''teleportIn''')
Example:
<pre>
### Skirmish 
skirmish:
    enabled: true
    onStart:
        options: [teleportIn, pvpOn, blockBreakOff, woolTeams]
</pre>

* Additionally, using '''alwaysWoolTeams''' will force everyone to receive a wool head even if teams are 1v1.
=== Changing the number of teams ===
* add the option '''nTeams:''' with the amount of teams to the base match/event type config
==== Example 1 ====
only 2 teams will play
<pre>
skirmish:
    nTeams: 2
</pre>

==== Example 2 ====
Allow 3 teams or up to 5 teams play
<pre>
skirmish:
    nTeams: 3-5
</pre>

==== Example 3 ====
allow 2 or more teams to play
<pre>
skirmish:
    nTeams: 2+
</pre>

=== Changing the number of players on each team ===
* add the option '''teamSize:''' with the team size to the base match/event type config
==== Example 1 ====
Example to set 4 players per team:
<pre>
skirmish:
    teamSize: 4
</pre>

==== Example 2 ====
Example to set 2 through 5 players per team:
<pre>
skirmish:
    teamSize: 2-5
</pre>

==== Example 3 ====
Allow any number of players to join a team
<pre>
skirmish:
    teamSize: 1+
</pre>

== Match & Event Options ==
=== Changing the length of a match ===
* add the option '''matchTime: &lt;x>''' to specify how long you want the match to last ( add this option if it doesn't exist).  set to -1 if you want it to run forever until someone wins
==== Example ====
<pre>
skirmish:
  times:
    matchTime: 240 ## <- match will now last 240 seconds
</pre>

==== Infinite Time Example ====
<pre>
skirmish:
  times:
    matchTime: -1 ## <- match will now last until someone wins
</pre>

=== Giving money for winning/losing ===

Option 1:
* add the option '''money=&lt;amount>''' into the '''winner:''' config section.  Create the section '''winner:''' if it doesn't exist.
* To give money to the losers, do the same but in the section '''losers:'''
Example:
<pre>
    winner:
        options: [money=100]
    losers:
        options: [money=5]
</pre>

Option 2:
* add Poolmoney=<percentage in decimal form> into '''winner:''' config section.  Create the section '''winner:''' if it doesn't exist.
* Valid percentages (decimal form): 0.0 (0%) - 1.0 (100%). (Basically take the percentage you want and move the decimal 2 places to the left. ex. .5 (50%), .25 (25%) .15 (15%) and so on.)
* Poolmoney allows you to pay the winner a percentage of the pot.
* For team based arenas this provides a way to dynamically adjust the winners pay out depending on how many entrants their are. More entrants. Bigger Payout. Fewer Entrants. Smaller Payout.
Example:
<pre>
    winner:
        options: [poolmoney=1.0]
</pre>

=== Giving items for winning/losing ===
* Create the section '''winner:''' if it doesn't exist.
* add an '''options:''' node. The value is a yaml list, so [] is an empty list.
* add the option: '''giveItems'''. This merely turns this option on.
* add a node '''items:''' or '''giveItems:''' with a list of items to give.

Example:
<pre>
    winner:
        options: [giveItems]
        giveItems:
          - diamond: 1
          - gold_ingot: 1
    losers:
        options: [giveItems]
        items:
          - fish: 1
</pre>

=== Giving money for getting first place/participating in a tournament ===
* add the option '''money=&lt;amount>''' into the '''winner:''' config section.  Create the section '''firstPlace:''' if it doesn't exist.
* To give money to the losers, do the same but in the section '''losers:'''
Example:
<pre>
    firstPlace:
        options: [money=100]
    participants:
        options: [money=5]
</pre>

=== Giving items for getting first place/ participating in a tournament ===
* add the option '''giveItems''' into the '''firstPlace:''' config section.  Create the section '''firstPlace:''' if it doesn't exist.  After that you will need to list out your items: in a list below the options (see below example) 
* To give items to the losers, do the same but in the section '''participants:'''
Example:
<pre>
    firstPlace:
        options: [giveItems]
        items:
          - diamond: 1
          - gold_ingot: 1
    participants:
        options: [giveItems]
        items:
          - fish: 1
</pre>

=== Clearing Inventory on Death ===
* add the option '''clearInventory''' into the '''onDeath:''' config section.  Create the section '''onDeath:''' if it doesn't exist.
Example:
<pre>
    onDeath:
        options: [clearInventory]
</pre>

=== Respawning on Death ===
* add the option '''respawn''' or '''randomRespawn''' into the '''onDeath:''' config section.  Create the section '''onDeath:''' if it doesn't exist.
Example:
<pre>
    onDeath:
        options: [randomRespawn]
</pre>
* You will also need to add/change the '''victoryCondition''' to '''HighestKills''' (otherwise it defaults to the last person alive wins).
Example:
<pre>
battleground:
    victoryCondition: highestKills
</pre>


=== Running commands ===
Add in a section called "doCommands" inside of the stage you want (probably onEnter).
The format is
* &lt;player or console> &lt;commands that you want to run>
The first player or console makes you run as the command as the operating console or as the player.

If in the commands the word "player" appears it will then be substituted with the player name.

For example.  Lets say alkarin_v is entering the arena, and the command is "- player fly stop player".  This will run the command "fly stop alkarin_v" as the player "alkarin_v"

<pre>
    onStart:
        doCommands:
            - player fly stop
            - console deop player
</pre>


=== Changing how a match is won (victoryCondition) ===
Add a configuration section '''victoryCondition''' to the match/event. 

Current Valid victoryConditions
* lastManStanding
* highestKills
* nDeaths (To be changed to nLives)
* timeLimit (Nobody will ever win)
* noTeamsLeft (All teams are dead)

Example:
<pre>
battleground:
    victoryCondition: highestKills
</pre>

== Joining Options ==
=== Limit arena joining to same world ===
Add the config option '''sameWorld''' to the preReqs: section (add it if it doesn't exit)

Example:
<pre>
battleground:
    preReqs:
        options: [sameWorld]
</pre>

=== Limit arena joining to within a certain distance of an arena ===
Add the config option '''withinDistance=&lt;distance>''' to the preReqs: section (add it if it doesn't exit). Distance is based off of distance to spawn points.

Example:
<pre>
battleground:
    preReqs:
        options: [withinDistance=30] # limit joining to players within 30 blocks of the arena 
</pre>

=== Allow Players to join at any time ===
Add the config option '''alwaysJoin''' to the onJoin: section.

Example:
<pre>
battleground:
    onJoin:
        options: [alwaysJoin]
</pre>

=== Adding a price to join ===
* add the option '''money=&lt;amount>''' into the '''preReqs:''' config section.  Create the section '''preReqs:''' if it doesn't exist.
Example:
<pre>
    preReqs:
        options: [money=100]
</pre>

= classes.yml =
=== Setting up classes ===
See [[BattleArena/Classes|ClassSetup]]

= Stages and Transitions =

All stages and transitions can have '''any''' of the 'options'.


=== Match Stages ===
A match is composed of different stages.

# onOpen: For events this happens when you open the event. For matches when players get matched from the queue.
# onPrestart: time between onOpen and onStart.
# onStart: Match starts
# onVictory: One player or team is victorious
# onComplete: match was completed successfully
# onCancel: match was cancelled
# onFinish: happens after onComplete or onCancel

=== Match Transitions ===
During the match many different transitions can happen

# onSpawn: Happens on teleport or on player Respawn ( if respawn is set within onDeath)
# onDeath: What happens when a player dies
# onJoin: player joining a match
# onEnter: Happens when the player first enters the arena.  right after before they are teleported in.  
# onLeave: Happens when the player leaves the arena(aka if they win(after onComplete), or if they die(and dont respawn) )
# losers: Happens after onVictory, before onComplete, used for prizes
# winner: Happens after onVictory, before onComplete, used for prizes
# drawers: Happens after onVictory, before onComplete, used for prizes
# firstPlace: Prizes for tournaments
# participants: Prizes for tournaments

= Valid Options =
See the [[BattleArena/Options|Options]] page

= Item Enchants =
Details about how to add enchantments to items: 
[[Enchantments|ItemEnchants]]

= Potion effects = 
Details on adding potion effects to players: 
[[Potions|Potion Effects]]

== Return to Index ==
[[BattleArena]]

[[Main Page]]
