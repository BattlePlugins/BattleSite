---
id: scheduling
title: Teams Info & Setup
sidebar_label: Scheduling
---
## Scheduling Events
> Here
## Scheduling Games
You can schedule games so that they run periodically. You just add events to the scheduler and start it.
* Add the events you want to run by using /bas add <commands>
* Start the scheduled events /bas start
you can change the time values in the BattleArena/config.yml under `defaultOptions.timeBetweenScheduledEvents`

### Command
* `/bas` shorthand for `battleArenaScheduler`
* `/bas add <commands that you would normally type to start an event>`

### Examples
* `/bas add tourney auto skirmish`
* `/bas add ffa auto`
* `/bas add ffa auto teamSize=1+ nTeams=2`

## Running the scheduled events
This will run the scheduled events in order. Starting when the previous finishes.
* `/bas start`

## Deleting Events
* `/bas delete <number>`

## Stopping the events
* `/bas stop`

## Listing Scheduled Events
* `/bas list`

## Running Scheduled Events at startup
* see [[BattleArena/Config#Scheduled Event Options|Running Events at Startup]]
