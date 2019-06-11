---
id: item-syntax
title: Fifth Document
---

For yaml files that allow you to specify items. To add a new item you must add a new element to the list. Colors are RGB format with values from 0-255.
* '''- itemName: [options] <quantity>'''
Examples:
* '''- diamond_sword: sharp:5 knockback:3 fire:1 lore="Uber Sword!" 1'''
* '''- leather_helm: lore="My Helm Keeps Me Safe" color=255,255,255 1'''

==Options==
* '''color=<red>,<green>,<blue>'''
* '''lore="<line1>\n<line2>"'''
* '''displayName="<string>"'''
* [[Enchantments|Valid Item Enchants]]

==Config Example==
Inserting an item with giveClass inside of the Game configs. In this example it's being done onSpawn, but it can be done anywhere.
<source lang="csharp">
Skirmish:
    onSpawn:
        giveItems:
        - gold_ingot: 2
        - leather_boots: color=0,0,0 displayName="StealthShoes" lore="Ancient Elven boots\nMade by Legolas Greenleaf" 1
</source>
As you can see, you can have multiple lines of lore using the new-line character to separate each line.

In the above example, line1 is
<source>
Ancient Elven boots
</source>

And line2 is
<source>
Made by Legolas Greenleaf
</source>

== Return to Index ==
[[Main Page]]
