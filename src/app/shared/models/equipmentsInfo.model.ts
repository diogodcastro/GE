import { Family } from './family.model';

export class EquipmentsInfo {
  constructor(
    public family: Family,
    public equipamento: string,
    public periodicidade: number,
    public observacoes: string
  ) {}
}
