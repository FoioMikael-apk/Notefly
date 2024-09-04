import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #021526;
`;

export const ScrollItens = styled.ScrollView.attrs({
  // contentContainerStyle: { padding: 10 },
})`
  align-self: stretch;
  width: 100%;
  display: flex;
  max-height: 90%;
  padding: 10px 10px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3.5px;
  background: #03346E;
`;

export const TextInputAdd = styled.TextInput`
  width: 80%;
  
  padding: 5.9px 0px;
  margin-left: 0px;
  border-radius: 10px;
   
`;

export const ContentAdd = styled.View`
  width: 98.5%;
  padding: 10px;
  margin-bottom: 3.5px;
  display: flex;
  background: #6EACDA;
  border-radius: 3.5px;
  flex-direction: row;
  position: absolute;
  bottom: 0.1px;
  align-items: center;
  justify-content: space-between;
  border-width: 0.1px;
  border-color: #000;
  border-style: solid;
`;
