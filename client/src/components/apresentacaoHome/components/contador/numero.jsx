import React from "react";
import { ReactComponent as LadoNumero } from "assets/fundoNumeroRelogio.svg";

const Numero = ({ numero }) => {
  return (
    <div className="containerNumero">
      <LadoNumero className="ladoNumero celulaSuperior" data-ativo="1" />
      <LadoNumero className="ladoNumero celulaSuperiorEsquerda noventaGraus" data-ativo="1" />
      <LadoNumero className="ladoNumero celulaSuperiorDireita noventaGraus" data-ativo="1" />
      <LadoNumero className="ladoNumero celulaCentro" data-ativo="1" />
      <LadoNumero className="ladoNumero celulaInferiorEsquerda noventaGraus" data-ativo="1" />
      <LadoNumero className="ladoNumero celulaInferiorDireita noventaGraus" data-ativo="1" />
      <LadoNumero className="ladoNumero celulaInferior" data-ativo="1" />
    </div>
  );
};

export default Numero;
