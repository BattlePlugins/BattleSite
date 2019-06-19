---
id: types
title: Arena Types
sidebar_label: Types of Arenas
---

# Arena Types:

BattleArena's comes with 7 different match types. You can customize any of these to make them act completely different by altering the `config.yml` (except for the tournament event which is slightly different).

## Competitions with a Queue:

- **Arena** (`arena`): You fight with what is given to you in the config. You can't bring items in or out.
- **Skirmish** (`skirmish`): You bring in what you want to fight with, you take out whatever you pick up.
- **Battleground** (`bg`): 1 minute match where the winner is the one with the highest kills after 1 minute. 4 teams of 1 player each compete.
- **Colosseum** (`col`): 4 teams against each other, last man standing wins.

## Competitions with a Join Phase:

- **Free-for-All** (`ffa`): last player/team left standing wins.
- **Deathmatch** (`dm`): 2 minute event where if you die you respawn. Highest kills wins.
- **Tournament** (`tourney`): Pick a match type and do a bracketed tournament of that type.
