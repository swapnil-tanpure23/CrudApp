<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generic Database Proxy</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }

        h1, h2 {
            color: #333;
        }

        .api-section {
            margin-top: 20px;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        li {
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Generic Database Proxy Interface</h1>

        <div class="api-section">
            <h2>API Endpoints</h2>
            <ul>
                <li><strong>POST:</strong> /:collection</li>
                <li><strong>GET:</strong> /:collection/:id</li>
                <li><strong>POST:</strong> /:collection/:id</li>
                <li><strong>DELETE:</strong> /:collection/:id</li>
            </ul>
        </div>
    </div>
</body>
</html>
