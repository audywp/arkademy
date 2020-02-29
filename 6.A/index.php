<?php
// koneksi ke database


function query($query){
    $koneksi = mysqli_connect("localhost","root","","arkademy");
    $result = mysqli_query($koneksi, $query);
    $rows = [];
    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    return $rows;
}

$listProduck = query("SELECT * FROM product");
$listCashier = query("SELECT * FROM cashier");
$listCategory = query("SELECT * FROM category");
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>home</title>
    <link rel="stylesheet" href="css.css">
</head>
<body>
    <div class="table">
        <div class="cashier">
            <h2>cashier</h2>
            <?php foreach ($listCashier as $cashier) : ?>
            <p><?= $cashier["name"]; ?></p>
            <?php endforeach ?>
        </div>
        <div class="product">
        <h2>product</h2>
            <?php foreach ($listProduck as $product) : ?>
            <p><?= $product["name"]; ?></p>
            <?php endforeach ?>
        </div>
        <div class="category">
        <h2>category</h2>
            <?php foreach ($listCategory as $category) : ?>
            <p><?= $category["name"]; ?></p>
            <?php endforeach ?>
        </div>
        <div class="price">
        <h2>price</h2>
            <?php foreach ($listProduck as $product) : ?>
            <p><?= $product["price"]; ?></p>
            <?php endforeach ?>
        </div>
    </div>
</body>
</html> 
<!-- <?php foreach ($listCashier as $cashier) : ?>
    <?= $cashier["name"]; ?>
<?php endforeach ?> -->