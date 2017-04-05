'use strict';

const users = [
    {
        "id": 1,
        "first_name": "Andrey",
        "last_name": "Melnik",
        "city": "Kiev"
    },
    {
        "id": 2,
        "first_name": "Andrey",
        "last_name": "Mima",
        "city": "Moscow"
    },
    {
        "id": 3,
        "first_name": "Andrey",
        "last_name": "Minchukov",
        "city": "Lviv"
    }
];

const customers = [
    {
        "id": 101,
        "first_name": "James",
        "last_name": "Butterburg",
        "address": {
            "street": "6649 N Blue Gum St",
            "city": "New Orleans",
            "state": "LA",
            "zip": "70116"
        }
    },
    {
        "id": 202,
        "first_name": "Josephine",
        "last_name": "Darakjy",
        "address": {
            "street": "4 B Blue Ridge Blvd",
            "city": "Brighton",
            "state": "MI",
            "zip": "48116"
        }
    },
    {
        "id": 203,
        "first_name":"Art",
        "last_name":"Chemel",
        "address": {
            "street": "8 W Cerritos Ave #54",
            "city": "Bridgeport",
            "state": "NJ",
            "zip": "08014"
        }
    }
];

const countries = [
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Åland Islands', code: 'AX'},
    {name: 'Albania', code: 'AL'},
    {name: 'Algeria', code: 'DZ'},
    {name: 'American Samoa', code: 'AS'},
    {name: 'AndorrA', code: 'AD'},
    {name: 'Angola', code: 'AO'},
    {name: 'Anguilla', code: 'AI'},
    {name: 'Antarctica', code: 'AQ'},
    {name: 'Antigua and Barbuda', code: 'AG'},
    {name: 'Argentina', code: 'AR'},
    {name: 'Armenia', code: 'AM'},
    {name: 'Aruba', code: 'AW'},
    {name: 'Australia', code: 'AU'},
    {name: 'Austria', code: 'AT'},
];

module.exports = {
    users: users,
    customers: customers,
    countries: countries
};