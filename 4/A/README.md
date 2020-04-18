## query db
- tampilkan semua makanan

```
SELECT * FROM foods
```

- tampilkan makan per kategori, field ditampilkan nama kategori, nama makanan, stock

```
SELECT categories.name,foods.name,foods.stock
FROM foods
INNER JOIN categories ON foods.categories_id=categories.categories_id;
```

- tampilan detail makanan berdasarkan id

```
SELECT categories.name,foods.name,foods.stock
FROM foods WHERE foods.id = ?
INNER JOIN categories ON foods.categories_id=categories.categories_id;
```
