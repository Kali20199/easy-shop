export interface ICategoryModel {
    icon: string
    name: string
    color: string

}
export class CategoryModel {
    icon = ``
    name = ``
    color = ``

    constructor(
        icon: string,
        name: string, color: string,) {
        this.icon = icon
        this.name = name
        this.color = color

    }
}
