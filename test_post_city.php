<?php
$ch = curl_init('http://localhost/egrocer_backend/public/customer/city');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, ['latitude' => '23.8103', 'longitude' => '90.4125']);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['x-access-key: 903361', 'Accept: application/json', 'X-Module-Id: 1']);
echo substr(curl_exec($ch), 0, 500);
