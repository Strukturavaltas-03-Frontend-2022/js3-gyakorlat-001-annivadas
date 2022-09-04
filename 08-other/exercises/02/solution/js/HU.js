/*
 Készíts egy `HU` nevű objektumot, aminek az alábbi propertijei vannak:
- `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően
- `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt
- `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: első, második és harmadik" (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval)
*/


const HU = {
    date(date) { 
        return new Intl.DateTimeFormat('hu-HU').format(date)
    },
    currency(number) {
        const huCurrency = new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        })
        return huCurrency.format(number)
    },
    list(array) {
        return `${array[0]}, ${array[1]} és ${array[2]}` 
    }
}



export default HU;