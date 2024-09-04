import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px;
  background: #021526;
`;

export const Title = styled.Text`
  color: #fff;
  margin-top: 3.5px;
  text-align: center;
  font-size: 20px;
`;

export const Form = styled.View`
  align-self: stretch;
  flex: 1;
  justify-content:center;
  margin-top: 0px;
`;

export const FormInput = styled.TextInput`
  margin-bottom: 10px;
flex: 1;
  color: #fff;
  background: #6EACDA;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  height: 50px;
`;

export const Separator = styled.View`
  height: 2.5px;
  align-self: stretch;
  width: 85%;
  border-radius: 5px;
  flex:1;

  background: #03346E;
  margin: 10.5px 0 10.5px 24px;
`;
