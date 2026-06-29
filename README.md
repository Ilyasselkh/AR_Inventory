# AR Inventory

Module Odoo d'inventaire par scan pour les flux entrepôt Araymond.

Le module gere les sessions d'inventaire, les emplacements, les scans RayPro, Reception SAP, Logistique ou manuel, les etiquettes, les lots, les quantites et les comparaisons avec les donnees SAP/LX03.

## Objectif fonctionnel

Faciliter les inventaires tournants ou generaux en fiabilisant la collecte terrain par scan.

Le module permet de :

- creer une session principale d'inventaire ;
- creer des sessions ou emplacements de scan ;
- charger des fichiers de reference SAP/LX03 ;
- scanner les etiquettes par emplacement ;
- gerer les emplacements vides ;
- controler les UM, lots, references et quantites ;
- faire plusieurs passages de scan ;
- comparer SAP avec les scans ;
- comparer les passages entre eux ;
- identifier les ecarts ;
- fermer une session d'inventaire ;
- exporter ou consulter les donnees de suivi.

## Roles fonctionnels

### Operateur inventaire

L'operateur realise les scans terrain.

Il peut :

- ouvrir un emplacement ;
- scanner les etiquettes ;
- declarer un emplacement vide ;
- renseigner manuellement une reference, un lot, une HU ou une quantite si necessaire ;
- terminer le scan d'un emplacement.

### Responsable inventaire

Le responsable inventaire pilote les sessions.

Il peut :

- creer une session principale ;
- charger les fichiers source ;
- creer les emplacements ;
- suivre l'avancement des scans ;
- consulter les anomalies ;
- fermer la session.

### Administrateur

L'administrateur gere les droits, les vues et les controles techniques.

## Types de session

Les types de session principaux sont :

- inventaire tournant ;
- inventaire general ;
- autre.

## Types de scan

Le module gere plusieurs modes de scan :

- `RayPro`
- `Reception SAP`
- `Logistique`
- `Manuel`
- `Hybride` selon les sessions.

## Etats des sessions

Les sessions principales utilisent notamment :

- `CreationMain`
- `Creation`
- `Scan`
- `Fermeture`

Les sessions de scan utilisent notamment :

- `Creation`
- `Scan`
- `Fermeture`

## Flux operationnel

1. Creer une session principale.
2. Choisir le type de session.
3. Charger les fichiers SAP/LX03 si necessaire.
4. Creer les emplacements ou sessions de scan.
5. Scanner les etiquettes par emplacement.
6. Controler les anomalies.
7. Comparer les resultats avec SAP/LX03.
8. Corriger ou completer les saisies manuelles.
9. Fermer la session.

## Controles et ecarts

Le module permet de consulter :

- ecarts SAP vs premier scan ;
- ecarts premier scan vs deuxieme scan ;
- ecarts deuxieme scan vs troisieme scan ;
- emplacements en anomalie ;
- etiquettes scannees ;
- donnees manuelles.

## Dependances

Dependance Odoo :

- `base`

Dependance Python :

- `openpyxl`

`openpyxl` est utilise pour charger ou traiter les fichiers Excel.

## Modeles principaux

- `araymond.inventory`
- `araymond.etiquette`
- `araymond.maininvsession`
- `araymond.invsession`
- `araymond.lxo3`
- `araymond.ref`
- `araymond.imagestock`

## Structure du module

- `security/ir.model.access.csv`
- `views/menu.xml`
- `views/inventory.xml`
- `models/AR_inventory.py`
- `__manifest__.py`

## Installation

1. Copier le module dans le dossier addons Odoo.
2. Installer la dependance Python `openpyxl`.
3. Redemarrer le serveur Odoo si necessaire.
4. Mettre a jour la liste des applications.
5. Installer le module.
6. Verifier les droits utilisateurs.
7. Tester une session avec un fichier source.
8. Tester un scan RayPro et un scan manuel.

## Maintenance fonctionnelle

Lorsqu'une regle d'inventaire change, verifier aussi :

- les types de scan ;
- les champs obligatoires UM/DUM ;
- les imports Excel ;
- les comparaisons d'ecarts ;
- les vues de fermeture ;
- ce README.
