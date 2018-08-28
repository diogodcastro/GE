
export enum Family {
  gases = 'Gases',
  eletrico = 'Elétrico',
  hidraulico = 'Hidráulico',
  epiEpc = 'EPI_EPC',
  ferramentasAT = 'Ferramentas_AT',
  pneumatico = 'Pneumático',
  maquinaFerramenta = 'Máquina_Ferramenta',
  escadas = 'Escadas_Escadotes',
  elevacao = 'Elevação'
}

export namespace Fami {

  export function keys(): Array<string> {
    const value = Object.values(Family);
    return value;
  }
}
