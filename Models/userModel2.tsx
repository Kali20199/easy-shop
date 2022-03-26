interface IuserModel2 {
    id: string
    email: string
    passwordHash: string
    apartment: string
    city: string
    zip: string
    country: string
    phone: string
    isAdmin: boolean


}
export class userModel2 {
    id = ``
    email = ``
    passwordHash = ``
    apartment = ``
    city = ``
    zip = ``
    country = ``
    phone = ``
    isAdmin = false


    constructor(
        id: string,
        email: string, passwordHash: string, apartment: string, city: string, zip: string,
        country: string, phone: string, isAdmin: boolean) {
            this.id = id
        this.email = email
        this.passwordHash = passwordHash
        this.apartment = apartment
        this.city = city
        this.zip = zip
        this.country = country
        this.phone = phone
        this.isAdmin = isAdmin


    }
}
