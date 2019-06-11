---
id: command_executor
title: Development Page
sidebar_label: Command_Exec
---

[[File:DEV.png|center|link=http://wiki.battleplugins.org/Category:Dev]]
[[Category: Dev]]
When registering your new Game, you can add your own command Executor that will add custom commands to the already existing BattleArena game commands (./<game> join, ./<game> leave, etc).

===Example===
This is an example from the CTF game that allows you to add flags to the game. In this case the command would be '''/ctf addFlag myArenaName 1'''. the Player, means the person running the command has to be in game. The Arena will have to be a valid arena name, which will then get passed to you as an Arena, and the index has to be an integer.

public class CTFExecutor extends CustomCommandExecutor{

	@MCCommand(cmds={"addFlag"}, admin=true)
	public static boolean addFlag(Player sender, Arena arena, Integer index) {
             /// do stuff
        }


==Useful Options ==
[[BattleDev | Battle Plugins Developer Portal]]

== Return to Index ==
[[Main Page]]

