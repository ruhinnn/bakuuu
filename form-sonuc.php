<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $adSoyad = htmlspecialchars($_POST['adSoyad'] ?? '-');
    $email = htmlspecialchars($_POST['email'] ?? '-');
    $telefon = htmlspecialchars($_POST['telefon'] ?? '-');
    $cinsiyet = htmlspecialchars($_POST['cinsiyet'] ?? '-');
    $sehir = htmlspecialchars($_POST['sehir'] ?? '-');
    $mesaj = htmlspecialchars($_POST['mesaj'] ?? '-');
    
    // Konular (Checkbox array)
    $konular = $_POST['konu'] ?? [];
    $konuStr = !empty($konular) ? implode(', ', array_map('htmlspecialchars', $konular)) : '-';

    $resultPage = '
    <!DOCTYPE html>
    <html lang="tr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Sonucu</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="bg-light">
        <div class="container mt-5">
            <div class="card shadow">
                <div class="card-header bg-primary text-white">
                    <h3 class="mb-0">Gönderilen İletişim Bilgileri</h3>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <th style="width: 30%;">Ad Soyad</th>
                                <td>' . $adSoyad . '</td>
                            </tr>
                            <tr>
                                <th>E-mail</th>
                                <td>' . $email . '</td>
                            </tr>
                            <tr>
                                <th>Telefon</th>
                                <td>' . $telefon . '</td>
                            </tr>
                            <tr>
                                <th>Cinsiyet</th>
                                <td>' . $cinsiyet . '</td>
                            </tr>
                            <tr>
                                <th>Şehir</th>
                                <td>' . $sehir . '</td>
                            </tr>
                            <tr>
                                <th>İletişim Nedeni (Konu)</th>
                                <td>' . $konuStr . '</td>
                            </tr>
                            <tr>
                                <th>Mesaj</th>
                                <td>' . nl2br($mesaj) . '</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-center mt-4">
                        <a href="iletisim.html" class="btn btn-secondary">İletişim Sayfasına Dön</a>
                        <a href="index.html" class="btn btn-primary">Ana Sayfaya Git</a>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    ';

    echo $resultPage;

} else {
    header("Location: iletisim.html");
    exit();
}
?>
