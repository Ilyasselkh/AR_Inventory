# AR_Inventory

Module Odoo d inventaire par scan. Il gere les sessions, emplacements, etiquettes, lots, quantites et comparaisons avec les donnees SAP/LX03.

## Objectif

Cette documentation explique le perimetre fonctionnel du module, les roles utilisateurs, le workflow, la configuration et les principaux objets techniques.

## Utilisateurs concernes

- Operateur inventaire
- Responsable logistique
- Controleur inventaire
- Administrateur Odoo

## Workflow metier

1. Creation session principale
2. Chargement donnees SAP ou LX03
3. Creation sessions ou emplacements
4. Scan RayPro, reception, logistique ou manuel
5. Controle anomalies
6. Comparaison des passages
7. Fermeture inventaire

## Fonctionnement operationnel

- Creer une session.
- Charger les donnees de reference.
- Scanner etiquettes et emplacements.
- Analyser les ecarts.
- Fermer la session validee.

## Configuration recommandee

- Installer la dependance Python openpyxl.
- Preparer les fichiers source SAP/LX03.
- Configurer les droits inventaire.
- Definir les regles internes de scan.

## Dependances Odoo

- `base`

## Modeles principaux

- `araymond.inventory`
- `araymond.etiquette`
- `araymond.maininvsession`
- `araymond.invsession`
- `araymond.lxo3`
- `araymond.ref`
- `araymond.imagestock`

## Structure importante du module

- `security/ir.model.access.csv`
- `views/inventory.xml`
- `views/menu.xml`
- `models/__init__.py`
- `models/AR_inventory.py`

## Securite

Les droits sont geres par les fichiers du dossier `security`. Il faut verifier les groupes, les regles enregistrement et les acces CSV apres installation ou modification du module.

## Notifications et suivi

Les modules qui dependent de `mail` utilisent le chatter Odoo pour tracer les changements. Les templates mail presents dans le dossier `data` servent a notifier les acteurs concernes par les transitions.

## Installation

1. Copier le module dans le dossier addons Odoo.
2. Redemarrer le serveur Odoo si necessaire.
3. Mettre a jour la liste des applications.
4. Installer ou mettre a jour le module.
5. Verifier les droits utilisateurs et tester un dossier de bout en bout.

## Maintenance

- Ajouter toute nouvelle etape a la fois dans le modele Python, les vues XML, les droits et les notifications.
- Tester les workflows avec plusieurs roles utilisateurs.
- Mettre a jour les rapports et templates mail quand la procedure interne change.
- Eviter de modifier les donnees de production sans sauvegarde.
- Documenter toute evolution fonctionnelle dans ce README.
