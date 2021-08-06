
    export interface Endereco {
        id: string;
        cep: string;
        logradouro: string;
        numero: number;
        bairro: string;
        cidade: string;
        complemento: string;
        uf: string;
        cpf_cliente: string;
        is_primario: string;
    }

    export interface Cliente {
        cpf: string;
        nome: string;
        data_nascimento: string;
        email: string;
        telefone: string;
        enderecos: Endereco[];
    }
    
    export interface EnderecoViaCep {
        cep: string;
        logradouro: string;
        complemento: string;
        bairro: string;
        localidade: string;
        uf: string;
        ibge: string;
        gia: string;
        ddd: string;
        siafi: string;
    }
