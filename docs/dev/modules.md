---
id: modules
title: Development Page
sidebar_label: Modules
---
[[File:PowerBA.png|center|link=http://wiki.battleplugins.org/Category:BattleArena:Power]]
[[Category: BattleArena:Power]]
[[Category: BattleArena]]

= Admins =
== What are modules ? ==

Imagine that you want to make an arena that is simultaneously be of type BombArena and ArenaPaintball. In other words, you want a BombArena that has the capabilities of a Paintball Arena... Since an arena can only be of one type, you can make a BombArena, then add Paintball modules to it... So that the players can play paintball in a Search-N-Destroy match (for example).

That is just one example. In general, modules can add a variety of different behaviors to arenas. They can change arenas in unique and interesting ways.

== Where can I get modules ? ==

You can download a pre-made module from the Rainbowcraft archives. Or if you need a custom module, you can ask on the forums, or in IRC.

* http://rainbowcraft.sytes.net/download/plugins/BattleArena/modules/
* http://bukkit.org/forums/plugin-requests.96/
* http://www.spigotmc.org/forums/hiring-developers.55/
* http://irc.battleplugins.org/Bukkit


== Module Installation ==

Install the Module's .class file into the '''/modules/''' directory.

<pre>
/plugins/BattleArena/modules/
</pre>

== Module Activation ==

Eventhough, you have just installed the module, it will NOT be activated by default. You must specifically declare which mods are active for-each arena. Most of the config files are located in the BattleArena/competitions/ folder:

<pre>
/plugins/BattleArena/competitions/*Config.yml
/plugins/ArenaCTF/CaptureTheFlagConfig.yml
/plugins/ArenaFutbol/FutbolConfig.yml
/plugins/BombArena/BombArenaConfig.yml
/plugins/BombArena/SndArenaConfig.yml
/plugins/HostageArena/HostageArenaConfig.yml
</pre>

Using yaml syntax, add a key-value pair. The key will be modules: The value will be a yaml list of module names.  You can get the exact name of a module from your server's startup log (as you can see below, it's not case-sensitive).

<pre>
BombArena:
  modules:
  - StopInterference
  - euro.ArmorLock
  - ExampleMod3
</pre>

<pre>
HostageArena:
  modules: [StopInterference, Euro.Armorlock]
</pre>

= Developers =
== How to create modules ==

== Example Modules ==

=== EuroArmorLock.java ===

http://dev.bukkit.org/bukkit-plugins/battlearena2/?page=3#c268

Requested by Dantinoz. Makes armor unequipable inside arenas.

Notice that it's in the default package (none), and the class extends ArenaModule. Also notice that the @ArenaEventHandler annotation automatically filters events... You only receive events that happen during a match (you don't get any events that happen outside of a match), so you don't have to perform this check manually.

<pre>


import mc.alk.arena.objects.events.ArenaEventHandler;
import mc.alk.arena.objects.modules.ArenaModule;

import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.event.inventory.InventoryType.SlotType;

/**
 * 
 * @author Nikolai
 */
public class EuroArmorLock extends ArenaModule {
    
    String name = "euro.ArmorLock";
    String version = "1.0";
    String author = "Europia79";
    
    @ArenaEventHandler
    public void onInventoryClick(InventoryClickEvent e) {
        
        if (e.getSlotType() == SlotType.ARMOR) {
            e.setCancelled(true);
        }
        
    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public String getVersion() {
        return this.version;
    }

}

</pre>
=== StopInterference.java ===

https://github.com/BattlePluginsDev/BattleArena/issues/23

As reported by Blackyvk, apparently, players outside an arena match were able to do damage to players inside a match. This module prevents this damage. However, if you wanted to stop damage from CrackShot weapons, that would be a different Module that listens to CrackShot events, and handles this appropriately.

<pre>


import mc.alk.arena.competition.Competition;
import mc.alk.arena.controllers.PlayerController;
import mc.alk.arena.objects.ArenaPlayer;
import mc.alk.arena.objects.modules.ArenaModule;

import org.bukkit.entity.Entity;
import org.bukkit.entity.Player;
import org.bukkit.entity.Projectile;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;
import org.bukkit.event.entity.EntityDamageByEntityEvent;
import org.bukkit.projectiles.ProjectileSource;

/**
 * 
 * @author Nikolai
 */
public class StopInterference extends ArenaModule {
    
    String name = "StopInterference";
    String version = "1.0";
    String author = "Europia79";
    
    String[] description = {
        "SourcePlayer & TargetPlayer must be in the same Arena.",
        "If not, cancel the damage."
    };
    
    /**
     * SourcePlayer & TargetPlayer must be in the same Arena, 
     * otherwise, cancel the damage.
     */
    @EventHandler (priority=EventPriority.MONITOR)
    public void onProjectileDamage(EntityDamageByEntityEvent e) {
        Entity eTarget = e.getEntity();
        if (!(eTarget instanceof Player)) return;
        Player pTarget = (Player) eTarget;
        if (e.getDamager() instanceof Projectile) {
            Projectile projectile = (Projectile) e.getDamager();
            ProjectileSource source = projectile.getShooter();
            if (source instanceof Player) {
                Player pSource = (Player) source;
                ArenaPlayer apTarget = PlayerController.toArenaPlayer(pTarget);
                ArenaPlayer apSource = PlayerController.toArenaPlayer(pSource);
                
                if (differentArenas(pTarget, pSource)) {
                    e.setDamage(0.0);
                    e.setCancelled(true);
                }
                
            }
        } else if (e.getDamager() instanceof Player) {
            Player damager = (Player) e.getDamager();
            if (differentArenas(pTarget, damager)) {
                e.setDamage(0.0);
                e.setCancelled(true);
            }
        }
    }
    
    public boolean differentArenas(Player p1, Player p2) {
        return ( !(sameArenas(p1, p2)));
    }
    
    public boolean sameArenas(Player p1, Player p2) {
        ArenaPlayer ap1 = PlayerController.toArenaPlayer(p1);
        ArenaPlayer ap2 = PlayerController.toArenaPlayer(p2);
        Competition comp1 = ap1.getCompetition();
        Competition comp2 = ap2.getCompetition();
        if (comp1 != null && comp1.equals(comp2)) {
            return true;
        } else if (comp1 == null && comp2 == null) {
            return true;
        }
        return false;
    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public String getVersion() {
        return this.version;
    }

}
</pre>

