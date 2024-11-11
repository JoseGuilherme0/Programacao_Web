const consultarCEP = () => {
    const cep = document.getElementById('cepInput').value.trim();

    if (!/^\d{8}$/.test(cep)) {
      document.getElementById('result').innerHTML = "<p style='color:red;'>CEP inválido. Digite 8 dígitos.</p>";
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        if (!response.ok) throw new Error('Erro na consulta');
        return response.json();
      })
      .then(data => {
        if (data.erro) {
          document.getElementById('result').innerHTML = "<p style='color:red;'>CEP não encontrado.</p>";
        } else {
          document.getElementById('result').innerHTML = `
            <h3>Resultado:</h3>
            <p><strong>Logradouro:</strong> ${data.logradouro || 'N/A'}</p>
            <p><strong>Bairro:</strong> ${data.bairro || 'N/A'}</p>
            <p><strong>Cidade:</strong> ${data.localidade || 'N/A'}</p>
            <p><strong>Estado:</strong> ${data.uf || 'N/A'}</p>
          `;
        }
      })
      .catch(error => {
        document.getElementById('result').innerHTML = `<p style='color:red;'>Erro: ${error.message}</p>`;
      });
  };

  document.getElementById('consultarBtn').addEventListener('click', consultarCEP);