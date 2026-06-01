# AR_Inventory


> Documentation du module d?inventaire par scan et comparaison SAP/LX03.


## Vue d?ensemble

AR_Inventory est un outil op?rationnel d?inventaire. Il g?re des sessions de scan, des emplacements, des ?tiquettes, des lots, des quantit?s et des comparaisons avec les donn?es SAP/LX03. Il permet plusieurs passages de scan et met en ?vidence les ?carts entre SAP et le terrain.

## Utilisateurs concern?s

- Op?rateur inventaire : scanne les ?tiquettes et emplacements.
- Responsable logistique : lance et ferme les sessions.
- Administrateur : charge les fichiers et contr?le les anomalies.
- Contr?leur : analyse les ?carts SAP vs scans.

## Workflow m?tier

1. Cr?ation session principale
2. Chargement ?ventuel fichier LX03/SAP
3. Cr?ation des sessions ou emplacements
4. Scan RayPro/r?ception/logistique/manuelle
5. Contr?le des anomalies
6. Comparaison des passages
7. Fermeture inventaire

## Fonctionnement op?rationnel

- Cr?er une session d?inventaire.
- Charger ou pr?parer les donn?es de r?f?rence.
- Scanner les ?tiquettes selon le mode choisi.
- Utiliser les vues d??cart pour corriger ou analyser.
- Fermer la session une fois les scans valid?s.

## Configuration recommand?e

- Installer la d?pendance Python openpyxl.
- Pr?parer les fichiers source SAP/LX03 au format attendu.
- Configurer les acc?s aux menus inventaire.
- D?finir les r?gles internes de scan et fermeture.

## D?pendances Odoo

- `base`

## Mod?les techniques

- `araymond.inventory` : Araymond inventory (`models/AR_inventory.py`)
- `araymond.maininvsession` (`models/AR_inventory.py`)
- `araymond.etiquette` : Araymond inventory (`models/AR_inventory.py`)
- `araymond.invsession` : Araymond inventory (`models/AR_inventory.py`)
- `araymond.lxo3` : LX03 Inventory Data (`models/AR_inventory.py`)
- `araymond.ref` : Araymond inventory reference (`models/AR_inventory.py`)
- `araymond.imagestock` : Araymond inventory Image de stock (`models/AR_inventory.py`)

## ?tats d?tect?s dans le code

- `models/AR_inventory.py` : `CreationMain` (CreationMain), `Creation` (Creation), `Scan` (Scan), `Fermeture` (Fermeture)
- `models/AR_inventory.py` : `Creation` (Creation), `Scan` (Scan), `Fermeture` (Fermeture)

## Actions serveur principales

- `action_view_form_inv` (`models/AR_inventory.py`)
- `action_raypro` (`models/AR_inventory.py`)
- `action_receptionSAP` (`models/AR_inventory.py`)
- `action_logistique` (`models/AR_inventory.py`)
- `action_Manuel` (`models/AR_inventory.py`)
- `action_show_su_lxo3` (`models/AR_inventory.py`)
- `action_close` (`models/AR_inventory.py`)
- `action_show_ecarts_sapvs1scan` (`models/AR_inventory.py`)
- `action_show_ecarts_1vs2scan` (`models/AR_inventory.py`)
- `action_show_ecarts_2vs3scan` (`models/AR_inventory.py`)
- `action_manuel_save` (`models/AR_inventory.py`)
- `action_mod_empl` (`models/AR_inventory.py`)
- `action_scan_ok` (`models/AR_inventory.py`)
- `action_load_file` (`models/AR_inventory.py`)
- `action_creation` (`models/AR_inventory.py`)
- `action_creation` (`models/AR_inventory.py`)
- `action_create_empl` (`models/AR_inventory.py`)
- `action_mod_empl` (`models/AR_inventory.py`)
- `action_close_invsession` (`models/AR_inventory.py`)

## Fichiers charg?s par le manifest

- `security/ir.model.access.csv`
- `views/menu.xml`
- `views/inventory.xml`

## S?curit? et droits

Le module s?appuie sur les fichiers suivants pour d?finir les groupes, r?gles d?enregistrement et droits d?acc?s :

- `security/ir.model.access.csv`

## Bonnes pratiques d?utilisation

- V?rifier que chaque utilisateur Odoo est li? au bon employ? lorsque le module d?pend de `hr.employee`.
- Tester le workflow avec un dossier de test avant utilisation en production.
- Contr?ler les groupes de s?curit? apr?s installation afin que seuls les bons r?les voient les boutons de validation.
- Garder les templates e-mail et rapports align?s avec les proc?dures internes.
- Sauvegarder la base avant toute modification structurelle du module.

## Maintenance

- Les ?volutions fonctionnelles doivent ?tre ajout?es dans les mod?les Python, les vues XML et les r?gles de s?curit? correspondantes.
- Apr?s modification des vues, mettre ? jour le module depuis Odoo ou red?marrer le serveur selon le type de changement.
- Apr?s modification des assets, vider le cache navigateur et recompiler les assets si n?cessaire.
- Toute nouvelle ?tape de workflow doit ?tre accompagn?e des droits, boutons, notifications et filtres correspondants.
