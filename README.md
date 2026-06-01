# AR_Inventory

Module Odoo d'inventaire Araymond orienté scan, sessions d'inventaire et comparaison avec les données SAP/LX03.

## Objectif

Ce module sert à organiser les inventaires physiques, scanner les étiquettes, gérer les emplacements et suivre les écarts entre plusieurs passages de scan et les données SAP.

## Dépendances

- `base`
- Dépendance Python : `openpyxl`

## Modèles principaux

- `araymond.inventory` : ligne de scan et écran opérationnel d'inventaire.
- `araymond.etiquette` : étiquette ou unité scannée.
- `araymond.maininvsession` : session principale d'inventaire.
- `araymond.invsession` : session d'inventaire par emplacement ou sous-session.
- `araymond.lxo3` : données SAP/LX03 importées.
- `araymond.ref` : référentiel article.
- `araymond.imagestock` : image de stock.

## Fonctionnement

1. Une session principale est créée pour préparer l'inventaire.
2. Les données SAP/LX03 peuvent être chargées pour servir de référence.
3. Les opérateurs scannent les étiquettes, emplacements, UM, lots et quantités.
4. Le module gère plusieurs modes : RayPro, réception SAP, logistique et saisie manuelle.
5. Les sessions passent par les états de création, scan et fermeture.
6. Des actions affichent les écarts SAP vs premier scan, premier vs deuxième scan et deuxième vs troisième scan.
7. La fermeture permet de figer le résultat d'inventaire.

## Points métiers

- Contrôle des emplacements vides.
- Gestion des anomalies d'emplacement.
- Comptage des boîtes scannées.
- Scan multi-passage.
- Import et traitement de fichiers Excel via `openpyxl`.

## Vues

Le module fournit des menus et vues pour gérer les sessions, les scans, les écarts, les références et les données LX03.

## Sécurité

Les droits d'accès sont définis dans `security/ir.model.access.csv`.

