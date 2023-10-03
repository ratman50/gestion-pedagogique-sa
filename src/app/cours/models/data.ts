export interface Data {
    id:number,
    libelle:string
}
export interface IPersonn{
    id:number,
    nom:string
} 
export interface ICours{
    professeur:IPersonn,
    module:Data,
    classe:Data,
    semestre:Data,
    heure_global:number,
    annee_scolaire:number

}