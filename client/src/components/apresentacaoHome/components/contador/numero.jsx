import React from "react";
import { ReactComponent as LadoNumero } from "assets/fundoNumeroRelogio.svg";

const Numero = () => {
  return (
    <div className="containerNumero">
      <LadoNumero className="ladoNumero celulaSuperior" />
      <LadoNumero className="ladoNumero celulaSuperiorEsquerda noventaGraus" />
      <LadoNumero className="ladoNumero celulaSuperiorDireita noventaGraus" />
      <LadoNumero className="ladoNumero celulaCentro" />
      <LadoNumero className="ladoNumero celulaInferiorEsquerda noventaGraus" />
      <LadoNumero className="ladoNumero celulaInferiorDireita noventaGraus" />
      <LadoNumero className="ladoNumero celulaInferior" />
    </div>
  );
};

export default Numero;
