<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');

    // Boş alan kontrolü
    if (empty($email) || empty($password)) {
        header("Location: login.html?error=empty");
        exit();
    }

    // Mail formatı kontrolü (örnek: b2412100001@sakarya.edu.tr)
    $emailParts = explode('@', $email);
    
    if (count($emailParts) == 2 && strtolower($emailParts[1]) === 'sakarya.edu.tr') {
        $ogrenciNo = $emailParts[0];
        
        // Şifre ile öğrenci numarası eşleşiyor mu?
        if ($ogrenciNo === $password) {
            // Başarılı giriş
            $successPage = '
            <!DOCTYPE html>
            <html lang="tr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Başarılı Giriş</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
                <style>
                    body { background: linear-gradient(to right, #8e2de2, #4a00e0); height: 100vh; display: flex; align-items: center; justify-content: center; color: white; text-align: center; font-family: sans-serif; }
                    .card { background: rgba(255, 255, 255, 0.1); padding: 50px; border-radius: 15px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); }
                    .btn-light { margin-top: 20px; }
                </style>
            </head>
            <body>
                <div class="card shadow-lg">
                    <h1 class="display-3">Hoşgeldiniz</h1>
                    <h2 class="display-5 fw-bold">' . htmlspecialchars($ogrenciNo) . '</h2>
                    <a href="index.html" class="btn btn-light btn-lg px-4 mt-4">Ana Sayfaya Dön</a>
                </div>
            </body>
            </html>
            ';
            echo $successPage;
            exit();
        }
    }
    
    // Hatalı Giriş -> Login sayfasına yönlendir
    header("Location: login.html?error=invalid");
    exit();

} else {
    // POST request değilse login sayfasına yolla
    header("Location: login.html");
    exit();
}
?>
