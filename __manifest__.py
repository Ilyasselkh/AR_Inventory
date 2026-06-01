{

    'name': 'AR_Inventory',
    'version':'1.0',
    'author':'Issam Eddabbar',
    'description':"This application is used to serve as an inventory tool for the Araymond Wherehouse",
    'installable': True,


    'depends': ['base'],
    'external_dependencies': {
        'python': ['openpyxl'],
    },
    'data': [
        'security/ir.model.access.csv',
        'views/menu.xml',
        'views/inventory.xml',
        ]
}
