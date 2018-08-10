import { Family } from './family.model';
import { States } from './states.model';

export class Equipment {
  constructor(
    public codigo: string = '',
    public localizacao: string = '',
    public familia: Family = null,
    public equipamento: string = '',
    public marca: string = '',
    public modelo: string = '',
    public nrSerie: string = '',
    public caracteristicas: string = '',
    public estado: States = null,
    public ultimaInspecao: Date = null,
    public proximaInspecao: Date = null,
    public inspecaoValida: boolean = false,
    public dataFabrico: Date = null,
    public dataServico: Date = null,
    public dataValidade: Date = null,
    public nrPo: string = '',
    public fornecedor: string = '',
    public ativo: boolean = false
  ) {}
}
