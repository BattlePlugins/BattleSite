---
id: changelog
title: VirtualPlayers Changelog
sidebar_label: Changelog
---

# Change Log

- **v1.6.2**

  - Updated to Minecraft 1.8 compatibility.

- **v1.6.0**

  - Added PIE command (PlayerPickupItemEvent)
  - `/dc vp pie` will trigger a PlayerPickupItemEvent.
  - The VirtualPlayer will pickup items on the ground at his/her location.

- **v1.5.10**

  - Fixed BlockPlaceEvent command.
  - Compatible with 1.2.5 to 1.7.10

- **v1.5.9**

  - Added backwards compatibility.
  - You can now use one JAR for all craftbukkit versions.
  - Tested against craftbukkit versions 1.2.5 to 1.7.9

- **v1.5.6**

  - `/dc help`: now shows help
  - `/dc <vp> sneak <true or false>` : now sneaks and unsneaks
  - Breaks the BlockPlaceEvent cmd: `/dc <vp> bpe <block> <location>`

- **v1.4.3**

  - Fixes for cross world moves

- **v1.4.1.1**

  - Command is now vdc, with an alias for dc

- **v1.4**

  - More API commands for making virtual players

- **v1.3.1**

  - Fixes for bpe and bbe

- **v1.3**

  - new command : `/dc <virtual player> bpe <block> <location>` : do a BlockPlaceEvent of the given material at the given location
  - new command : `/dc <virtual player> bbe <location>` : do a BlockBreakEvent at the given location

- **v1.2.5**

  - new command : `/dc <virtual player> interact <left|right> <location>` : interact with the location with a left or right click, with whatever item they have in hand.

- **v1.2.4**

  - new command. givehelm. Set the virtual players helm
  - Fix for creating virtual players in servers that don't have world

- **v1.2.3**

  - new command: `/dc <virtualplayer> hit <player2> [damage]` <- attack other players
  - new command: `/dc <virtualplayer> interact <location>` <- do a block click event

- **v1.2.0**

  - Add ability for virtual players to fire AsyncPlayerChat events by the use of `/dc <virtual player> chat <message>`
