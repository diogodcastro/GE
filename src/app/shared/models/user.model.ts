export class User {
  constructor(
    public userName: string = '',
    public password: string = '',
    public nome: string = '',
    public apelido: string = '',
    public levantarDepositar: boolean = false,
    public inspecionar: boolean = false,
    public reparar: boolean = false,
    public abater: boolean = false,
    public gerirEquipamentos: boolean = false,
    public gerirUtilizadores: boolean = false
  ) { }
}
