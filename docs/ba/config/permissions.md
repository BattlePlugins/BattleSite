---
id: permissions
title: Battle Arena Permissions
sidebar_label: Permissions
---

## Joining
Node: **`arena.join.<game>`**

Examples:
* `arena.join.arena`
* `arena.join.skirmish`
* `arena.join.tourney`

## Leaving
Node: **`arena.leave`**

## Class Signs
Nodes:
* `arena.class.use.*` <- to allow usage for all signs
* `arena.class.use.<class name>`

Examples:
* `arena.class.use.gladiator`
* `arena.class.use.archer`

## Dueling
Node: **`arena.duel.<game>`**

Examples:
* `arena.duel.skirmish`
* `arena.duel.spleef`

### Exempting players from being challened to a duel
If you don't want a certain player or grouped to be challenged, give them the following node:
**`arena.duel.exempt`**

## Permissions for Other Plugins Using BattleArena
Same as above, just substitute the name of the arena with the name of the arena. You can find this name inside of the Arena config for that specific game.

Examples:
* `arena.join.paintball`
* `arena.join.spleef`
* `arena.join.capturetheflag`

## Team Permissions
If you want players to be able to create their own teams; for example if they want to team up with a friend, you must give them the following permissions:
* `arena.team.create`
* `arena.team.join`

## Admins
If you want permissions to create, delete or alter arenas, you must either be a **server operator** or have the following node:
**`arena.admin`**

## Adding Permissions

### (Default) If you don't have a permissions plugin.
You can use this as a starting point for your server. Copy [this](https://pastebin.com/FcQVqPAj) into your server's permission.yml. Then change what you want later.

### PermissionsEx
To add permissions to a group, use:
**`pex group <group> add <permission node>`**

Examples:
* `pex group default add arena.skirmish.join`
* `pex group duke add arena.ctf.join`

### GroupManager
To add permissions to a group, use:
**`mangaddp <group> <permission node>`**

Examples:
* `mangaddp default arena.skirmish.join`
* `mangaddp duke arena.ctf.join`

### LuckPerms:
To add permissions to a group, use:
**`lp group <group> permission set <permission node>`**

Examples:
* `lp group default permission set arena.skirmish.join`
* `lp group duke permission set arena.ctf.join`
