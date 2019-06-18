---
id: placeholder
title: Placeholder API
sidebar_label: Placeholder API
---

[[File:PowerBT.png|center|link=<http://wiki.battleplugins.org/Category:BattleTracker:Power>]] [[Category: BattleTracker:Power]] [[Category: BattleTracker]]

Within BattleTracker, there is support to display tracker info through a plugin called [<https://www.spigotmc.org/resources/placeholderapi.6245/> PlaceholderAPI]. If you are unfamiliar with the plugin, it allows for you to show information with certain placeholders (e.g. %player_name% will return the player name) in plugins that have support for PlaceholderAPI. An example usage of this is displaying your PvP wins through BattleTracker on a scoreboard VIA a scoreboard plugin.

If you also have BattleArena installed, you can display tracker information from it too. An example usage of this is displaying the top players in Arena. The support for these placeholders even extends to custom arena games you have created or even plugins that hook into BattleTracker directly for stats.

== Placeholders == These are the placeholders for BattleTracker. They are split into two sections: player placeholders and rating placeholders. Player placeholders get information on the player that "sees" the placeholder. The rating placeholders get information about players for the rating you specify.

=== Player Placeholders === These placeholders show statistics for a the player viewing the information. This information will look different to each player seeing it ingame.

'''

<mode>''' below can be replaced with any arena type or statistic BattleTracker is currently tracking (e.g. pvp, pve, skirmish, etc.).</mode>

'''%bt_

<mode>_wins%''' Displays the amount wins.</mode>

'''%bt_

<mode>_losses%''' Displays the amount of losses.</mode>

'''%bt_

<mode>_kills%''' Displays the amount of kills.</mode>

'''%bt_

<mode>_deaths%''' Displays the amount of deaths.</mode>

'''%bt_

<mode>_ties%''' Displays the amount of ties.</mode>

'''%bt_

<mode>_streak%''' Displays the current streak.</mode>

'''%bt_

<mode>_maxstreak%''' Displays the max streak.</mode>

'''%bt_

<mode>_ranking%''' Displays the current ranking.</mode>

'''%bt_

<mode>_maxranking%''' Displays the max ranking reached.</mode>

'''%bt_

<mode>_rating%''' Displays the current rating.</mode>

'''%bt_

<mode>_maxrating%''' Displays the max ranking reached.</mode>

'''%bt_

<mode>_kdratio%''' Displays the kills to deaths. ratio.</mode>

'''%bt_

<mode>_wlratio%''' Displays the wins to losses ratio.</mode>

=== Rating Placeholders === These placeholders show statistic for the top players. Must be specified at end of placeholder.

'''

<mode>''' below can be replaced with any arena type or statistic BattleTracker is currently tracking (e.g. pvp, pve, skirmish, etc.).</mode>

'''

<rating>''' below can be replaced with the rating you want to get placeholder information from. For example, '''1''' will get information from the #1 player in the leaderboard.</rating>

'''%bt

_<mode>_top_wins</mode>_

<rating>%''' Displays the amount wins.</rating>

'''%bt

_<mode>_top_losses</mode>_

<rating>%''' Displays the amount of losses.</rating>

'''%bt

_<mode>_top_kills</mode>_

<rating>%''' Displays the amount of kills.</rating>

'''%bt

_<mode>_top_deaths</mode>_

<rating>%''' Displays the amount of deaths.</rating>

'''%bt

_<mode>_top_ties</mode>_

<rating>%''' Displays the amount of ties.</rating>

'''%bt

_<mode>_top_streak</mode>_

<rating>%''' Displays the current streak.</rating>

'''%bt

_<mode>_top_maxstreak</mode>_

<rating>%''' Displays the max streak.</rating>

'''%bt

_<mode>_top_ranking</mode>_

<rating>%''' Displays the current ranking.</rating>

'''%bt

_<mode>_top_maxranking</mode>_

<rating>%''' Displays the max ranking reached.</rating>

'''%bt

_<mode>_top_rating</mode>_

<rating>%''' Displays the current rating.</rating>

'''%bt

_<mode>_top_maxrating</mode>_

<rating>%''' Displays the max ranking reached.</rating>

'''%bt

_<mode>_top_kdratio</mode>_

<rating>%''' Displays the kills to deaths. ratio.</rating>

'''%bt

_<mode>_top_wlratio</mode>_

<rating>%''' Displays the wins to losses ratio.</rating>

== Return to Index == [[BattleTracker]]

[[Main Page]]
