<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();
\App\Models\Admin::where('email', 'admin@gmail.com')->update(['password' => \Illuminate\Support\Facades\Hash::make('123456')]);
echo "Password reset to 123456";
