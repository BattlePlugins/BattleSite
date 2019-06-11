---
id: tutorial
title: Development Page
sidebar_label: Tutorial
---

[[File:DEV.png|center|link=http://wiki.battleplugins.org/Category:Dev]]
[[Category: Dev]]
==Overview==
Here are the steps you will need to take to create your own plugin.
# In your plugin.yml, you must depend on BattleArena.
# Register your plugin with BattleArena inside of onEnable
# Create a Class that extends Arena
# Create your default Config.yml file
After that everything else is optional. For an easy plugin that shows how to make custom events and matches check out the Paintball code. [[https://github.com/alkarinv/ArenaPaintball | ArenaPaintball]].

==Details==
===Creating your plugin.yml===
The most important part here is the depend: [BattleArena]. This is not "depends" depends will not work.
====Example====
<syntaxhighlight lang="cpp">
name: SuperCrushers

version: 1.0
author: alkarin

description: A sweet crush the blocks plugin!
depend: [BattleArena]  ### <--- the important line
main: mc.alk.crush.SuperCrushers
</syntaxhighlight>

===Registering your plugin with BattleArena===
Registering takes the following
# Your plugin
# The name of your competition
# The command for your competition
# Your arena class (which extends Arena)
# (Optional) An executor for handling commands
====Example: Registering your new competition====
<syntaxhighlight lang="cpp">
@Override
	public void onEnable(){
		/// Register our SuperCrushers plugin, the command will be "sc"
		BattleArena.registerCompetition(this, "SuperCrushers", "sc", SuperCrusherArena.class);
	}
</syntaxhighlight>

===Creating an Arena class===
Create a class that extends Arena. An arena class will get created once during server start up, and will get destroyed and recreated if someone uses the /arena alter, command.
====Example Arena 1====
This will actually work. It just does nothing custom, usually we want to listen for some sort of events and change them.
<syntaxhighlight lang="cpp">
public class SuperCrusherArena extends Arena{
}
</syntaxhighlight>

====Example Arena 2====
This time we are registering the EntityDamageEvent and changing the damage of snow balls, this is what ArenaPaintball does. Notice the @MatchEventHandler, this will make sure that this event will ONLY be called when it is performed by someone inside of the Current competition.

<syntaxhighlight lang="cpp">public class SuperCrusherArena extends Arena{
	@MatchEventHandler
	public void onEntityDamage(EntityDamageByEntityEvent event) {
		if (event.isCancelled())
			return;
		if (event.getDamager().getType() != EntityType.SNOWBALL)
			return;
		event.setDamage(20);
	}
}
</syntaxhighlight>

===Creating your Config.yml===
This is probably the most important part. To make a config file for your plugin it must be named the same thing as what you registered... so if you registered "SuperCrusher" then your config file should be called "SuperCrusherConfig.yml" and should be located in the same place as your plugin.yml. Inside there should be the options you want to be default when people load your plugin.
====Example Config.yml====
Here is an example config to get you started
<syntaxhighlight lang="cpp">
          configVersion: 2.0
          ## This should be placed in the plugin directory
          ## for more help configuring see the wiki
          ## https://github.com/alkarinv/BattleArena/wiki
          ## Change this file to customize your event
          
          SuperCrusher:  ### This should be exactly the same as the name you registered
              enabled: true
              database: SuperCrusher # needs BattleTracker
              rated: true # if database is enabled
              prefix: "&6[SuperCrusher]&e"
              cmd: sc
              nTeams: 2+
              teamSize: 1
              joinType: Queue ## there are 2 join types, Queue and JoinPhase
              victoryCondition: LastManStanding
              ### You can delete any stages/transitions that have no options
              ### for a list of options see wiki
              preReqs: ## Prerequisites for joining
                  options: []
              onEnter:
                  options: [storeAll]
              onLeave:
                  options: [restoreAll]
              onJoin:  ## when they join the match
                  options: []
              onPreStart: ## x seconds before onStart
                  options: []
              onStart: ## Starting
                  options: [teleportIn, pvpOn]
              onSpawn: ## what happens when a player spawns
                  options: [hunger=20, health=20]
                  giveClass: 
                      default: Gladiator
              onDeath: ## what happens when a player dies
                  options: []
              onComplete: ## what happens when things end
                  options: [teleportOut, clearInventory]
              winner: ## what to give the winner
                  options: [health=20, hunger=20]
              losers: ## what to give the losers
                  options: []
</syntaxhighlight>

==Useful Options ==
[[BattleDev#API | API]]

== Return to Index ==
[[Main Page]]
