import React, { useEffect } from "react";
import { ReactComponent as LadoNumero } from "assets/fundoNumeroRelogio.svg";

const Numero = ({ numero = 0 }) => {
  useEffect(() => {
    console.log(numero)
  }, [numero])
  
  return (
    <div className="containerNumero">
      <LadoNumero className="ladoNumero celulaSuperior" data-ativo={numero[0]} />
      <LadoNumero className="ladoNumero celulaSuperiorEsquerda noventaGraus" data-ativo={numero[1]} />
      <LadoNumero className="ladoNumero celulaSuperiorDireita noventaGraus" data-ativo={numero[2]} />
      <LadoNumero className="ladoNumero celulaCentro" data-ativo={numero[3]} />
      <LadoNumero className="ladoNumero celulaInferiorEsquerda noventaGraus" data-ativo={numero[4]} />
      <LadoNumero className="ladoNumero celulaInferiorDireita noventaGraus" data-ativo={numero[5]} />
      <LadoNumero className="ladoNumero celulaInferior" data-ativo={numero[6]} />
    </div>
  );
};

export default Numero;
