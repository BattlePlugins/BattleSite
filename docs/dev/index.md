---
id: index
title: Development Page
sidebar_label: Dev Page
---
[[File:DEV.png|center|link=http://wiki.battleplugins.org/Category:Dev]]
[[Category: Dev]]
==API==
===Tutorial===
Read this [[APITutorial|tutorial]] for creating a simple first extension game.

===Event Handlers===
BattleArena uses a custom annotation, '''@ArenaEventHandler''', that allows you to only listen for events that occur inside an Arena. This is used like the normal '''@EventHandler''' annotation but greatly simplifies code as all the checking to make sure a player is in a game, and finding the correct game, is already taken care of.
@ArenaEventHandler:
          @ArenaEventHandler
              public void onBlockPlace(BlockPlaceEvent event){
                  /// This event will only be called for players inside the arena placing blocks
              }

===CustomCommandExecutor's===
BattleArena allows you to simplify commands with a custom way of creating methods.
[[Custom Command Executor | Custom Command Executor]]

==JavaDocs==
[[http://rainbowcraft.sytes.net:8080/job/BattleArena/javadoc/ | JavaDoc]]

==Battle Arena Modules==
See this page for more details on  Battle Arena: [[BattleDev/Modules|Modules]]

==Maven Repository==

Maven repository coming soon!

==Examples==
===Handling Arena Events Examples ===
* [[API_Examples |Examples]]

===Full Plugin Examples===
* [[https://github.com/alkarinv/ArenaPaintball | Paintball]]: This is the simplest example, only has event handling
* [[https://github.com/alkarinv/ArenaOneInTheChamber | One in the chamber]]: Event handling (mainly damage related)
* [[https://github.com/AugmentedWolf/Parkour | Parkour]]: Shows event handling, custom executor
* [[https://github.com/alkarinv/ArenaSpleef | Spleef]]: Event handling, custom executor
* [[https://github.com/alkarinv/ArenaCTF | Capture The Flag]]: This has event handling, custom executors, and scoreboards

==Useful Options ==
[[APITutorial | API Tutorial]]

[[Custom Command Executor | Custom Command Executor]]

[[API_Examples | Handling Arena Bukkit Events Examples]]

== Return to Index ==
[[Main Page]]
