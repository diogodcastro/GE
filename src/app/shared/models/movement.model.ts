export class Movement {
  constructor(
    public username: string = '',
    public usoPorOutro: string = '',
    public empresas: string = '',
    public codigo: string = '',
    public equipamento: string = '',
    public movimento: string = '',
    public trabalho: string = '',
    public tipoDeposito: string = '',
    public observacoes: string = '',
    public data: Date = null
  ) {}
}
