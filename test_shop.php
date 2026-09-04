<?php
$ch = curl_init('http://localhost/egrocer_backend/public/customer/shop?city_id=1&latitude=23.8103&longitude=90.4125');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['x-access-key: 903361', 'Accept: application/json', 'X-Module-Id: 1']);
$response = curl_exec($ch);
$data = json_decode($response, true);
echo "Has categories: " . isset($data['data']['categories']) . "\n";
if(isset($data['data']['categories'])) echo "Categories length: " . count($data['data']['categories']) . "\n";
