<?php
// backend/api/orders/index.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    // Validate input
    if (
        !empty($data->items) && 
        is_array($data->items) && 
        count($data->items) > 0 &&
        isset($data->total) && 
        is_numeric($data->total) && 
        floatval($data->total) > 0
    ) {
        try {
            $query = "INSERT INTO orders (user_id, items, total, status) VALUES (:user_id, :items, :total, 'pending')";
            $stmt = $db->prepare($query);

            $userId = $data->user_id ?? 1; // Default to user 1 for now
            // Sanitization: Ensure items structure is valid (basic check)
            $items = array_values($data->items); 
            $itemsJson = json_encode($items);
            $total = floatval($data->total);

            $stmt->bindParam(":user_id", $userId);
            $stmt->bindParam(":items", $itemsJson);
            $stmt->bindParam(":total", $total);

            if ($stmt->execute()) {
                http_response_code(201);
                echo json_encode(["message" => "Order created successfully.", "orderId" => $db->conn->lastInsertId()]);
            } else {
                http_response_code(503);
                echo json_encode(["message" => "Unable to create order."]);
            }
        } catch (Exception $e) {
             http_response_code(500);
             echo json_encode(["message" => "Server error.", "error" => $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode([
            "message" => "Invalid or incomplete data.",
            "errors" => [
                "items" => "Must be a non-empty array",
                "total" => "Must be a positive number"
            ]
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
}
?>
