import React, { useCallback } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatorio'),
        email: Yup.string()
          .required('E-mail Obrigatorio')
          .email('Digite um E-mail valido'),
        password: Yup.string().min(6, 'No minimo 6 digitos'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logoImg} alt="GoBarber" />
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>
          <a href="login">
            <FiArrowLeft />
            Voltar para logon
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
