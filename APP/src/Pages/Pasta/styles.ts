import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #021526;
`;

export const NotaTitle = styled.Text`
  display: flex;
  color: #E2DAD6;
  font-weight: bold;
  margin:0px 10px;
  font-size: 20px;
  width: 75%;
  text-align: left;

  /* line-height: 2; */
`;

export const NotasContente = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  padding: 10px;
  border-top-width: 1px;
  border-bottom-width: 1px;

  border-top-style: solid;
  border-bottom-style: solid;

  border-top-color: #E2DAD6;
  border-bottom-color: #E2DAD6;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
