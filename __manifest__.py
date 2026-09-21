{

    'name': 'AR_Inventory',
    'version':'1.0',
    'author':'Issam Eddabbar',
    'description':"This application is used to serve as an inventory tool for the Araymond Wherehouse",
    'installable': True,


    'depends': ['base', 'web'],
    'external_dependencies': {
        'python': ['openpyxl'],
    },
    'data': [
        'security/ir.model.access.csv',
        'views/menu.xml',
        'views/inventory.xml',
        ],
    'assets': {
        'web.assets_backend': [
            'AR_Inventory/static/src/js/scan_confirmation_dialog.js',
            'AR_Inventory/static/src/xml/scan_confirmation_dialog.xml',
        ],
    },
}
