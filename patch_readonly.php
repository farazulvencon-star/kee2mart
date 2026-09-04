<?php
$files = [
    'vendor/brick/math/src/BigDecimal.php',
    'vendor/brick/math/src/BigInteger.php',
    'vendor/brick/math/src/BigNumber.php',
    'vendor/brick/math/src/BigRational.php',
    'vendor/ramsey/collection/src/Collection.php',
    'vendor/ramsey/collection/src/DoubleEndedQueue.php',
    'vendor/ramsey/collection/src/Queue.php',
    'vendor/ramsey/collection/src/Set.php'
];
foreach ($files as $file) {
    $path = __DIR__ . '/' . $file;
    if (file_exists($path)) {
        $content = file_get_contents($path);
        $content = str_replace('readonly ', '', $content);
        file_put_contents($path, $content);
        echo "Patched $file\n";
    }
}
