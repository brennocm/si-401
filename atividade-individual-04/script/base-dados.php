<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../styles/menu.css" media="screen"/>
    <link rel="stylesheet" type="text/css" href="../styles/base-dados.css" media="screen"/>
    <title>Base de Dados</title>
</head>
<body>

    <div class="menu">
        <div class="menu-item">
            <a href="../index.html">
                <img src="../icons/home.png" alt="Ícone Home" class="menu-icon">
                Home
            </a>
        </div>
        <div class="menu-item">
            <a href="base-dados.php">
                <img src="../icons/data.png" alt="Ícone Dados" class="menu-icon">
                Dados
            </a>
        </div>

        <div class="conteudo">
        <h2>Dados dos Alunos</h2>
        <ul>
            <?php
            // Recupere os dados do arquivo
            $base_de_dados = array();
            if (file_exists('dados.json')) {
                $base_de_dados = json_decode(file_get_contents('dados.json'), true);
            }

            if (!empty($base_de_dados)) {
                foreach ($base_de_dados as $aluno) {
                    echo '<li>';
                    echo 'Nome: ' . $aluno['nome'] . '<br>';
                    echo 'RA: ' . $aluno['ra'] . '<br>';
                    echo 'Sexo: ' . $aluno['sexo'] . '<br>';
                    echo 'Idade: ' . $aluno['idade'] . '<br>';
                    echo 'Endereço: ' . $aluno['endereco'] . '<br>';
                    echo 'Telefone: ' . $aluno['telefone'] . '<br>';
                    echo 'Email: ' . $aluno['email'] . '<br>';
                    echo '</li>';
                }
            } else {
                echo '<p>Nenhum aluno cadastrado ainda.</p>';
            }
            ?>
    </div>
        </ul>
    </div>
</body>
</html>
