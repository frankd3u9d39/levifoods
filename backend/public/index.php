<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uriParts = explode('/', trim($uri, '/'));

// uriParts might be ['levifoods', 'backend', 'public', 'api', 'products']
// or just ['api', 'products'] if serving from public root.
// Let's look for 'api'.

$apiIndex = array_search('api', $uriParts);

if ($apiIndex !== false && isset($uriParts[$apiIndex + 1])) {
    $resource = $uriParts[$apiIndex + 1];
    
    // Include database config
    include_once '../config/database.php';
    $database = new Database();
    $db = $database->getConnection();

    switch ($resource) {
        case 'products':
            require_once '../api/products/index.php';
            break;
        case 'orders':
            require_once '../api/orders/index.php';
            break;
        case 'auth':
             if (isset($uriParts[$apiIndex + 2]) && $uriParts[$apiIndex + 2] === 'login') {
                 // require_once '../api/auth/login.php'; // Not implemented yet
                 echo json_encode(['message' => 'Login not implemented']);
             }
             break;
        default:
            http_response_code(404);
            echo json_encode(['message' => 'Resource not found']);
            break;
    }
} else {
    // Root or unknown
    echo json_encode(['status' => 'ok', 'message' => 'Levifood Backend API']);
}
?>
