---
id: arenas
title: ArenaSpleef Arenas
sidebar_label: Arenas
---

==Making a Spleef arena== You will have to create an area for the spleef. Make one or more layers you want the players to fight on. Make sure that below the last layer that the players either land in water or lava/some other deadly trap.

# /spleef create

<spleef arena="" name=""> : Example /spleef create myFirstArena</spleef>

# /spleef alter

<spleef arena="" name=""> 2 &lt;- setup a second spawn, you can keep adding them if you want more than 2, like /spleef alter <spleef arena="" name=""> 3\. Example : /spleef alter myFirstArena 2</spleef></spleef>

# Now select the layer you want the players to fight on with the WorldGuard edit tool (usually a wood_axe)

# /spleef setLayer

<spleef arena="" name=""> . Example /spleef setLayer myArena</spleef>

# You should probably protect the entire area with worldguard so they can't break out of the spleef arena.

==Adding Multiple Layers== _/spleef setLayer

<spleef arena="" name="">
  <layer num=""> .
*</layer>
</spleef>

_ Example /spleef setLayer myArena 2 ==Adding Regeneration to Layers== - /spleef setRegen

<spleef arena="" name="">
  <regen time="">
</regen>
</spleef>

- /spleef setRegen

  <spleef arena="" name="">
    <layer num="">
    <regen time="">
  ** Example /spleef setRegen myArena 45 &lt;- regen layer 1 every 45 seconds</regen>
  </layer>
  </spleef>
