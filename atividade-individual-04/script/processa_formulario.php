<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $aluno = array(
        "nome" => $_POST["name"],
        "ra" => $_POST["ra"],
        "sexo" => $_POST["sexo"],
        "idade" => $_POST["idade"],
        "endereco" => $_POST["endereco"],
        "telefone" => $_POST["telefone"],
        "email" => $_POST["email"]
    );

    // Valide os dados (por exemplo, verifique se os campos obrigatórios estão preenchidos)

    // Recupere os dados existentes do arquivo (caso exista)
    $base_de_dados = array();
    if (file_exists('dados.json')) {
        $base_de_dados = json_decode(file_get_contents('dados.json'), true);
    }

    // Adicione o aluno ao array de base de dados
    $base_de_dados[] = $aluno;

    // Salve os dados atualizados no arquivo
    file_put_contents('dados.json', json_encode($base_de_dados));

    // Redirecione o usuário de volta para a página de origem (index.html) automaticamente
    header("Location: ../index.html");
}
?>
