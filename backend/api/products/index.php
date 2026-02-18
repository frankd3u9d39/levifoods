<?php
// backend/api/products/index.php

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $query = "SELECT * FROM products";
        $stmt = $db->prepare($query);
        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($products);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["message" => "Error fetching products.", "error" => $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
}
?>
