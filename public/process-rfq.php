<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$firstName = trim($_POST['firstName'] ?? '');
$lastName = trim($_POST['lastName'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$company = trim($_POST['company'] ?? '');
$industry = trim($_POST['industry'] ?? '');
$services = $_POST['services'] ?? [];
$timeline = trim($_POST['timeline'] ?? '');
$volume = trim($_POST['volume'] ?? '');
$details = trim($_POST['details'] ?? '');

// Validation
$errors = [];
if (empty($firstName)) $errors[] = 'Nombre es requerido';
if (empty($lastName)) $errors[] = 'Apellido es requerido';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Correo electrónico válido es requerido';
if (empty($phone)) $errors[] = 'Número de teléfono es requerido';
if (empty($company)) $errors[] = 'Nombre de la empresa es requerido';
if (empty($industry)) $errors[] = 'Industria es requerida';
if (empty($services)) $errors[] = 'Al menos un servicio es requerido';
if (empty($timeline)) $errors[] = 'Cronograma es requerido';
if (empty($details)) $errors[] = 'Detalles del proyecto son requeridos';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Errores de validación', 'errors' => $errors]);
    exit;
}

// Format services
$servicesList = is_array($services) ? implode(', ', $services) : $services;

// Format email content
$subject = 'Nueva Solicitud de Cotización - ' . $company;

$message = "
Nueva Solicitud de Cotización Recibida

Información de Contacto:
- Nombre: $firstName $lastName
- Correo Electrónico: $email
- Teléfono: $phone

Información de la Empresa:
- Empresa: $company
- Industria: $industry

Requisitos de Servicio:
- Servicios Necesarios: $servicesList
- Cronograma: $timeline
- Volumen Mensual Estimado: $volume

Detalles del Proyecto:
$details

--
Este mensaje fue enviado desde el formulario de RFQ en el sitio web.
";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
$to = 'ventas@vlmf.com.pe';
$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => '¡Gracias por su solicitud! Nos pondremos en contacto con usted dentro de 24 horas.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar el correo. Por favor, inténtelo de nuevo.']);
}
?>
