<?php
$conn = new mysqli("127.0.0.1", "root", "", "egrocer", 3306);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Ensure directories exist
$storage_path = __DIR__ . "/storage/app/public";
@mkdir("$storage_path/slider", 0777, true);
@mkdir("$storage_path/category", 0777, true);
@mkdir("$storage_path/product", 0777, true);

function downloadImage($url, $path) {
    $ch = curl_init($url);
    $fp = fopen($path, 'wb');
    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_exec($ch);
    curl_close($ch);
    fclose($fp);
}

echo "Setting up slider image...\n";
downloadImage("https://placehold.co/1200x400/png?text=Grocery+Slider", "$storage_path/slider/slider.png");
$conn->query("UPDATE sliders SET image='slider/slider.png'");

echo "Setting up categories images...\n";
$res = $conn->query("SELECT id, name FROM categories");
while($row = $res->fetch_assoc()) {
    $id = $row['id'];
    $name = urlencode($row['name']);
    $img_name = "category_$id.png";
    downloadImage("https://placehold.co/400x400/png?text=$name", "$storage_path/category/$img_name");
    $conn->query("UPDATE categories SET image='category/$img_name' WHERE id=$id");
}

echo "Setting up products images...\n";
$res = $conn->query("SELECT id, name FROM products");
while($row = $res->fetch_assoc()) {
    $id = $row['id'];
    $name = urlencode($row['name']);
    $img_name = "product_$id.png";
    downloadImage("https://placehold.co/400x400/png?text=$name", "$storage_path/product/$img_name");
    $conn->query("UPDATE products SET image='product/$img_name' WHERE id=$id");
}

echo "Images generated and database updated successfully!\n";
$conn->close();
