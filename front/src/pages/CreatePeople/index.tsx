import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import axios from 'axios';

import './styles.css';
import Phone from '../../components/Phone';

// array ou objeto: manualemnte informar o tipo da variavel
interface People {
  id: number;
  name: string;
  birthDate: string;
  cpf: string;
  phones: Phone[];
}

interface Phone {
    type: string;
    number: string;
}

const CreatePeople = () => {
  const [people, setPeople] = useState<People>();

  const [formData, setFormData] = useState({
    name:'',
    cpf:'',
    phone:''
  });


  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value })
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, cpf, phone } = formData;

    const phoneAux = {
      type: 'MOBILE',
      number: phone,
    } as Phone;

    const data = {
      name,
      cpf,
      phones: [phoneAux]
    };

    await api.post('v1/people', data);

    alert('A Pessoa foi criada!');

  }

  return (
    <div id="page-create-point">
      <header>

      </header>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro da <br /> pessoa</h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da pessoa</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">CPF</label>
              <input 
                type="text" 
                name="cpf" 
                id="cpf"
                onChange={handleInputChange}
              />
            </div>
            <Phone handleInputChange={handleInputChange}/>
          </div>
        </fieldset>
        

        <button type="submit">
          Cadastrar Pessoa
        </button>
      </form>
    </div>
  )
};

export default CreatePeople;