
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
    
