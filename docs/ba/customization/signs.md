---
id: signs
title: Sign Support
sidebar_label: Signs
---
[[File:AdvancedBA.png|center|link=http://wiki.battleplugins.org/Category:BattleArena:Advanced]]
[[Category: BattleArena:Advanced]]
[[Category: BattleArena]]
==Creating Signs to join Competitions ==
You can create signs for Joining and Leaving competitions.  To do it you simply write the name of the competition in the first line, then on the second line add what command you would like to do, like join/leave, and on the third line you put the arena name. You will know you did the sign correctly because it will change to colored text.

==General Rule==
<pre>
Line 1: [ArenaType]
Line 2: Join/Leave/Action
Line 3: ArenaName TeamColor
Line 4: Nothing Here
</pre>
Bellow are a few examples of how the signs could be created.
===Example 1===
To make a sign to join Spleef in the arena called "NetherFort" you simply put the following into the sign:
<div style="text-align: center;">
<pre>
[spleef]
join
NetherFort
</pre>
</div>
And the outcome will be (Note: you don't put anything on the fourth line!):
[[File:Sign_-_Simple_1.png|center]]

===Example 2===
To make a sign to join Skirmish in the arena called "Arena1" you simply put the following into the sign:
<div style="text-align: center;">
<pre>
[Skirmish]
join
Arena1
</pre>
</div>
And the outcome will be (Note: you don't put anything on the fourth line!):
[[File:Sign_-_Simple_2.png|center]]

===Example 3===
To make a sign to join BattleGround (note: for a shorter version, BattleGround is also called 'bg') in the arena called "Battle1" you simply put the following into the sign:
<div style="text-align: center;">
<pre>
[bg]
join
Battle1
</pre>
</div>
And the outcome will be (Note: you don't put anything on the fourth line!):
[[File:Sign_-_Simple_3.png|center]]

==Creating signs to Leave==
=== Example 1 ===
To make a sign to leave a battleground.  The word "bg" goes on the first line, the word "leave" goes on the second line. We can write out the word battleground, but its long, so instead lets use it's command '''bg'''
<pre>
bg
leave
</pre>

==Creating signs to join a specific team==
It is possible to set up the signs to join a specific team for the game. By using the signs to select the team, the team selection is not always guaranteed, it also relies on the data from the BattleTracker in order to make the teams evenly strong. To create such sign you have to simply follow the basics rule of creating the sign to join, with the addition to the 3rd row. In the first row you put in the name of the competition, in the second line you put 'join' and in the third line you put the name of the arena and after a space you put in the name of the team.
===Example 1===
To make a sign to join BattleGround (note: for a shorter version, BattleGround is also called 'bg') in the arena called "Battle3" and in order to join the team "red" you simply put the following into the sign:
<div style="text-align: center;">
<pre>
[bg]
join
Battle3 red
</pre>
</div>
And the outcome will be (Note: you don't put anything on the fourth line!):
[[File:Sign_-_Teams_1.png|center]]

===Example 2===
To make a sign to join BattleGround (note: for a shorter version, BattleGround is also called 'bg') in the arena called "Battle3" and in order to join the team "blue" you simply put the following into the sign:
<div style="text-align: center;">
<pre>
[bg]
join
Battle3 blue
</pre>
</div>
And the outcome will be (Note: you don't put anything on the fourth line!):
[[File:Sign_-_Teams_2.png|center]]

===Example 3===
You can create as many signs and teams as you want. The following example is for the competition of BattleGround set up by the server of DreadCraft. They have a simple join signs on the front of the board, and in the back they have the specific join signs for the teams (For this event they have the options of 4 teams):
[[File:Sign_-_Teams.png|center]]

== Return to Index ==
[[BattleArena]]

[[Main Page]]

[[Main Page]]
