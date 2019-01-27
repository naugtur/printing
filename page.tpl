<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="./style.css">
</head>

<body>

{% for item in items %}
    {% if item.startsPage %}
        <div class="breaker"></div>
    {% endif %}
    <div class="page">{{ item.text }}</div>
{% else %}
    <p>You didn't pass items</p>
{% endfor %}



</body>

</html>