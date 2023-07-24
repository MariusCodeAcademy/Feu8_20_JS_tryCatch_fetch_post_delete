## users.html

1. Parsiusti 5 vartotojus is https://dummyjson.com/users/
2. sugeneruoti sarasa is vartotoju. generuoti 5 pasirinktas savybes is uzerio obejkto (pvz firstName, age, birthDate ir tt )
3. (sunkesne) isrikiuoti sarasa mygtuko paspaudimu pagal varda

## shop.html

url https://dummyjson.com/products

1. tik uzsikrvus psl, su funkcija parsiusi prekes
2. reikalingi laukai:

```json
{
  "id": 1,
  "title": "iPhone 9",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "..."
}
```

3. sugeneruoti jas kaip parduotuves prekes (3 per ploti)

3.1. atvaizduoti kortelese tik nuotruka (thumbnail) title ir price

4. prideti nuoroda su tekstu "daugiau";

   4.1 nuododa veda i single-item.html su url parametru "id"

## single-item.html

1. pasiimti url parametra 'id'
2. parsiusti konkrecia preke su rastu id
3. atvaizduoti visa prekes informacija su nuotrauka ir prekes objekto
4. sustilizuoti bent minimaliai su css
5. prideti mygtuka ar nuoroda 'go back'
