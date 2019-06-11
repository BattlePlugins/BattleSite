---
id: commands
title: Battle Arena Commands
sidebar_label: Commands
---

## Player Commands

### Game Commands
* `/<game> join`
* `/<game> leave`

**Examples:**
* `/arena join`
* `/arena leave`

### Join Phase Commands
* `/<game> info`
* `/<game> result`
* `/<game> options`
  
### Team Commands
* `/team info`
* `/team decline`
* `/team disband`
* `/team join`
* `/team create <player 1> <player 2> <player x...>`

## Admin Commands

### Match Commands
* `/arena enable`
* `/arena info`
* `/arena setElo <player> <elo>`
* `/arena resetElo`
* `/arena create <arena name> [team size] [# teams]`
* `/arena check`
* `/arena info <arena name>`
* `/arena winner <player>`
* `/arena verify`
* `/arena leave`
* `/arena join`
* `/arena status <arena or player>`
* `/arena delete <arena name>`
* `/arena cancel <arena or player>`
* `/arena disable`
  
### Event Commands
* `/<event> leave`
* `/<event> verify`
* `/<event> setElo <player> <elo>`
* `/<event> create <arena name> [team size] [# teams]`
* `/<event> resetElo`
* `/<event> result`
* `/<event> join`
* `/<event> options`
* `/<event> status <arena or player>`
* `/<event> cancel`
* `/<event> enable`
* `/<event> start`
* `/<event> delete <arena name>`
* `/<event> status`
* `/<event> cancel <arena or player>`
* `/<event> info <arena name>`
* `/<event> disable`
* `/<event> check`
* `/<event> winner`
* `/<event> info`
  
### Team Commands
* `/team info`
* `/team decline`
* `/team disband`
* `/team join`
* `/team create <player 1> <player 2> <player x...>`
* `/team delete`
* `/team list`
* `/team listDetailed`
* `/team info <player>`
  
### Debug Commands
* `/battleArenaDebug giveTeam <team index>`
* `/battleArenaDebug giveTeam <player> <team index>`
* `/battleArenaDebug addKill <player>`
* `/battleArenaDebug giveHelm <item>`
* `/battleArenaDebug showSpawns <arena>`
* `/battleArenaDebug showListeners`
* `/battleArenaDebug enableDebugging <section> <on/off>`
  
**[enableDebugging sections](https://github.com/BattlePlugins/BattleArena/blob/master/src/java/mc/alk/arena/executors/BattleArenaDebugExecutor.java#L59-L84)**:
* `transitions`
* `virtualplayer`
* `tracking`
* `storage`
* ~~`damage`~~
* `commands`
* `debug`
* `teams`

### Inventory Commands
Listing a players saved inventories:
* `/ba listInv <player>`
* `/ba listInv <player> <index>`
  
Restoring a players inventory from a saved inventory. Make sure you first run `/ba listInv` to find which index you want to restore. 
* `/ba restoreInv <player> <index>`
